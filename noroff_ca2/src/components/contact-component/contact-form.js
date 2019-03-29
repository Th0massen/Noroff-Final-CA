import React from 'react'
import styles from './contact-component.module.scss'

const ContactForm = ( props ) => {

    let nameError = null;
    let phoneError = null;
    let mailError = null;
    let success = ''

    if( props.nameError === false ){
        nameError = (
            <React.Fragment>
                <p>Enter a Name!</p>
            </React.Fragment>
        )
    } else{
        nameError = null;
    }
    if( !props.numbError ){
        phoneError = (
            <React.Fragment>
                <p>Invalid Number!</p>
            </React.Fragment>
        )
    } else {
        phoneError = null;
    }
    if( !props.mailError ){
        mailError = (
            <React.Fragment>
                <p>Invalid Email</p>
            </React.Fragment>
        )
    } else {
        mailError = null;
    }

    if( props.success ){
            success = 'Success'
    }

    return(
        <form className={ styles.form }>
            <h1 className={ styles.form_title }>Contact us</h1>
            <input className={ styles.form_input } type="text" placeholder="Full Name" onChange={ props.checkName } required /><br/>
            { nameError }
            <input className={ styles.form_input } type="text" placeholder="Phone Number" onChange={ props.checkPhone } required/><br/>
            { phoneError }
            <input className={ styles.form_input } type="email" placeholder="Email Address" onChange={ props.checkEmail } required/><br/>
            { mailError }
            <input className={ styles.form_button } type="button" value='Submit' onClick={ props.handleSubmit }/>
            <div>
                <p>{ success }</p>
            </div>
        </form>
    )
}

export default ContactForm