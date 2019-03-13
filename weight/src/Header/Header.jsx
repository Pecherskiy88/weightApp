import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from './aktibmi-logo.png';
import styles from './Header.module.css';


const Header = () => {
    return (
       <header className={styles.header}>
        <button className={styles.btnTheme}>|||</button>
        <h1 className={styles.title}>
            <a href="#">
            <img className={styles.img} src={Logo} alt=""/>
            </a>
        </h1>
        
        <NavLink className={styles.btn} to='/inputWeight'>+</NavLink>

       </header>
    );
};

export default Header;