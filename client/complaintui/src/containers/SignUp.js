import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import { SignUpUser } from '../actions/UsersActions';
import SignUpForm from '../components/SignUpForm';


const SignUp = ({ signUpUserConnect, loading, error, user, history }) => {
    const [inputs, setInputs] = React.useState({
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        email: '',
    })

    React.useEffect(() => {
        if(user && user.username) {
            history.push('/complaints');
        }
    }, [user])

    const handleInputChange = (e) => {
        e.persist();
        setInputs(inputs => ({
            ...inputs,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("sub")
        if (inputs.username && inputs.password) {
            console.log("hello")
            signUpUserConnect({ username: inputs.username, password: inputs.password, lastname: inputs.lastname, email: inputs.email });
        }
    }

    return (
        <div className='LoginContainer'>
            <SignUpForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    loading: state.auth.loading,
    error: state.auth.error,
})
export default connect(mapStateToProps, { signUpUserConnect: SignUpUser })(SignUp);
