import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <div className={s.wrapper}>
            <NavLink className={s.imt} to='/mainPage'>IMT</NavLink>
            <NavLink className={s.weight} to='/mainPage/weight'>WEIGHT</NavLink>
            <NavLink className={s.history} to='/mainPage/history'>HISTORY</NavLink>
        </div>
    );
};

export default Nav;