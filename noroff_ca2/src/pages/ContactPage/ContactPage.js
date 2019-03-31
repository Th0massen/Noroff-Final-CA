import React from 'react'
import MenuComponent from '../../components/menu-component/menu-component';
import HeaderComponent from '../../components/header-component/header-component';
import ContactForm from '../../components/contact-component/contact-form';

class ContactPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            number: '',
            mail: '',
            nameValidate: null,
            phoneValidate: null,
            mailValidate: null,
            sendForm: false,
        }
    }

    onNameInput = (event) => {
        let e = event.target.value
        if( e === "" ){
            this.setState({
                nameValidate: false
            })
        } else{
            this.setState({
                name: e,
                nameValidate: true
            })
        }
    }

    onNumberInput = event => {
        let e = event.target.value
        const phoneRegex = new RegExp(/([0-9]{3})+[. -]([0-9]{3})+[. -]([0-9]{4})/)
        if( phoneRegex.test(e) ){
            this.setState({
                number: e,
                phoneValidate: true
            })
            console.log(this.state.phoneValidate)
        } else {
            this.setState({
                number: '',
                phoneValidate: false
            })
        }
    }

    onMailInput = event => {
        let e = event.target.value
        const mailRegex = new RegExp(/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/)
        if( mailRegex.test(e) ){
            this.setState({
                mail: e,
                mailValidate: true
            })
        } else{
            this.setState({
                mail: '',
                mailValidate: false
            })
        }
    }

    onSubmit = () => {
        console.log( this.state.nameValidate, this.state.phoneValidate, this.state.mailValidate )
        if( ( this.state.nameValidate ) && ( this.state.phoneValidate ) && ( this.state.mailValidate ) ){
            this.setState({
                sendForm: true
            })
            return this.state.sendForm
        } 
        else if( (this.state.nameValidate === null) || (this.state.nameValidate === false) ){
            this.setState({
                nameValidate: false
            })
        }
        else if( (this.state.phoneValidate === null) || (this.state.phoneValidate === false) ){
            this.setState({
                phoneValidate: false
            })
        }
        else if( (this.state.mailValidate === null) || (this.state.mailValidate === false) ){
            this.setState({
                mailValidate: false
            })
        }
        else {
            this.setState({
                nameValidate: false,
                phoneValidate: false,
                mailValidate: false
            })
        }
    }

    render(){
        return(
            <div>
                <MenuComponent/>
                <HeaderComponent/>
                <ContactForm
                    name = { this.state.nameValidate }
                    phone = { this.state.phoneValidate }
                    mail = { this.state.mailValidate }
                    success = { this.state.sendForm }
                    nameInput = { this.onNameInput }
                    phoneInput = { this.onNumberInput }
                    mailInput = { this.onMailInput }
                    handleSubmit = { this.onSubmit }
                />
            </div>
        )
    }
}

export default ContactPage
