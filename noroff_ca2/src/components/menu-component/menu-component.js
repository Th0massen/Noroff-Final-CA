import React from 'react'
import { Link } from 'react-router-dom'
import styles from './menu.module.scss'

const MenuComponent = () => {
    return(
        <div className={ styles.nav }>
            <div className={ styles.nav_links }>
                <Link className={ styles.link_element } to="/"> Home </Link>
                <Link className={ styles.link_element } to="/about"> About </Link>
                <Link className={ styles.link_element } to="/contact"> Contact </Link>
            </div>
        </div>
    )
}

export default MenuComponent