import React from 'react';
import s from './InputWeight.module.css';

const InputWeight = ({modalClick, saveNewInput, saveNewWeight}) => {
    return (
                <form onSubmit = {saveNewWeight} action="" className={modalClick ? `${s.InputWeightOpen}` : `${s.InputWeightClose}`}>
                    <input onChange = {saveNewInput} type="text" name='newWeight'/>
                    <button type='submit'>Сохранить вес</button>
                    <button>Отмена</button>
                </form>
           
            
          
             
        
    );
};

export default InputWeight;