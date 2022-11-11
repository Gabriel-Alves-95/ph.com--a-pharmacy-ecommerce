import './cart.css';
import { useState, useContext } from 'react';
import { ListsContext } from '../../App';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import productList from '../../products';
import {
    IconButton,
    Button,
    Rating
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';



import { CSSTransition, TransitionGroup } from 'react-transition-group';




function Cart() {

    const context = useContext(ListsContext);             
    const [quantity, setQuantity] = useState(0);     



    const [cart, setCart] = useState(context.cartList.cart);




    let total = 0;
 
    return (

        <>

            <Header/>            

            <div className="container">

                <h2 className="my-cart">My Cart</h2>               

                {
                    context.cartList.cart.length !== 0                      
                    ?   <TransitionGroup component="div" className="test">
                            {
                                context.cartList.cart.map( (item, index) => {  
                                // cart.map( (item, index) => {  
                                                                                    
                                    const product = Object.values(productList).find( product => product.code === item.productCode );                          
                                                                
                                    if ( !isNaN(item.quantity) ) {
                                        total += product.price*(1 - product.discountPercentage*0.01)*item.quantity;
                                    }                       
                                                                        
                                    return(                                

                                        <CSSTransition key={index} timeout={700} nodeRef={item.nodeRef} classNames="item">
                                            <div className="product-row" ref={item.nodeRef}>                                    

                                                <div
                                                    className="product-image"
                                                    style={{
                                                        backgroundImage: `url(${product.images[0]})`
                                                    }}
                                                >                                
                                                </div>

                                                <div className="product-info">

                                                    <h2>{product.name}</h2>

                                                    <span>Code: {product.code}</span>

                                                    <Rating
                                                        className="rating-stars"                                               
                                                        defaultValue={product.rating.value}
                                                        precision={0.5}
                                                        readOnly 
                                                    />

                                                </div>   

                                                <div className="quantity-container">                                        

                                                    <div className="quantity">

                                                        <IconButton                                            
                                                            sx={{
                                                                '&:hover': {
                                                                    backgroundColor: '#f7fcff'
                                                                }
                                                            }}                    
                                                            onClick={ () => context.cartList.updateCart(product.code, item.quantity - 1) }
                                                        >
                                                            <RemoveIcon
                                                                fontSize="small"
                                                                style={{
                                                                    color: '#212121'
                                                                }}
                                                            />                
                                                        </IconButton>                                                       
                                                        
                                                        <input                            
                                                            type="number"                                            
                                                            min="0"
                                                            value={item.quantity}                                                                                        
                                                            onFocus={ () => setQuantity(item.quantity) }
                                                            onChange={ (e) => context.cartList.updateCart(product.code,  parseInt(e.target.value)) }
                                                            onBlur={ () => isNaN(item.quantity) ? context.cartList.updateCart(product.code, quantity) : null }
                                                        />

                                                        <IconButton                                            
                                                            sx={{
                                                                '&:hover': {
                                                                    backgroundColor: '#f7fcff'
                                                                }
                                                            }}
                                                            onClick={ () => context.cartList.updateCart(product.code, item.quantity + 1) }
                                                        >
                                                            <AddIcon
                                                                fontSize="small"
                                                                style={{
                                                                    color: '#212121'
                                                                }}
                                                            />
                                                        </IconButton>
                                                                        
                                                    </div>

                                                    <IconButton
                                                        sx={{
                                                            color: '#44a6f1',
                                                            
                                                            '&:hover': {
                                                                backgroundColor: '#f7fcff'
                                                            }
                                                        }}
                                                        // onClick={ (e) => context.cartList.removeItem(e, product.code) } 
                                                        onClick={ (e) => context.cartList.removeItem(e, product.code) }
                                                        // onClick={() => {

                                                        //     setCart( cart.filter( (item, idx) =>  idx !== index ) );                                                            

                                                        //     // setTimeout( () => {
                                                        //     //     context.cartList.removeItem(product.code);
                                                        //     // },);


                                                        // }}
                                                    >
                                                        <DeleteOutlineOutlinedIcon/>
                                                    </IconButton>                                    

                                                </div>  
                                                
                                                {
                                                    product.discountPercentage !== 0
                                                    ? <div className="price-container">
                                                        <span className="price">
                                                            {(product.price*(1 - product.discountPercentage*0.01)).toLocaleString("en-US", {style:"currency", currency:"USD"})}
                                                        </span>
                                                        <span className="old-price">
                                                            {product.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                                                        </span>
                                                    </div>                                                                  
                                                    : <div className="price-container">
                                                        <span className="price">
                                                            {product.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                                                        </span>
                                                    </div>

                                                }                                                                           

                                            </div>
                                        </CSSTransition>
                                        
                                    )
                        
                                })
                            }
                        </TransitionGroup>
                    :   <div className="empty-cart">
                            <div className="cart-icons">
                                <DoDisturbAltIcon
                                    style={{
                                        height: 120,
                                        width: 120,
                                        color: '#f2f2f2',
                                        position: 'absolute',
                                        zIndex: 1
                                    }}
                                />
                                <ShoppingCartOutlinedIcon
                                    style={{
                                        height: 80,
                                        width: 80,
                                        color: '#f2f2f2'
                                    }}
                                />
                            </div>
                            <p>Your cart is empty!</p>
                        </div>                      

                }

                <div className="cart-footer">

                    <div className="cart-footer-buttons">                        
                        {

                            context.cartList.cart.length === 0
                            ? null
                            : <>

                                <Button
                                    startIcon={
                                        <DoDisturbAltIcon
                                            sx={{
                                                color: '#44a6f1',
                                                width: 20,
                                                height: 20
                                            }}                                             
                                        />
                                    }
                                    variant="outlined"
                                    sx={{
                                        color: '#44a6f1'
                                    }}
                                    onClick={ () => context.cartList.emptyCart() }                                       
                                >                            
                                    Empty cart
                                </Button>                                                                            

                                <Button
                                    startIcon={
                                        <ShoppingCartCheckoutIcon
                                            sx={{
                                                color: '#44a6f1',
                                                width: 20,
                                                height: 20
                                            }}                                        
                                        />
                                    }
                                    variant="outlined"
                                    sx={{
                                        color: '#44a6f1'
                                    }}                                    
                                >                            
                                    Checkout
                                </Button>

                              </>

                        }
                    </div>

                    <span className="total">Total: {total.toLocaleString("en-US", {style:"currency", currency:"USD"})}</span>                                

                </div>                                

            </div>            

            <Footer/>
        
        </>

    );

};

export default Cart;