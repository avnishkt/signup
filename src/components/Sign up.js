import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link as RouterLink } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const paperStyle = { padding: 20, height: '80vh', width: 300, margin: '20px auto' };
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

       
        if (name === 'confirmPassword' && value !== formData.password) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                confirmPassword: 'Passwords do not match',
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
        }

     
        if (name === 'email' && !value.match(/^\S+@\S+\.\S+$/)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Enter a valid email address',
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        }

       
        if (name === 'password' && value.length < 8) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password must be at least 8 characters',
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

       
        console.log('Signup data submitted:', formData);
    };

    return (
        <Grid container justifyContent="center">
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <AccountCircleIcon />
                    </Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        placeholder="Enter email"
                        fullWidth
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        label="Username"
                        placeholder="Enter username"
                        fullWidth
                        required
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        error={!!errors.username}
                        helperText={errors.username}
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
                    <TextField
                        label="Confirm Password"
                        placeholder="Confirm password"
                        type="password"
                        fullWidth
                        required
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                    />
                    <Button type="submit" color="default" variant="contained" style={btnstyle} fullWidth>
                        Sign up
                    </Button>
                </form>
                <Typography>
                    Already have an account? <Link component={RouterLink} to="/Login">Log In</Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default SignUp;
