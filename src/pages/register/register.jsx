import './register.css';
import { useState } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {
    Stack,
    TextField,    
    Button,
    FormControl,    
    FormHelperText
} from '@mui/material';

function Register() {

    const [isEmailOrPasswordInvalid, setIsEmailOrPasswordInvalid] = useState(false);

    const handleRegisterClick = () => {
        // TODO: Validate email and password from the form
        setIsEmailOrPasswordInvalid(true);
    }

    return (

        <>
            <Header/>

            <Stack            
                direction="column"
                spacing={3}
                alignItems="center" 
                className="container"
                sx={{
                    marginTop: '40px'
                }}               
            >

                <h2
                    style={{
                        fontSize: '2.3rem',
                        fontWeight: 500,
                        marginBottom: 15                        
                    }}
                >
                    Register
                </h2>

                <FormControl
                    error={isEmailOrPasswordInvalid}
                    label="Invalid email or password"
                    fullWidth                    
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '20px'
                    }}
                >   

                    <TextField  
                        error={isEmailOrPasswordInvalid}                                                        
                        label="Full name"
                        variant="outlined"
                        type="text"
                        sx={{
                            width: '100%',
                            maxWidth: 500
                        }}
                    />             
                
                    <TextField
                        error={isEmailOrPasswordInvalid}                                  
                        label="Email address"
                        variant="outlined"
                        type="email"
                        sx={{
                            width: '100%',
                            maxWidth: 500
                        }}
                    />

                    <TextField
                        error={isEmailOrPasswordInvalid}                                        
                        label="Password"
                        variant="outlined"
                        type="password"
                        sx={{
                            width: '100%',
                            maxWidth: 500
                        }}
                    />

                    <TextField
                        error={isEmailOrPasswordInvalid}                                        
                        label="Confirm password"
                        variant="outlined"
                        type="password"
                        sx={{
                            width: '100%',
                            maxWidth: 500
                        }}
                    />

                    <FormHelperText
                        error={true}
                        hidden={!isEmailOrPasswordInvalid}
                        sx={{
                            textAlign: 'center'
                        }}
                    >
                        {`You email must have @ followed by a email service provider`}
                        <br/>
                        {`This is just an example of a possible error`}
                        <br/>
                        {`Real form validations will be created in the future`}
                    </FormHelperText>

                </FormControl>                

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#44a6f1',
                        padding: '10px 20px',
                        marginTop: '60px !important',
                        width: 250,
                        textAlign: 'center',
                        transition: 'background-color .5s ease',
                        "&:hover": {
                            backgroundColor: '#2287d0'
                        },
                        "&:active":{
                            backgroundColor: '#4ba6ed',                            
                            tansition: 'none'
                        }
                    }}
                    onClick={() => handleRegisterClick()}
                >
                    Register
                </Button>                                                              

            </Stack>
            
            <Footer/>
        </>

    );

};

export default Register;