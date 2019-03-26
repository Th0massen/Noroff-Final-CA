import React from 'react'
import styles from './card-component.module.scss'

const CardComponent = (props) => {
    return(
        <div className={ styles.card }>
            <div className="card-image">
                <img src={ props.imageUrl } alt="card-illustration" />
            </div>
            <div className="card-title">
                <h2> { props.name } </h2>
            </div>
            <input type="button" value=" Select Card "/>
            <div className="card-details">
                <p> { props.details } </p>
            </div>
        </div>
    )
}

export default CardComponent
