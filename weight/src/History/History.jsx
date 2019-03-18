import React from 'react';
import {Line} from 'react-chartjs-2';

const History = () => {
    const history = JSON.parse(localStorage.getItem('history'));
    const weight = history.map(el => el.weight);
    const day = history.map(el => el.date);

    const data = {
        labels:[...day],
        datasets: [{
            label: 'Chard',
            data: [...weight],
            backgroundColor: 'rgba(100,150,150,0.2)',
            borderColor: 'black',
        }]
    }
    
    return (
        <div>
           <Line data = {data}/>
        </div>
    );
};

export default History;