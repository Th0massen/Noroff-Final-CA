import React from 'react'
import styles from './header.module.scss'
import Logo from '../../assets/magiclogo.png'

const HeaderComponent = () => {
    return(
        <div className={styles.header}>
            <img src={ Logo } alt="MTG Logo"/>
        </div>
    )
}

export default HeaderComponent