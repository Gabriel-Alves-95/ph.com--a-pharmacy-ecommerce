import './favorites.css';
import { useContext } from 'react';
import {  Link } from 'react-router-dom';
import { ListsContext } from '../../App';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {
    IconButton,
    Button,
    Rating
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import productList from '../../products';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


function Favorites() {

    const context = useContext(ListsContext);  
    const productListArray = Object.values(productList);

    const price = (product) => {

        let price = product.price;
        const discount = product.discountPercentage * 0.01;       

        if ( discount !== 0 ) {            
                         
            const newPrice = (price - price*discount).toFixed(2);

            return(

                <div className="price-container">

                    <span className="price">
                        {`$ ${newPrice}`}
                    </span>

                    <span className="old-price">
                        {`$ ${price.toFixed(2)}`}                    
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

    return (

        <>
            <Header/> 

            <div className="container">              

                <h2 className="my-wishlist"> My Wishlist </h2>                                  

                {  
                
                    context.wishList.wishlist.length === 0
                    ? <div className="empty-wishlist">

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
                            <FavoriteBorderOutlinedIcon
                                style={{
                                    height: 80,
                                    width: 80,
                                    color: '#f2f2f2'
                                }}
                            />
                        </div>
                        <p>Your wishlist is empty!</p>                                   

                      </div>
                    : <div className="wishlist-container">

                        {
                            context.wishList.wishlist.map( productCode => {                            

                                const index = productListArray.findIndex( product => parseInt(product.code) === productCode );
                                const product = productListArray[index];                            

                                return(                              

                                    <div className="wishlist-card">

                                        <IconButton
                                            sx={{
                                                marginLeft: 'calc(100% - 25px)',                                            
                                                '&:hover': {
                                                    backgroundColor: '#f7fcff'
                                                }
                                            }}
                                            onClick={ (e) => {

                                                context.wishList.removeFromWishlist(productCode);

                                                // setTimeout( () => {

                                                //     context.wishList.removeFromWishlist(productCode);                                                                                                 

                                                // }, 0);

                                            }}
                                        >
                                            <CloseIcon
                                                fontSize="small"
                                                style={{
                                                    color: '#929292'
                                                }}
                                            />
                                        </IconButton>

                                        <Link to={`../product/${product.code}`}>

                                            <div className="product-image">
                                                <img src={product.images[0]} alt={product.name}/>
                                            </div>
                                            
                                            <h2>{product.name}</h2>

                                        </Link>

                                        <span className="laboratory-info">               
                                            {product.laboratory.name}, {product.laboratory.countryOfOrigin}                
                                        </span>

                                        <div className="product-code-and-rating">

                                            <span>
                                                {`Code: ${product.code}`}
                                            </span> 

                                            <div className="rating">

                                                <Rating
                                                    className="rating-stars"                                               
                                                    defaultValue={product.rating.value}
                                                    precision={0.5}
                                                    readOnly 
                                                />

                                                <span>
                                                    ({product.rating.totalOfVotes})
                                                </span>

                                            </div> 

                                        </div>

                                        {price(product)}                                
                                                                        
                                    </div>

                                )

                            })
                        }                                                

                      </div>

                }   

                {
                    context.wishList.wishlist.length === 0 
                    ? null
                    : <Button
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
                            color: '#44a6f1',
                            marginTop: '25px'
                        }}
                        onClick={ () => context.wishList.emptyWishlist() }                                       
                      >                            
                        Empty wishlist
                      </Button>
                }     

            </div>  

            <Footer/>        
        </>

    );

}

export default Favorites;