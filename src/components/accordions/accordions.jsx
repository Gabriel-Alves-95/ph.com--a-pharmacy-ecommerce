import './accordions.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ControlledAccordions() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (

    <div className="display-settings">

        <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
            sx={{
                backgroundColor: 'transparent',
                borderRadius: '0 !important',                                
            }}
            elevation={0}            
        >

            <div className="container">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"                
                >
                    <h2>Company</h2>
                </AccordionSummary> 
            </div>

            <div className="container">           
                <AccordionDetails>
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
                </AccordionDetails>
            </div>

        </Accordion>

        <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
            sx={{backgroundColor: 'transparent'}}
            elevation={0}  
        >

            <div className="container">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"                
                >
                    <h2 className="container">Help</h2>
                </AccordionSummary>
            </div>

            <div className="container">
                <AccordionDetails>
                    <ul className="container">

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
                </AccordionDetails>
            </div>            
            
        </Accordion>

        <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
            sx={{backgroundColor: 'transparent'}}
            elevation={0}  
        >

            <div className="container">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"                
                >
                    <h2 className="container">Promotions and sales</h2>
                </AccordionSummary>
            </div>

            <div className="container">
                <AccordionDetails>
                    <ul className="container">

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
                </AccordionDetails>
            </div>          
            
        </Accordion>

        <Accordion
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
            sx={{
                backgroundColor: 'transparent',
                borderRadius: '0 !important',
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            }}
            elevation={0}  
        >
            <div className="container">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"                
                >
                    <h2 className="container">Press center</h2>
                </AccordionSummary>
            </div>

            <div className="container">
                <AccordionDetails>
                    <ul className="container">

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
                </AccordionDetails>
            </div>
                        
        </Accordion>

    </div>

  );

}

export default ControlledAccordions;
