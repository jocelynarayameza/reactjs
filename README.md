## Ecommerce Nous Jouon Games 

An ecommerce application used to buy videogames on user preference, built with React, JavaScript, and CSS.


#### Example:

This is a project for the course of React JS of Coderhouse. Users can filter games by category, add products and see the details of the order in a cart. It also allows you to complete a form with the user data and upload an order to firebase.


## Installation and Setup Instructions

1. Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

2. To intall the dependencies.

3. To Start Server: `npm run dev`  


## Routes:

The App.jsx is the main component of the application.

        Item List Container: <Route path='/category/:categoryId' element={<ItemListContainer/>} />

        This component show the available games.
          
        Item Detail Container  <Route path='/item/:itemId' element={<ItemDetailContainer/>} />

        This component shows additional information about the game.

        Cart <Route path='/cart' element={<Cart />} />
          
        This component show the cart with the games selected and the prices.

        Checkout  <Route path='/checkout' element={<Checkout />} />

        Here you complete a form to send the order to the database.




