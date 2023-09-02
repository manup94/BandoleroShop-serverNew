# Bandolero-Shop

https://bandoleroshop-server.onrender.com/admin
## Introduction

I have created a fully functional e-commerce website in this project, addressing almost all the necessary aspects for a seamless shopping experience. While a inventory control system is yet to be implemented, the site enables users to add products to both their wishlist and their shopping cart. Subsequently, they can proceed through the checkout process, which is connected to Stripe on the backend.

The interface is highly adaptable, ensuring a consistent user experience across a wide range of devices. I utilized Next.js 13 for the frontend, and for the backend, I leveraged Strapi, which also serves as an administration panel allowing administrators to easily manage products and other system aspects. TypeScript was adopted to provide the code with greater coherence and security, while styles were implemented using Tailwind CSS.

For form management, I utilized the Zod library. In summary, this project offers a complete online shopping experience, enhanced by the ability to search for products by name, a robust payment integration with Stripe, and a user menu where they can add or modify their addresses, view order history with details, update personal information, and manage their wishlist.


## Endpoints we are going to use

Theres are the endpoints that we are going to use in our proyect:

| URL                       |METHOD| DESCRIPTION                                                               | PROTECTED |
| ------------------------- |------| ------------------------------------------------------------------------- | --------- |
| /api/auth/local           |POST  | Login endpoint                                                            |           |
| /api/auth/local/register  |POST  | Register endpoint                                                         |           |
| /api/addresses            |POST| Create new address                                                          | ✅         |
| /api/addresses?filters[user][id][$eq]=:user_id  |GET| Get all address                                        | ✅         |
| /api/addresses/:address_id  |PUT| Update address data                                                        | ✅         |
| /api/addresses/:address_id  |DELETE| Delete address                                                          | ✅         |
| /api/categories?populate=*  |GET| Get all categories                                                         |            |
| /api/orders?filters[user][id][$eq]=:user_id&sort[0]=createdAt:desc       |GET| Get all orders                | ✅         |
| /api/products/products?populate=*  |GET| Get all products                                                    |            |
| /api/products/?filters[category][title][$eq]=:category&pagination[page]=:page&pagination[pageSize]=6&populate=* |GET| Filter products by category |          |
| /api/products/?filters[slug][$eq]=:slug&populate=* |GET| Get one product by slug                             |            |
| /api/products/?filters[title][$contains]=:title&pagination[page]=:page&pagination[pageSize]=6&populate=* |GET |Get product by title  |          |
| /api/products/:product_id?populate[0]=images&populate[1]=category  |GET| Get product by Id                    |            |
| /api/users/me             |GET  | Get user data                                                               | ✅         |
| /api/users/:user_id  |PUT| Update user data                                                                   | ✅         |
| /api/wishlists?filters[user][id][$eq][0]=:user_id&filters[product][id][$eq][1]=:product_id  |GET| Check if the product is already in the wish list        | ✅         |
| /api/wishlists           |POST   | Add product to the wishlist                                                | ✅         |
| /api/wishlists           |DELETE| Delete product in wishlist                                                  | ✅         |
| /api/wishlists?filters[user][id][$eq]=:user_id&populate=product.images  |GET| Get all products in wishlist    | ✅         |




