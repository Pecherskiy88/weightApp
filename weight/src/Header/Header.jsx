import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from './aktibmi-logo.png';
import styles from './Header.module.css';


const Header = ({openModal}) => {
    return (
       <header className={styles.header}>
        <button className={styles.btnTheme}>|||</button>
        <h1 className={styles.title}>
        <NavLink to='/mainPage'><img className={styles.img} src={Logo} alt=""/></NavLink>
        </h1>
        
        <button onClick = {openModal} data-btn = 'openBtn' className={styles.btn}>+</button>

       </header>
    );
};

export default Header;