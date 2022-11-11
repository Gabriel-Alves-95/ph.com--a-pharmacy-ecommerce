import './header.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ListsContext } from '../../App';
import logo from '../../assets/img/logo.png';
import HeaderDrawer from '../drawer/drawer';
import {
    Button,
    IconButton,
    Divider
} from '@mui/material';
import Badge from '@mui/material/Badge';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {       

    const context = useContext(ListsContext);    
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const iconButtonStyle = {
        transition: 'background-color .5s ease',
        '&:hover': {                                    
            backgroundColor: '#f7fcff'
        },
        '&:active': {                      
            backgroundColor: '#d4e2ed'
        },
        '& .MuiTouchRipple-root span': {
            opacity: 0,                     
        }
    };

    const iconStyle = {
        width: 28,
        height: 28,
        color: '#44a6f1',                                        
        '&:hover': {
            color: '#2287d0'
        },
        '&:active': {
            color: '#2287d0'
        }
    }

    const accountIcon = () => {


        if (isUserLoggedIn) {

            return (

                <Link to="/">                        
                    <IconButton 
                        sx={iconButtonStyle}
                        onClick={() => setIsUserLoggedIn(false)}
                    >
                        <LogoutIcon sx={iconStyle}/>                            
                    </IconButton>                       
                </Link>

            );

        }

        return (

            <Link to="../login">                                                   
                <IconButton
                    sx={iconButtonStyle}
                >
                    <PersonOutlineOutlinedIcon sx={iconStyle}/>                            
                </IconButton>                       
            </Link>
            
        );

    };

    return (

        <header>

            <div className="container top-nav">

                <nav>

                    <Link to="../about">About</Link>
                    <Link to="../pharmacies">Pharmacies</Link>
                    <Link to="../news">News</Link>
                    <Link to="../brands">Brands</Link>
                    <Link to="../delivery-and-payment">Delivery and Payment</Link>
                    <Link to="../contacts">Contacts</Link>

                </nav>

                <div className="basic-info">

                    <div className="phone-and-address">
                        <span className="phone">556-3286</span>
                        <span className="address">Constitution Ave. NW</span>                        
                    </div>

                    <div className="location">
                        <LocationOnIcon fontSize="small"/> 
                        <span>Washington DC</span>
                    </div>

                </div>

            </div>

            <Divider/>

            <div className="container header-main">                

                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Ph.com Logo"/>
                    </Link>                    
                </div>
                
                <Button
                    variant="contained"
                    className="catalog-button"                    
                >
                    <FormatAlignLeftIcon/>
                    <span
                        style={{
                            textDecoration: 'none',


                        }}
                    >
                        Catalog
                    </span>
                </Button>                                 

                <div className="search-bar">
                    <SearchIcon/>
                    <input type="text" placeholder="Medicine name..."></input>
                    <Button variant="contained">Search</Button>           
                </div>

                <div className="account-navigation">

                    <Link to="../favorites">
                        <IconButton sx={iconButtonStyle}>
                            <Badge 
                                badgeContent={context.wishList.wishlist.length} 
                                max={50}
                                color="error"                             
                            >                        
                                <FavoriteBorderOutlinedIcon
                                    sx={iconStyle}                                
                                />
                            </Badge>
                        </IconButton> 
                    </Link>                     

                    <Link to="../cart">
                        <IconButton sx={iconButtonStyle}>
                            <Badge 
                                badgeContent={context.cartList.cart.length} 
                                max={50}
                                color="error"                       
                            >                        
                                <ShoppingCartOutlinedIcon sx={iconStyle}/>
                            </Badge>                             
                        </IconButton>
                    </Link>

                    {accountIcon()}

                    <HeaderDrawer/>

                </div>                                

            </div>

            <Divider/>
            
            <nav className="container down-nav">
                <Link to="../new">New</Link>
                <Link to="../sales">Sales</Link>
                <Link to="../covid-19">COVID-19</Link>
                <Link to="../vitamins-and-supplements">Vitamins and Supplements</Link>
                <Link to="../beauty-and-care">Beauty and Care</Link>
                <Link to="../hygiene">Hygiene</Link>
                <Link to="../mother-and-child">Mother and Child</Link>
                <Link to="../optics">Optics</Link>
                <Link to="../medical-products">Medical Products</Link>
                <Link to="../pet-products">Pet Products</Link>
                <Link to="../more">More</Link>
            </nav>            

        </header>       
        
    );    

}

export default Header;