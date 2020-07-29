import React from 'react';
import './styles.css';
import LoadingIndicator from './common/LoadingIndicator';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const SignUpForm = ({ handleInputChange, handleSubmit, loading }) => {
    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit} className="form">
            <TextField label="username" type="text" required onChange={handleInputChange} name="username" placeholder="username" />
            <TextField label="firstname" required type="text" onChange={handleInputChange} name="firstname" placeholder="first name" />
            <TextField label="lastname" type="text" onChange={handleInputChange} name="lastname" placeholder="last name" />
            <TextField label="email" type="text" onChange={handleInputChange} name="email" placeholder="email" />
            <TextField label="password" type="password" onChange={handleInputChange} name="password" placeholder="password" />
            {!loading ? <Button variant="primary" type="submit" placeholder="Sign Up">Sign Up</Button> : <LoadingIndicator />}
        </form>
    )
}
export default SignUpForm;