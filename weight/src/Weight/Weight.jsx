import React from 'react';
import WeightItem from '../WeightItem/WeightItem';
import s from './Weight.module.css';

const Weight = () => {
    const history = JSON.parse(localStorage.getItem('history'));

    return (
        <ol className={s.Weight}>
            {history.map(el => <WeightItem weight = {el.weight} date = {el.date.substring(0, 19)} key = {el.date}/>)}
        </ol>
    );
    
};

export default Weight;