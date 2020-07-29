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

const LoginForm = ({ handleInputChange, handleSubmit, loading, error }) => {
    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit} className="form">
            <TextField
                label="username"
                type="text"
                onChange={handleInputChange}
                name="username"
                placeholder="username"
                required
            />
            <TextField
                label="password"
                type="password"
                onChange={handleInputChange}
                name="password"
                placeholder="password"
                required
            />
            {!loading ? <Button variant="secondary" type="submit" placeholder="LOGIN">Login</Button> : <LoadingIndicator />}
            {error && <p style={{color: 'red' }}>{error}</p>}
        </form>
    )
}
export default LoginForm;