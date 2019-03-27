import React from 'react'
import CardComponent from '../../components/card-component/card-component'
import LoadingComponent from '../../components/loading-component/loading-component'
import styles from './SinglePageCard.module.scss'
import HeaderComponent from '../../components/header-component/header-component'
import MenuComponent from '../../components/menu-component/menu-component'

class SingleCardPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedCard: {}
        }
    }

    componentDidMount(){
        this.fetchCardData()
    }

    fetchCardData = () => {
        const { id } = this.props.match.params
        const CORS = 'https://cors-anywhere.herokuapp.com/'
        const url = 'https://api.magicthegathering.io/v1/cards/'
        fetch( CORS + url + id )
        .then( response => response.json() )
        .then( data => {
            console.log( data.card )
            this.setState({
                selectedCard: data.card
            })
        })
    }

    render(){
        let cardData = null;
        if( this.state.selectedCard.name ){
            let state = this.state.selectedCard
            cardData = (
                <CardComponent 
                    showDetails = { true }
                    name = { state.name }
                    imageUrl= { state.imageUrl }
                    text = { state.text }
                    flavor = { state.flavor }
                    type = { state.type }
                    rarity = { state.rarity }
                    color = { state.colors }
                    power = { state.power }
                    mana = { state.manaCost }
                />
            )
        } else{
            cardData = <LoadingComponent />
        }

        return(
            <React.Fragment>
                <MenuComponent />
                <HeaderComponent />
                <div className={ styles.container }>
                    { cardData }
                </div>
            </React.Fragment>
        )
    }
}

export default SingleCardPage