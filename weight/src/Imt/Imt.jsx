import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import s from './Imt.module.css';

const Imt = () => {
    const obj = JSON.parse(localStorage.getItem('userInfo'));

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const fullDate = `${day}.${month}.${year}`
    const delta = (Number(obj.weight) - Number(obj.wishWeight)).toFixed(1);

    
    
    
    return (
        <div className={s.imt}>
           <div className={s.currentWeight}>
           <p className={s.text}>Текущий Вес</p>
           <p className={s.weight}>{`${obj.weight} кг`}</p>
           <p className={s.date}>{`Дата: ${fullDate}`}</p>
           </div> 
           <div className={s.wishWeight}>
           <p className={s.text}>Желаемый Вес</p>
           <p className={s.weightWish}>{`${obj.wishWeight} кг`}</p>
           <p className={s.delta}>{`${delta} кг - осталась разница`}</p>
           </div> 
           <span className={s.spanIndex}>Индекс массы тела</span>
           <ReactSpeedometer
           minValue={0}
           maxValue={40}
           segments={10}
            value={obj.index}
            startColor='lightGreen'
            endColor='red'
            width={320}
            needleTransitionDuration={2000}
               needleTransition="easeElastic"
           />
          

            

        </div>
    );
    
};

export default Imt;