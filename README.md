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
- The layout of the homepage, all products, and their categories are dependent on the fake API. Having said that, the homepage is limited to showing the first five categories (if they exist), and six products as featured products (if they exist). If anything takes a little while to load, just wait a second or two.

<img width="1440" alt="Screen Shot 2023-01-15 at 13 07 14" src="https://user-images.githubusercontent.com/40215472/212537282-9b6e4cac-fbcf-413a-ae77-e213a702dba4.png">


- To browse the products in a category from the home page, simply click on the picture, or click the roung buttons below to select which category interests you. It's also possible to add items to the cart from the home page.

- From the navbar at the top of the page, you can browse all products, or all categories, access the shopping cart, and the profile page. If not logged-in, the profile page will redirect you to login or register as a new customer.


<img width="1440" alt="Screen Shot 2023-01-12 at 18 50 45" src="https://user-images.githubusercontent.com/40215472/212193913-7fe7d8f4-4e34-4806-a99e-17b37d74090e.png">

<img width="1440" alt="Screen Shot 2023-01-12 at 18 51 03" src="https://user-images.githubusercontent.com/40215472/212194027-16ef05e1-f02a-4cf0-9771-ecb6bde7bda1.png">


## Features
### Navbar
- The profile link’s icon changes depending on if the user is logged in or not. If the user is logged in, it displays their randomly generated profile picture.

- The shopping cart badge appears with a count of items in the cart, if there’s anything in the cart.

<img width="1440" alt="Screen Shot 2023-01-15 at 13 08 57" src="https://user-images.githubusercontent.com/40215472/212537394-c3bd72d5-28ef-4808-9463-519ec7a804f3.png">


### Products and Categories Pages
- The pages for all products and all categories allows you to sort ascending or descending according to name, category name, or price. The sort button changes according to ascending or descending. You may also add items to cart from the respective products pages.


<img width="1440" alt="Screen Shot 2023-01-15 at 13 08 31" src="https://user-images.githubusercontent.com/40215472/212537317-649dfe6e-df09-47a3-8905-5b43ee46d157.png">


- In the case of the categories page, the sorting option is only of course by name.


<img width="1440" alt="Screen Shot 2023-01-13 at 0 27 59" src="https://user-images.githubusercontent.com/40215472/212194555-0c84a061-7bf9-491f-9bf0-b765acdfff5e.png">


- The reason there is a separate page for browsing by product and by category, and why there is a search feature just for category, is that being an open API, people are always adding to it, there can sometimes be many categories, so only featured categories are shown on the home page. Users should be able to browse all categories if they wish.

- The search feature on these pages allows you to search products on the product page, and categories on the categories page. Clicking the search button or hitting enter will show all results, and there’s a backspace button to clear your search quickly (Does not appear in all screenshots).

### Cart
- The layout of the Cart page changes slightly depending on when you open it, and what’s there. If there’s no products, it’s fairly empty.


<img width="1440" alt="Screen Shot 2023-01-12 at 18 55 01" src="https://user-images.githubusercontent.com/40215472/212194645-27182c74-821a-483e-be68-8f8698cf7ee0.png">


- The Cart page will list the items in the cart, and allow you to add and remove items with a respective click of the plus and minus buttons. You can also quickly empty the cart. There’s no checkout page by design, and you do not have to be logged in to add items to the shopping cart.


<img width="1440" alt="Screen Shot 2023-01-12 at 18 54 36" src="https://user-images.githubusercontent.com/40215472/212194835-4e127b75-9862-424b-9680-f6c996cf2ea7.png">


### Users
- When registering to the page, all users are assigned the role of customer, and as such, all customers may edit their user information on the Profile page. The admin account however, is protected from editing. While editing your user information, there's also the ability to show and hide the password.


<img width="480" alt="Screen Shot 2023-01-12 at 18 43 49" src="https://user-images.githubusercontent.com/40215472/212195075-c54d67c1-4611-4ebf-a966-38d2de6db633.png">


<img width="476" alt="Screen Shot 2023-01-12 at 18 44 57" src="https://user-images.githubusercontent.com/40215472/212195145-16c7fb79-e7d0-4d1c-9054-a81d9abb9260.png">

<img width="409" alt="Screen Shot 2023-01-12 at 18 56 24" src="https://user-images.githubusercontent.com/40215472/212195278-2c66ad65-a2ac-4ec0-b98c-82e2b43661df.png">


- By logging into the admin account, it’s possible to test out the admin features of the website. On the Products page, a new button called Add appears, where it’s possible to add new products. On the individual product pages, there’s a new button to modify or delete current products. 

<img width="1440" alt="Screen Shot 2023-01-15 at 13 15 36" src="https://user-images.githubusercontent.com/40215472/212537577-4da70d6c-b2c5-4db6-85c7-363ecc33f43d.png">

<img width="1440" alt="Screen Shot 2023-01-13 at 0 34 13" src="https://user-images.githubusercontent.com/40215472/212195865-c1917821-a8dd-4468-bc38-a40485b53d77.png">

<img width="1440" alt="Screen Shot 2023-01-15 at 13 15 59" src="https://user-images.githubusercontent.com/40215472/212537625-89f31d3f-6361-4170-9bc6-ee125ebeae87.png">

<img width="1440" alt="Screen Shot 2023-01-12 at 18 58 48" src="https://user-images.githubusercontent.com/40215472/212195972-48889b53-84c5-4771-9f84-b0690e70294d.png">


#### Note!
- As this is an open server, please be mindful of how many items or user accounts you add and modify, and never post personal information. Their API will return errors if you try to add or modify an item with a price of zero. The website will alert you, but you will have to start again.

## Future Plans
- I would like to implement more admin features, taking full advantage of the API with the ability to add, modify, and delete categories.

- The website should remember your shopping cart contents, and not log you out refreshing the page. (AKA localStorage)

- Light and dark mode.

- Work on unit testing.

## Application File Structure


<img width="1164" alt="Screen Shot 2023-01-12 at 23 37 30" src="https://user-images.githubusercontent.com/40215472/212196889-a31cea3f-cd21-4151-8150-0be8c82994d9.png">

