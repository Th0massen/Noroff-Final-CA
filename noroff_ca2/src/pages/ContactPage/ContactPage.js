import React from 'react'
import MenuComponent from '../../components/menu-component/menu-component';
import HeaderComponent from '../../components/header-component/header-component';
import ContactForm from '../../components/contact-component/contact-form';

class ContactPage extends React.Component{
    render(){
        return(
            <div>
                <MenuComponent/>
                <HeaderComponent/>
                <ContactForm/>
            </div>
        )
    }
}

export default ContactPage