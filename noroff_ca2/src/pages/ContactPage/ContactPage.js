import React from 'react'
import MenuComponent from '../../components/menu-component/menu-component';
import HeaderComponent from '../../components/header-component/header-component';
import ContactForm from '../../components/contact-component/contact-form';

class ContactPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            phone: '',
            email: '',
            showNameErr: null,
            showNumbErr: true,
            showEmailErr: true,
            success: false
        }
    }

    onNameInput = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onPhoneInput = (e) => {
        this.setState({
            phone: e.target.value
        })
    }

    onEmailInput = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    onSubmit = () => {
        if( this.state.showNameErr === true && this.state.showNumbErr === true && this.state.showEmailErr === true ){
            this.setState({
                success: true
            })
        }
        const phoneRegex = new RegExp(/([0-9]{3})+[. -]([0-9]{3})+[. -]([0-9]{4})/)
        const mailRegex = new RegExp(/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/)
        const phoneTest = phoneRegex.test(this.state.phone)
        const emailTest = mailRegex.test(this.state.email)
        console.log(phoneTest, emailTest)
        if( this.state.name === '' || null ){
            this.setState({
                showNameErr: false
            })
        } else{
            this.setState({
                showNameErr: true
            })
        }
        this.setState({
            showNumbErr: phoneTest,
            showEmailErr: emailTest
        })
        if( this.state.showNameErr === true && this.state.showNumbErr === true && this.state.showEmailErr === true ){
            this.setState({
                success: true
            })
        }
    }

    render(){
        return(
            <div>
                <MenuComponent/>
                <HeaderComponent/>
                <ContactForm
                    nameError = { this.state.showNameErr }
                    numbError = { this.state.showNumbErr }
                    mailError = { this.state.showEmailErr }
                    checkName = { this.onNameInput }
                    checkPhone = { this.onPhoneInput }
                    checkEmail = { this.onEmailInput }
                    handleSubmit = { this.onSubmit }
                    success = { this.state.success }
                />
            </div>
        )
    }
}

export default ContactPage