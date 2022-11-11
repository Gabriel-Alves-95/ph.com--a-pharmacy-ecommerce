import './login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {
    Stack,
    TextField,
    Checkbox,
    Button,
    FormControl,
    FormControlLabel,
    FormHelperText
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

function Login() {

    const [isEmailOrPasswordIncorrect, setIsEmailOrPasswordIncorrect] = useState(false);

    const handleEnterClick = () => {
        // TODO: Verify login info though the API we will develop for the next Infnet's project
        setIsEmailOrPasswordIncorrect(true);
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
                    Sign in
                </h2>

                <FormControl
                    error={isEmailOrPasswordIncorrect}
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
                        error={isEmailOrPasswordIncorrect}                                  
                        label="Email address"
                        variant="outlined"
                        type="email"
                        sx={{
                            width: '100%',
                            maxWidth: 500
                        }}
                    />

                    <TextField
                        error={isEmailOrPasswordIncorrect}                                        
                        label="Password"
                        variant="outlined"
                        type="password"
                        sx={{
                            width: '100%',
                            maxWidth: 500
                        }}
                    />

                    <FormHelperText
                        error={true}
                        hidden={!isEmailOrPasswordIncorrect}
                    >
                        Incorrect email or password
                    </FormHelperText>

                </FormControl>

                <Link
                    to="recovery-password"
                    className="recovery-password"
                >
                    Forgot your password?
                </Link>

                <FormControlLabel 
                    sx={{
                        color: '#929292',
                        margin: '0px !important'                                                        
                    }}
                    control={
                        <Checkbox
                            defaultChecked
                            size="small"                                                                                   
                        />
                    }
                    label="Keep me logged in"
                /> 

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#44a6f1',
                        padding: '10px 20px',
                        width: 250,
                        display: 'flex',
                        gap: '5px',
                        transition: 'background-color .5s ease',
                        "&:hover": {
                            backgroundColor: '#2287d0'
                        },
                        "&:active":{
                            backgroundColor: '#4ba6ed',                            
                            tansition: 'none'
                        }
                    }}
                    onClick={() => handleEnterClick()}
                >
                    Enter
                    <LoginIcon/>
                </Button>               

                <div className="register-link">
                    <span>
                        Do not have an account?
                    </span>
                    <Link to="../register">
                        Register here.
                    </Link>                    
                </div>

            </Stack>
            
            <Footer/>
        </>

    );

};

export default Login;