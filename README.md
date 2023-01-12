# Front-end Project

![React](https://img.shields.io/badge/React-v.18-blue)
![Redux toolkit](https://img.shields.io/badge/Redux-v.1.9-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-v.4.9-green)

## About the App
Welcome to my Fake Webstore. This project represents the culmination of everything I’ve learned in Integrify’s Frontend course. It’s structured using React Redux with Typescript, connecting to the API endpoint at  [https://fakeapi.platzi.com/](https://fakeapi.platzi.com/) to create a real (fake) e-commerce website.

Check out the website at:

<https://kitshopping.netlify.app>

### Note! 
- For those who like to skip the wall-of-text, I encourage you to test all of the user login features. However, their server is completely open and unencrypted. Please do not login with any personal credentials.

- To test admin features found on the Products and Individual Product Pages, use the following username and password:

```
admin (at) mail.com
admin123
```

(This is by Fakeapi’s design)

## Instructions
- The layout of the homepage, all products, and their categories are dependent on the fake API. Having said that, the homepage is limited to showing the first six categories (if they exist), and six products as featured products (if they exist).


![](Screen%20Shot%202023-01-12%20at%2018.42.47%202.png)

- To browse the products in a category, click on information `(i)` button in its bottom heading. Click on `Learn More` to go to an individual product page, and add that product to the cart if you like.

- From the navbar at the top of the page, you can browse all products, or all categories, access the shopping cart, and the profile page. If not logged-in, the profile page will redirect you to login or register as a new customer.


![](Screen%20Shot%202023-01-12%20at%2018.50.45.png)

![](Screen%20Shot%202023-01-12%20at%2018.51.03.png)

## Features
### Navbar
- The profile link’s icon changes depending on if the user is logged in or not. If the user is logged in, it displays their randomly generated profile picture.

- The shopping cart badge appears with a count of items in the cart, if there’s anything in the cart.


![](Screen%20Shot%202023-01-12%20at%2018.53.47.png)

### Products and Categories Pages
- The pages for all products and all categories allows you to sort ascending or descending according to name, category name, or price. The sort button changes according to ascending or descending. 

![](Screen%20Shot%202023-01-12%20at%2022.57.07.png)

- In the case of the categories page, the sorting option is only of course by name.


![](Screen%20Shot%202023-01-12%20at%2022.55.41.png)

- The reason there is a separate page for browsing by product and by category, and where there is a search feature just for category, is that being an open API, people are always adding to it, there can sometimes be many categories, so only featured categories are shown on the home page. Users should be able to browse all categories if they wish.

- The search feature on these pages allows you to search products on the product page, and categories on the categories page. Clicking the search button or hitting enter will show all results, and there’s a backspace button to clear your search quickly (Does not appear in all screenshots).

### Cart
- The layout of the Cart page changes slightly depending on when you open it, and what’s there. If there’s no products, it’s fairly empty.


![](Screen%20Shot%202023-01-12%20at%2018.55.01.png)

- The Cart page will list the items in the cart, and allow you to add and remove items with a respective click of the plus and minus buttons. You can also quickly empty the cart. There’s no checkout page by design, and you do not have to be logged in to add items to the shopping cart.


![](Screen%20Shot%202023-01-12%20at%2018.54.36.png)

### Users
- When registering to the page, all users are assigned the role of customer, and as such, all customers may edit their user information on the Profile page. The admin account however, is protected from editing.


![](Screen%20Shot%202023-01-12%20at%2018.43.49.png)

![](Screen%20Shot%202023-01-12%20at%2018.44.57.png)

![](Screen%20Shot%202023-01-12%20at%2018.56.24.png)

- By logging into the admin account, it’s possible to test out the admin features of the website. On the Products page, a new button called Add appears, where it’s possible to add new products. On the individual product pages, there’s a new button to modify or delete current products. 


![](Screen%20Shot%202023-01-12%20at%2018.57.11.png)

![](Screen%20Shot%202023-01-12%20at%2018.57.42.png)

![](Screen%20Shot%202023-01-12%20at%2018.58.14.png)

![](Screen%20Shot%202023-01-12%20at%2018.58.48.png)

#### Note!
- As this is an open server, please be mindful of how many items or user accounts you add and modify, and never post personal information. Their API will return errors if you try to add or modify an item with a price of zero. The website will alert you, but you will have to start again.

## Future Plans
- I would like to implement more admin features, taking full advantage of the API with the ability to add, modify, and delete categories.

- The website should remember your shopping cart contents, and not log you out refreshing the page. (AKA localStorage)

- Light and dark mode.

## Application File Structure
src
 ┣ components
 ┃ ┣ AddProductModal.tsx
 ┃ ┣ FeaturedCategories.tsx
 ┃ ┣ FeaturedProducts.tsx
 ┃ ┣ Header.tsx
 ┃ ┣ ProtectedProfile.tsx
 ┃ ┣ SortAllProducts.tsx
 ┃ ┣ SortCategories.tsx
 ┃ ┗ UpdateProductModal.tsx
 ┣ hooks
 ┃ ┗ reduxHook.ts
 ┣ pages
 ┃ ┣ BrowseCategories.tsx
 ┃ ┣ Cart.tsx
 ┃ ┣ CategoryProducts.tsx
 ┃ ┣ Home.tsx
 ┃ ┣ Item.tsx
 ┃ ┣ Login.tsx
 ┃ ┣ Products.tsx
 ┃ ┣ Profile.tsx
 ┃ ┣ Register.tsx
 ┃ ┗ Root.tsx
 ┣ redux
 ┃ ┣ reducers
 ┃ ┃ ┣ cartReducer.ts
 ┃ ┃ ┣ categoryReducer.ts
 ┃ ┃ ┣ productReducer.ts
 ┃ ┃ ┗ userReducer.ts
 ┃ ┗ store.ts
 ┣ types
 ┃ ┣ cart.ts
 ┃ ┣ category.ts
 ┃ ┣ images.ts
 ┃ ┣ product.ts
 ┃ ┗ user.ts
 ┣ App.tsx
 ┣ index.tsx
 ┣ react-app-env.d.ts
 ┣ reportWebVitals.ts
 ┗ setupTests.ts