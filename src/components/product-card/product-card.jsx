import './product-card.css';
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { ListsContext } from '../../App';
import {
    IconButton, 
    Chip,
    Rating
} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ProductCard(props) {  

    const context = useContext(ListsContext);    
    
    const [isFavoriteIconFilled, setIsFavoriteIconFilled] = useState( context.wishList.wishlist.indexOf( parseInt(props.product.code) ) === -1 ? false : true );
    const [quantity, setQuantity] = useState(1);
    const [auxQuantity, setAuxQuantity] = useState(0);
   
    const handleAddIconClick = () => {
        setQuantity(quantity + 1);
    };
        
    const handleRemoveIconClick = () => {

        if ( quantity > 0 ) {
            setQuantity(quantity - 1);
        }

    };

    const discountChip = () => {

        if ( props.product.discountPercentage !== 0 ) {

            return(

                <Chip 
                    label={`-${props.product.discountPercentage}%`}
                    variant="outlined"
                    style={{
                        color: '#44a6f1',
                        borderColor: '#44a6f1',
                        width: 65                        
                    }}                             
                />

            );

        }

    };

    const favoriteIcon = () => {        

        if ( isFavoriteIconFilled ) {
            return (
                <FavoriteIcon
                    sx={{
                        width: 32,
                        height: 32
                    }}
                    onClick={ () => {                        
                        context.wishList.removeFromWishlist( parseInt(props.product.code) );
                        setIsFavoriteIconFilled( !isFavoriteIconFilled );

                    }}
                />
            );
        }

        return (
            <FavoriteBorderOutlinedIcon
                sx={{
                    width: 32,
                    height: 32
                }}
                onClick={ () => {
                    context.wishList.addToWishlist( parseInt(props.product.code) );
                    setIsFavoriteIconFilled( !isFavoriteIconFilled );
                }}
            />
        );


    };

    const price = () => {

        let price = props.product.price;
        const discount = props.product.discountPercentage * 0.01;       

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

                </div>
                
            );

        }

        return (

            <span className="price">
                {`$ ${price.toFixed(2)}`}
            </span>
            
        );        

    };    

    const justifyContent = () => {
        
        if ( props.product.discountPercentage !== 0 ) {
            return ( {justifyContent: 'space-between'} );
        } 

        return( {justifyContent: 'flex-end'} )

    };

    return(      

        <div className="product-card">                   

            <div
                className="card-header"
                style={justifyContent()}
            >                

                {discountChip()}

                <IconButton                    
                    disableRipple={true}
                    className="favorite-icon"                                                        
                >
                    { favoriteIcon() }
                </IconButton>

            </div>

            <Link to={"product/" + props.product.code}> 

                <div className="product-image">
                    <img src={props.product.images[0]} alt={props.product.name}/>
                </div>

                       
                <h2>{props.product.name}</h2>
                
            </Link>

            <span className="laboratory-info">               
                {props.product.laboratory.name}, {props.product.laboratory.countryOfOrigin}                
            </span>

            <div className="product-code-and-rating">

                <span>
                    {`Code: ${props.product.code}`}
                </span> 

                <div className="rating">

                    <Rating
                        className="rating-stars"                                               
                        defaultValue={props.product.rating.value}
                        precision={0.5}
                        readOnly 
                    />

                    <span>
                        ({props.product.rating.totalOfVotes})
                    </span>

                </div> 

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
                    onClick={ () => context.cartList.updateCart( props.product.code, quantity ) }
                >
                    Add to cart
                </button>
                                
            </div>                        
            
        </div>       

    );

}

export default ProductCard;