import React from 'react'
import styles from './login.module.scss'

const LoginForm = (props) => {

    let errorMsg = null;

    const error = {
        border: '1px solid red',
        padding: '5px 0',
        backgroundColor: 'red',
        color: 'white',
        opacity: 0.7
    }

    if( props.error === true){
        errorMsg = (
            <div style={error}>
                Incorrect username or password,<br/>
                Please try again, or register a new user
            </div>
        )
    }

    return(
        <form className={styles.form}>
            <h2 className={styles.form_title}>Please sign in to continue</h2>
            <input className={styles.form_element} type="text" placeholder="Enter username" onChange={ props.userInput }/>
            <input className={styles.form_element} type="password" placeholder="Enter password" onChange={ props.passInput }/>
            { errorMsg }
            <input className={styles.form_button} type="button" value="Sign in" onClick={ props.onSubmitClick }/>
            <input className={styles.form_button} type="button" value="Register" onClick={ props.onRegisterClick }/>
        </form>
    )
}

export default LoginForm