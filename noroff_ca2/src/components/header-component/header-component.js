import React from 'react'
import styles from './header.module.scss'

const HeaderComponent = () => {
    return(
        <div className={styles.header}>
            <img src="../../assets/magiclogo.png" alt="Logo"/>
        </div>
    )
}

export default HeaderComponent