import './drawer.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    Drawer,
    Divider,
    IconButton 
} from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import SearchIcon from '@mui/icons-material/Search';

function HeaderDrawer() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const iconButtonStyle = {        
        transition: 'background-color .5s ease',
        '&:hover': {                                    
            backgroundColor: '#f7fcff'
        },
        '&:active': {
            opacity: 1,            
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

    return (
        <>
            <IconButton
                sx={iconButtonStyle}
                className="drawer-icon"
                onClick={() => setIsDrawerOpen(true)}
            >
                <Menu sx={iconStyle}/>
            </IconButton>
            <Drawer 
                anchor="left"
                open={isDrawerOpen}
                className="drawer"
                onClose={() => setIsDrawerOpen(false)}                
            >
                <nav>

                    <Link to="../about">About</Link>
                    <Link to="../pharmacies">Pharmacies</Link>
                    <Link to="../news">News</Link>
                    <Link to="../brands">Brands</Link>
                    <Link to="../delivery-and-payment">Delivery and Payment</Link>
                    <Link to="../contacts">Contacts</Link>

                </nav> 

                <Divider className="drawer-divider"/>

                <Link to="../catalog">
                    <div className="drawer-catalog">
                        <FormatAlignLeftIcon/>
                        Catalog
                    </div>                    
                </Link>

                <Divider className="drawer-divider"/>

                <div className="search">
                    <SearchIcon/>
                    <input type="text" placeholder="Medicine name..."></input>
                </div>

                <Divider className="drawer-divider"/>

            </Drawer>
        </>
    );

}

export default HeaderDrawer;