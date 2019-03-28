import React from 'react'

const ContactForm = () => {
    return(
        <form>
            <input type="text" placeholder="First Name" /><br/>
            <input type="text" placeholder="Last Name" /><br/>
            <input type="text" placeholder="Phone Number" pattern="[0-9]{8}"/><br/>
            <input type="email" placeholder="Email Address"/><br/>

        </form>
    )
}

export default ContactForm