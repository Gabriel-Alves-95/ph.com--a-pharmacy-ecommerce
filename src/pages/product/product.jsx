import './product.css';
import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ListsContext } from '../../App';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import BasicTabs from '../../components/tabs/tabs';
import productList from '../../products';
import {    
    Rating,
    IconButton,
    Chip
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function Product() {     

    const context = useContext(ListsContext); 

    const { code } = useParams();   
    const index = Object.keys(productList).find(index => productList[index].code === code);
    const product = productList[index];   

    const [quantity, setQuantity] = useState(1);
    const [auxQuantity, setAuxQuantity] = useState(0);

    const price = () => {

        let price = product.price;
        const discount = product.discountPercentage * 0.01;       

        if ( discount !== 0 ) {            
                         
            const newPrice = (price - price*discount).toLocaleString("en-US", {style:"currency", currency:"USD"});

            return(

                <div className="price-container">

                    <span className="price">
                        {newPrice}
                    </span>

                    <span className="old-price">
                        {price.toLocaleString("en-US", {style:"currency", currency:"USD"})}                    
                    </span>

                    <Chip
                        label={`${product.discountPercentage}% off`}
                        variant="outlined"
                        sx={{
                            color: '#eb4d4d',
                            borderColor: '#eb4d4d'
                        }}
                    />

                </div>
                
            );

        }

        return (

            <span className="price">
                {price.toLocaleString("en-US", {style:"currency", currency:"USD"})}
            </span>
            
        );        

    };
    
    const handleProductImageClick = (e) => {
        
        const imagePrimary = document.querySelector('.image-primary > .image');
        const newPrimaryBackgroundImage = e.target.style.backgroundImage;
        const oldPrimaryBackgroundImage = imagePrimary.style.backgroundImage;
        
        e.target.style.backgroundImage = oldPrimaryBackgroundImage;
        imagePrimary.style.backgroundImage = newPrimaryBackgroundImage;    

    }

    const handleAddIconClick = () => {        
        setQuantity(quantity + 1);
    };
        
    const handleRemoveIconClick = () => {

        if ( quantity > 0 ) {
            setQuantity(quantity - 1);
        }

    };
   
    return (

        <>
            <Header/>

            <div className="container product-info-container">               

                <div className="images-container">

                    <div className="image-primary">
                        <div
                            className="image"                                
                            style={{
                                backgroundImage: `url("${product.images[0]}")`
                            }}
                        >
                        </div>
                    </div>

                    <div className="secondary-images-container">

                        <div className="image-secondary">
                            <div
                                className="image"
                                style={{
                                    backgroundImage: `url("${product.images[1]}")`
                                }}
                                onClick={(e) => handleProductImageClick(e)}
                            >
                            </div>
                        </div>

                        <div className="image-secondary">
                            <div
                                className="image"
                                style={{
                                    backgroundImage: `url("${product.images[2]}")`
                                }}
                                onClick={(e) => handleProductImageClick(e)}
                            >
                            </div>
                        </div>

                    </div>

                    <div id="warning">
                        <p>
                            Please, note images are for illustration purposes only and may differ from the product(s) you receive
                        </p>
                    </div>

                </div>                                                    

                <div className="details-container">                    

                    <h2>{product.name}</h2>                    
                    <span id="content">
                        {product.content}
                    </span>
                    <span id="code">
                        Code: {product.code}
                    </span>

                    <p>
                        {product.description.briefDescription.text}
                    </p>

                    <div className="rating">

                        <Rating
                            className="rating-stars"                                               
                            defaultValue={product.rating.value}
                            precision={0.5}
                            readOnly={true} 
                            size="large"                            
                        />

                        <span>
                            ({product.rating.totalOfVotes})
                        </span>

                    </div>

                    {price()}

                    <div className="add-to-cart-container">

                        <IconButton
                            disableRipple={true}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'transparent'
                                }
                            }}                    
                            onClick={handleRemoveIconClick}
                        >
                            <RemoveIcon fontSize="small"/>                
                        </IconButton>                
                                                
                        <input                            
                            type="number"
                            className="quantity"
                            min="1"
                            value={quantity}
                            onFocus={ (e) => setAuxQuantity( parseInt(e.target.value) ) }
                            onChange={ (e) => setQuantity( parseInt(e.target.value) ) }  
                            onBlur={ () => {

                                if ( isNaN( quantity ) ) {
                                    setQuantity( auxQuantity );
                                }
        
                            }}                          
                        />

                        <IconButton
                            disableRipple={true}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'transparent'
                                }
                            }}
                            onClick={handleAddIconClick}
                        >
                            <AddIcon fontSize="small"/>
                        </IconButton>

                        <button
                            type="button"
                            class="add-to-cart-button"
                            onClick={ () => context.cartList.updateCart(product.code, quantity) }                                                       
                        >
                            Add to cart
                        </button>
                                        
                    </div>                      

                </div>             
                
            </div>

            <div className="container">
                <BasicTabs
                    product={product}
                />           
            </div>            

            <Footer/>
        </>

    );

};

export default Product;