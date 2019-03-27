import React from 'react'
import styles from './card-component.module.scss'
import { Link } from 'react-router-dom'

const CardComponent = (props) => {

    let viewMoreBtn = null
    let displayInfo = null
    if( props.showButtons ){
        viewMoreBtn = (<Link to={{ pathname: 'card/' + props.id }}> Select the { props.name } </Link>)
    }
    if( props.showDetails ){
        displayInfo = (
            <div className={ styles.card_details }>
                <div className={ styles.details_type }>
                    <p>{ props.type }</p>
                </div>
                <div className={ styles.details_container }>
                    <div className={ styles.details_text }>
                        <p>{ props.text }</p>
                        <p>{ props.flavor }</p>
                    </div>
                    <div className={ styles.details_info }>
                        <p>mana cost: { props.mana }</p>
                        <p>power: { props.power }</p>
                        <p>color: { props.color }</p>
                        <p>rarity: { props.rarity }</p>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <React.Fragment>
            <div className={ styles.card }>
                <div className="card-title">
                    <h2> { props.name } </h2>
                </div>
                <div className="card-image">
                    <img src={ props.imageUrl } alt="card-illustration" />
                </div>
                { viewMoreBtn }
            </div>
            { displayInfo }
        </React.Fragment>
    )
}

export default CardComponent
