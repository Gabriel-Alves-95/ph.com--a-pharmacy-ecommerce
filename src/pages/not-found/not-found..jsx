import './not-found.css';
import notFoundImg from '../../assets/img/404.png';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';

function NotFound() {

    return (
        <>
            <Header/>

            <div className="not-found-container">

                <img
                    className="not-foung-img"
                    src={notFoundImg}
                    alt="Page not found"
                />

                <Link to="/" className="home-link">
                    Back to home
                </Link>

            </div>            

            <Footer/>
        </>

    );

}

export default NotFound;