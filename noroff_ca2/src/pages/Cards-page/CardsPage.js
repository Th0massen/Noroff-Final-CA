import React from 'react'
import { withRouter } from 'react-router-dom'
import MenuComponent from '../../components/menu-component/menu-component'
import HeaderComponent from '../../components/header-component/header-component';
import CardComponent from '../../components/card-component/card-component';
import LoadingComponent from '../../components/loading-component/loading-component'
import styles from './cardspage.module.scss'

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: true,
            listOfCards: []
        }
    }

    componentDidMount(){
        // If the user is not signed in, redirect to login page
        if( !window.localStorage.getItem('Authenticated') ){
            this.setState({
                isLoggedIn: false
            })
            this.props.history.push('/login');
        } else{
            this.fetchData()
        }
    }

    fetchData = () => {
        fetch('https://api.magicthegathering.io/v1/cards')
        .then( response => response.json() )
        .then( result => {
            let filteredRedult = [];
            for( let i = 0; i < result.cards.length; i++ ){
                if( result.cards[i].imageUrl ){
                    filteredRedult.push(result.cards[i])
                }
                this.setState({
                    listOfCards: filteredRedult
                })
            }
        })
    }

    redirectToCard = () => {

    }

    render(){
        let cards = null
        if( this.state.listOfCards.length > 0 ){
            cards = this.state.listOfCards.map( card => (  
                <CardComponent
                    key = { card.id }
                    name = { card.name }
                    imageUrl = { card.imageUrl }
                />
            ))
        } else{
            cards = <LoadingComponent />
        }

        return(
            <React.Fragment>
                <MenuComponent />
                <HeaderComponent />
                <div className={styles.container}>
                    { cards }
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(HomePage)