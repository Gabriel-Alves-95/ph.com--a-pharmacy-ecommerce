import './footer.css';
import { Link } from 'react-router-dom';
import paymentFlags from '../../assets/img/payment-flags.png';
import ControlledAccordions from '../accordions/accordions';
import {
    IconButton,
    Divider,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EastIcon from '@mui/icons-material/East';


function Footer() {   

    return (

        <footer>

            <div className="container footer-contact">                

                <div>

                    <h2>24/7 support</h2>

                    <div>
                        <PhoneIcon/>
                        <div className="address">
                            <span>556-3268</span>
                            <span>Constitution Ave. NW, 191234</span>
                        </div>                                               
                    </div>

                </div>

                <div>

                    <h2>Email</h2>

                    <div>
                        <EmailIcon/>
                        <span>info@ph.com</span>
                    </div>
                    
                </div>

                <div>

                    <h2>Social media</h2>

                    <div>

                        <Link to="twitter" target="_blank">
                            <TwitterIcon/>
                        </Link>

                        <Link to="facebook" target="_blank">
                            <FacebookOutlinedIcon/>
                        </Link>

                        <Link to="instagram" target="_blank">
                            <InstagramIcon/>
                        </Link>

                        <Link to="youtube" target="_blank">
                            <YouTubeIcon/>
                        </Link>

                    </div>

                </div>

                <div>

                    <h2>Subscribe to the newsletter</h2>

                    <div className="subscribe">
                        <input type="text" placeholder="Enter your email..."/>
                        <IconButton>
                            <EastIcon/>
                        </IconButton>
                    </div>

                </div> 

            </div>

            <Divider/>

            <div className="container">

                <div className="footer-main">

                    <nav>

                        <h2>Company</h2>

                        <ul>

                            <li>
                                <Link to="../about">About</Link>                            
                            </li>

                            <li>
                                <Link to="../pharmacies">Pharmacies</Link>                                                        
                            </li>

                            <li>
                                <Link to="../partners">Partners</Link>                                                        
                            </li>

                            <li>
                                <Link to="../jobs">Jobs</Link>                                                        
                            </li>

                            <li>
                                <Link to="../contacts">Contacts</Link>                                                        
                            </li>

                            <li>
                                <Link to="../cooperation">Cooperation</Link>                                                        
                            </li>

                        </ul>

                    </nav>


                    <nav>

                        <h2>Help</h2>

                        <ul>

                            <li>
                                <Link to="../personal-account">Personal account</Link>                                                        
                            </li>

                            <li>
                                <Link to="../payment-and-delivery">Payment and delivery</Link>                                                        
                            </li>

                            <li>
                                <Link to="../FAQ">FAQ</Link>                                                        
                            </li>

                            <li>
                                <Link to="../how-to-reserve-an-item">How to reserve an item?</Link>                                                        
                            </li>

                            <li>
                                <Link to="../reminder-for-customers">Reminder for customers</Link>                                                        
                            </li>

                            <li>
                                <Link to="../privacy-policy">Privacy policy</Link>                                                        
                            </li>

                        </ul>

                    </nav>

                    <nav>

                        <h2>Promotions and sales</h2>

                        <ul>

                            <li>
                                <Link to="../promotions">Promotions</Link>                                                        
                            </li>

                            <li>
                                <Link to="../gift-cards">Gift cards</Link>                                                        
                            </li>

                            <li>
                                <Link to="../loyalty-program">Loyalty program</Link>                                                        
                            </li>

                            <li>
                                <Link to="../installment-cards">Installment cards</Link>                                                        
                            </li>

                            <li>
                                <Link to="../partner-discounts">Partner discounts</Link>                                                        
                            </li>

                            <li>
                                <Link to="../cashback">Cashback</Link>                                                        
                            </li>

                        </ul>

                    </nav>

                    <nav>

                        <h2>Press center</h2>

                        <ul>

                            <li>
                                <Link to="../news">News</Link>                                                        
                            </li>

                            <li>
                                <Link to="../articles">Articles</Link>                                                        
                            </li>

                            <li>
                                <Link to="../blog">Blog</Link>                                                        
                            </li>

                            <li>
                                <Link to="../reviews">Reviews</Link>                                                        
                            </li>

                        </ul>

                    </nav>

                </div>

            </div>

            {ControlledAccordions()}

            <Divider/>

            <div className="container">

                <div className="footer-strip">

                    <div>
                        <CopyrightIcon/> 
                        <span>2022</span>
                        <span>Ph.com</span>
                    </div>

                    <img src={paymentFlags} alt="Accepted payment flags"/>

                </div>            

            </div>

        </footer>

    );

};

export default Footer;