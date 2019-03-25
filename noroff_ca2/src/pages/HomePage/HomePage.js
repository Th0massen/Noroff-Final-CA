import React from 'react'
import { withRouter } from 'react-router-dom'
import MenuComponent from '../../components/menu-component/menu-component'
import HeaderComponent from '../../components/header-component/header-component';

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }

    componentDidMount(){
        if( !window.localStorage.getItem('Authenticated') ){
            this.setState({
                isLoggedIn: false
            })
            this.props.history.push('/login');
        }
    }

    render(){
        return(
            <React.Fragment>
                <MenuComponent />
                <HeaderComponent />
                <p>Hello World</p>
            </React.Fragment>
        )
    }
}

export default withRouter(HomePage)