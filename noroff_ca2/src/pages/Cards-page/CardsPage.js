import React from 'react'
import { withRouter } from 'react-router-dom'
import MenuComponent from '../../components/menu-component/menu-component'
import HeaderComponent from '../../components/header-component/header-component';
import CardComponent from '../../components/card-component/card-component';
import LoadingComponent from '../../components/loading-component/loading-component'
import styles from './cardspage.module.scss'
import SearchBar from '../../components/search-component/search-component';

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: true,
            listOfCards: [],
            searchCards: []
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
                    listOfCards: filteredRedult,
                    searchCards: [...filteredRedult]
                })
            }
        })
    }

    handleSearch = ( value ) => {
        this.filterSearchResults( value )
    }

    filterSearchResults = ( value ) => {
        const cards = this.state.searchCards.filter( card => {
            return card.name.toLowerCase().includes(value.trim().toLowerCase())
        })
        this.setState({
            listOfCards: cards
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
                    id = { card.id }
                    name = { card.name }
                    imageUrl = { card.imageUrl }
                    showButtons = { true }
                />
            ))
        } else{
            cards = <LoadingComponent />
        }

        return(
            <React.Fragment>
                <MenuComponent />
                <HeaderComponent />
                <SearchBar onSearch={ this.handleSearch }/>
                <div className={styles.container}>
                    { cards }
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(HomePage)