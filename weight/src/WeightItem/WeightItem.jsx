import React from 'react';

const WeightItem = ({weight, date}) => {  
    
    return (
        <li>
            <p>{weight + 'кг'}</p>
            <span>{'дата: ' + date}</span>
            <p>разница:</p>
        </li>
    );
};

export default WeightItem;