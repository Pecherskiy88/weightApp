import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../StartPage/StartPage.module.css';

const StartPage = ({readInputs, submitStart}) => {
    return (
        <div className = {styles.startPage}>
            <form onClick={submitStart} className = {styles.form} action="">
                <input onChange={readInputs} className={styles.input} name='weight' type="text" placeholder='Ваш вес'/>
                <input onChange={readInputs} className={styles.input} name='wishWeight' type="text" placeholder='Желаемый вес'/>
                <input onChange={readInputs} className={styles.input} name='height' type="text" placeholder='Ваш рост'/>
                <input onChange={readInputs} className={styles.input} name='gender' type="text" placeholder='Ваш пол'/>
                <NavLink className={styles.btn} to='/mainPage'>Go</NavLink>
            </form>
        </div>
    );
};

export default StartPage;

