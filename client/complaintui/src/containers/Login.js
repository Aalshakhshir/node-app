import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { loginUser } from '../actions/UsersActions';


const Login = ({ loginUserConnect, loading, error, token, history }) => {
    const [inputs, setInputs] = React.useState({
        username: '',
        password: ''
    })

    React.useEffect(() => {
        if (token) {
            history.push('/complaints');
        }
    }, [token, history])

    const handleInputChange = (e) => {
        e.persist();
        setInputs(inputs => ({
            ...inputs,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputs.username && inputs.password) {
            loginUserConnect(inputs.username, inputs.password);
        }
    }

    return (
        <div className='LoginContainer'>
            <LoginForm handleInputChange={handleInputChange} loading={loading} error={error} handleSubmit={handleSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token,
})
export default connect(mapStateToProps, { loginUserConnect: loginUser })(Login);
