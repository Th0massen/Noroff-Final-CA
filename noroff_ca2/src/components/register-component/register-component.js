import React from 'react'
import styles from './register.module.scss'

const RegisterForm = (props) => {
    return (
        <form className={ styles.form }>
            <h2 className={ styles.form_title }> Register </h2>
            <input className={ styles.form_element }type="text" placeholder="Give yourself a username" onChange={ props.userInput } />
            <input className={ styles.form_element }type="password" placeholder="Provide a password" onChange={ props.passInput }/>
            <input className={ styles.form_button }type="button" value="Register" onClick={ props.onSubmitClick }/>
            <input className={ styles.form_button }type="button" value="Cancel" onClick={ props.handleAbort } />
        </form>
    )
}

export default RegisterForm