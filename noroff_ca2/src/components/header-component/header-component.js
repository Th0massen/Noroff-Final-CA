import React from 'react'
import styles from './header.module.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/magiclogo.png'

const HeaderComponent = () => {
    return(
        <div className={styles.header}>
            <Link to='/'>
                <img src={ Logo } alt="MTG Logo"/>
            </Link>
        </div>
    )
}

export default HeaderComponent