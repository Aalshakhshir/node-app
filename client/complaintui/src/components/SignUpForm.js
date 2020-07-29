import React from 'react';
import './styles.css';


const SignUpForm = ({ handleInputChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" onChange={handleInputChange} name="username" placeholder="username" />
            <input type="text" onChange={handleInputChange} name="firstname" placeholder="first name" />
            <input type="text" onChange={handleInputChange} name="lastname" placeholder="last name" />
            <input type="text" onChange={handleInputChange} name="email" placeholder="email" />
            <input type="password" onChange={handleInputChange} name="password" placeholder="password" />
            Sign Up: <button type="submit" placeholder="Sign Up" />
        </form>
    )
}
export default SignUpForm;