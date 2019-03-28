import React from 'react'
import styles from './card-component.module.scss'
import { Link } from 'react-router-dom'

const CardComponent = (props) => {

    let viewMoreBtn = null
    let displayInfo = null
    if( props.showButtons ){
        viewMoreBtn = (<Link className={ styles.card_link } to={{ pathname: 'card/' + props.id }}> Select the { props.name } </Link>)
    }
    if( props.showDetails ){
        displayInfo = (
            <div className={ styles.card_details }>
                <div className={ styles.details_type }>
                    <p>Type: { props.type }</p>
                </div>
                <div className={ styles.details_container }>
                    <div className={ styles.details_text }>
                        <p>{ props.text }</p>
                        <p>{ props.flavor }</p>
                    </div>
                    <div className={ styles.details_info }>
                        <p><span className={styles.description}>Cost:</span>{ props.mana }</p>
                        <p><span className={styles.description}>Power:</span>{ props.power }</p>
                        <p><span className={styles.description}>Color:</span>{ props.color }</p>
                        <p><span className={styles.description}>Rarity:</span>{ props.rarity }</p>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <React.Fragment>
            <div className={ styles.card }>
                <div className={styles.card_title}>
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
