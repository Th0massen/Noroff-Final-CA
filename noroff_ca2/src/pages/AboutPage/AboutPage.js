import React from 'react'
import MenuComponent from '../../components/menu-component/menu-component';
import HeaderComponent from '../../components/header-component/header-component';
import AboutComponent from '../../components/about-component/about-component';

class AboutPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            buttonState: false,
            class: 'about_info_collapsed'
        }
    }

    handleButtonClick = () => {
        console.log('button clicked')
        this.setState({
            buttonState: !this.state.buttonState,
        })
        if( !this.state.buttonState ){
            this.setState({
                class: 'display_about_info'
            })
        } else{
            this.setState({
                class: 'collapse_about_info'
            })
        }
    }

    render(){
        return(
            <div>
                <MenuComponent/>
                <HeaderComponent/>
                <AboutComponent 
                    clickHandler = { this.handleButtonClick }
                    buttonState = { this.state.buttonState }
                    providedClass = { this.state.class }
                />
            </div>
        )
    }
}

export default AboutPage