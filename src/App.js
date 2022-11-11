import './App.css';
import React, { useState, createRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Product from './pages/product/product';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Cart from './pages/cart/cart';
import Favorites from './pages/favorites/favorites';
import NotFound from './pages/not-found/not-found.';

export const ListsContext = React.createContext(); 

function App() { 

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const updateCart = (code, quantity) => {

    if ( quantity < 1 ) {
      return;
    }  
    
    const productIndex = cart.findIndex( item => item.productCode === code );
    const newCart = [...cart];

    if ( productIndex > -1 ) {
      newCart[productIndex].quantity = quantity;      
    } else {
      newCart.push({'productCode': code, 'quantity': quantity, nodeRef: createRef(null)});
    }

    setCart(newCart);

  };

  const removeItem = (event, itemCode) => {

    // const item = cart.find(item => item.productCode === itemCode);
    // const itemIndex = cart.indexOf(item);
    // const newCart = cart.slice(0, itemIndex).concat(cart.slice(itemIndex + 1, cart.length)); 
    
    // event.target.closest(".product-row").style = "animation: smoothing-deletion .5s ease forwards";
     

    setCart( value => value.filter( item => item.productCode !== itemCode ) );           
    // event.target.closest(".product-row").closest('.product-row').style = "animation: smoothing-deletion .5s ease forwards";
    
    // setTimeout( () => {

    //   setCart( newCart );
    //   // event.target.closest(".product-row").style = "animation: none";            

    // }, 700);

  }

  const emptyCart = () => {
    setCart([]);
  };

  const addToWishlist = (code) => {

    setWishlist( wishlist.concat([code]) );    

  };
  
  const removeFromWishlist = (code) => {

    const itemIndex = wishlist.indexOf( code );
    const newWishlist = wishlist.slice(0, itemIndex).concat(wishlist.slice(itemIndex + 1, wishlist.length));

    setWishlist(newWishlist);
    
  }

  const emptyWishlist = () => {
    setWishlist([]);
  };

  const cartList = { cart, updateCart, removeItem, emptyCart };
  const wishList = { wishlist, addToWishlist, removeFromWishlist, emptyWishlist }

  return (

    <Router>      
            
      <ListsContext.Provider value={ {cartList, wishList} }>       

        <Routes>         
          
          <Route path='/' element={ <Home/> }></Route>        
          <Route path='login' element={ <Login/> }></Route>
          <Route path='register' element={ <Register/> }></Route>
          <Route path='cart' element={ <Cart/> } ></Route>
          <Route path='favorites' element={ <Favorites/> } ></Route>
          <Route path='product/:code' element={ <Product/> }></Route>          
          <Route path='*' element={ <NotFound /> }></Route>          

        </Routes>              

      </ListsContext.Provider>     
      
    </Router> 

  );
}

export default App;
