import React from 'react'
import styles from './contact-component.module.scss'

const ContactForm = ( props ) => {

    let nameError = '';
    let phoneError = '';
    let mailError = '';
    let sendForm;

    const validated = {
        width: '60%',
        margin: '0 auto',
        padding: '1px 17px',
        backgroundColor: 'green',
        opacity: 0.5
    }

    const errorBorder = {
        width: '60%',
        margin: '0 auto',
        padding: '5px 15px',
        border: '1px solid red'
    }

    const formSuccess = {
        position: 'absolute',
        top: 350,
        right: 0,
        left: 0,
        backgroundColor: 'green',
        color: 'white',
        opacity: 0.9,
        
    }

    switch( props.name ){
        case true:
            nameError = <div style={ validated }></div>
            break
        case null: 
            nameError = null
            break
        default:
            nameError = (
                <div style={errorBorder}>
                    <p>Your name is required!</p>
                </div>
            )
            break
    }

    switch( props.phone ){
        case true:
            phoneError = <div style={ validated }></div>
            break
        case null:
            phoneError = null
            break
        default:
            phoneError = (
                <div style={ errorBorder }>
                    <p>Invalid number!</p>
                    <p>Please try again using one of the ways listed below</p>
                    <p>xxx.xxx.xxxx</p>
                    <p>xxx-xxx-xxxx</p>
                    <p>xxx xxx xxxx</p>
                </div>
            )
            break
    }

    switch( props.mail ){
        case true:
            mailError = <div style={ validated }></div>
            break
        case null:
            mailError = null
            break
        default:
            mailError = (
                <div style={ errorBorder }>
                    <p>Invalid E-mail</p>
                </div>
            )
            break
    }

    if( props.success ){
        sendForm = (
            <div style={ formSuccess }>
                <p>Success</p><hr />
                <p>Thank you for leaving a ticket, <br /> We will be in touch.</p>
            </div>
        )
    }

    return(
        <form className={ styles.form }>
            <h1 className={ styles.form_title }>Leave a ticket, we will contact you</h1>
            <input className={ styles.form_input } type="text" placeholder="Full Name" 
                onBlur={ props.nameInput } required 
            />
            { nameError }
            <br/>
            <input className={ styles.form_input } type="text" placeholder="Phone Number" 
                onBlur={ props.phoneInput } required
            />
            { phoneError }
            <br/>
            <input className={ styles.form_input } type="email" placeholder="Email Address" 
                onBlur={ props.mailInput } required
            />
            { mailError }
            <br/>
            <input className={ styles.form_button } type="button" value='Demand a conversation' onClick={ props.handleSubmit }/>
            { sendForm }
        </form>
    )
}

export default ContactForm