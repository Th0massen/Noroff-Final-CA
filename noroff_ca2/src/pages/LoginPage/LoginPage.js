import React from 'react'
import { withRouter } from 'react-router-dom'
import LoginForm from '../../components/login-component/login-component';
import RegisterForm from '../../components/register-component/register-component';
import HeaderComponent from '../../components/header-component/header-component'

class LoginPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            register: false,
            showErr: false
        }
    }

    // When a user types in the username field
    handleUserInput = event => {
        this.setState({
            username: event.target.value
        })
    }

    // When a user types in the password field
    handlePassInput = event => {
        this.setState({
            password: event.target.value
        })
    }

    // On submit click, check input againt stored data and redirect if true
    handleLoginSubmit = () => {
        if( (localStorage.getItem('user') === this.state.username) && ( localStorage.getItem('pass') === this.state.password ) ){
            window.localStorage.setItem('Authenticated', true)
            this.props.history.push('/');
        } 
        else{
            console.log('Wrong username or password')
            this.setState({
                showErr: true
            })
        }
    }

    // once a user hits the 'register' button
    handleRegisterSubmit = () => {
        window.localStorage.setItem('user', this.state.username )
        window.localStorage.setItem('pass', this.state.password)
        this.setState({
            register: false
        })
    }

    // if a user clicks on the 'cancel' button
    handleFormChange = () => {
        this.setState({
            register: !this.state.register
        })
    }

    render(){
        return(
            <React.Fragment>
                <HeaderComponent />
                {/* Display either a sign-in form, or a register form */}
                { this.state.register ?
                    <RegisterForm
                        onSubmitClick = { this.handleRegisterSubmit }
                        handleAbort = { this.handleFormChange }
                        userInput = { this.handleUserInput }
                        passInput = { this.handlePassInput } 
                    />
                    :
                    <LoginForm 
                        onSubmitClick = { this.handleLoginSubmit } 
                        onRegisterClick = { this.handleFormChange }
                        userInput = { this.handleUserInput }
                        passInput = { this.handlePassInput } 
                        error = { this.state.showErr }
                    />
                }
            </React.Fragment>
        )
    }
}

export default withRouter(LoginPage)