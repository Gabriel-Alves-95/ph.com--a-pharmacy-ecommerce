import './icons.css';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function FavoriteNavIcon(props) {


    return (

        <Badge
            color="#eb4d4d"
            invisible={props.isBadgeInvisible}
            className="icon-container"
        >
            <FavoriteIcon/>
            <FavoriteBorderIcon/>            
        </Badge>

    );

}

export default FavoriteNavIcon;