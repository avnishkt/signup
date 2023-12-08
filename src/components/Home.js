import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        identifier: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        identifier: '',
        password: '',
    });

    const navigate = useNavigate(); 

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnstyle = { margin: '8px 0' };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

      
        if (value.trim() === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} cannot be blank`,
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }

       
        if (name === 'password' && value.length !== 8) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: 'Password must be exactly 8 characters',
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        for (const key in formData) {
            if (formData[key].trim() === '') {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [key]: `${key.charAt(0).toUpperCase() + key.slice(1)} cannot be blank`,
                }));
                return; 
            }
        }

       
        console.log('Login data submitted:', formData);
    };

    const handleSignUpClick = () => {
       
        navigate('/signup');
    };

    return (
        <Grid container justifyContent="center">
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <AccountCircleIcon />
                    </Avatar>
                    <h2>Log In</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Username or Email"
                        placeholder="Enter username or email"
                        fullWidth
                        required
                        name="identifier"
                        value={formData.identifier}
                        onChange={handleChange}
                        error={!!errors.identifier}
                        helperText={errors.identifier}
                    />
                    <TextField
                        label="Password"
                        placeholder="Enter password"
                        type="password"
                        fullWidth
                        required
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={!!errors.password}
                        helperText={errors.password}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox name="checkedB" color="primary" />
                        }
                        label="Remember me"
                    />
                    <Button type="submit" color="variant" variant="contained" style={btnstyle} fullWidth>
                        Log in
                    </Button>
                </form>
                <Typography>
                    <Link href="#">Forgot password?</Link>
                </Typography>
                <Typography>
                    <Link component={RouterLink} to="/" onClick={handleSignUpClick}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default Login;
