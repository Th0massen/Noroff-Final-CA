import React from 'react'
import { Link } from 'react-router-dom'
import styles from './menu.module.scss'

const MenuComponent = () => {
    return(
        <div className={ styles.nav }>
            <div className={ styles.nav_links }>
                <Link className={ styles.link_element } to="/"> Home </Link>
            </div>
        </div>
    )
}

export default MenuComponent