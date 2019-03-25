import React from 'react'
import styles from './login.module.scss'

const LoginForm = (props) => {
    return(
        <form className={styles.form}>
            <h2 className={styles.form_title}>Please sign in to continue</h2>
            <input className={styles.form_element} type="text" placeholder="Enter username" onChange={ props.userInput }/>
            <input className={styles.form_element} type="password" placeholder="Enter password" onChange={ props.passInput }/>
            <input className={styles.form_button} type="button" value="Sign in" onClick={ props.onSubmitClick }/>
            <input className={styles.form_button} type="button" value="Register" onClick={ props.onRegisterClick }/>
        </form>
    )
}

export default LoginForm