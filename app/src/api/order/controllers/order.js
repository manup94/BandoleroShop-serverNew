'use strict';

// @ts-ignore
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

function calcDiscountPrice(price, discount) {
    if (!discount) return price
    const discountAmount = (price * discount) / 100
    const result = price - discountAmount
    return result.toFixed(2)
}

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async paymentOrder(ctx) {
        const { token, products, idUser, addressShipping } = ctx.request.body

        let totalPayment = 0

        products.forEach(product => {
            const priceTemp = calcDiscountPrice(
                product.attributes.price,
                product.attributes.discount
            )
            totalPayment += Number(priceTemp) * product.quantity
        });

        const charge = await stripe.charges.create({
            amount: totalPayment * 100,
            currency: 'eur',
            source: token.id,
            description: `User ID: ${idUser}`
        })

        const data = {
            products,
            user: idUser,
            totalPayment,
            idPayment: charge.id,
            addressShipping
        }

        const model = strapi.contentTypes["api::order.order"]

        const validData = await strapi.entityValidator.validateEntityCreation(
            model,
            data
        )

        const entry = await strapi.db
            .query("api::order.order")
            .create({ data: validData })

        return entry
    }
}));