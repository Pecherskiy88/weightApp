import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import {Switch, Route} from 'react-router-dom';
import Imt from '../Imt/Imt';
import Weight from '../Weight/Weight';
import History from '../History/History';
import InputWeight from '../InputWeight/InputWeight';

const MainPage = ({openModal, modalClick,saveNewInput, saveNewWeight}) => {
    return (
        <div>
            <Header openModal = {openModal}/>
            <Nav/>
            <Switch>
                <Route exact path='/mainPage' component={Imt}/>
                <Route path='/mainPage/weight' render = {props => <Weight {...props}/>}/>
                <Route path='/mainPage/history' component={History}/>
            </Switch>
            <InputWeight modalClick = {modalClick} saveNewInput = {saveNewInput} saveNewWeight = {saveNewWeight}/>
        </div>
    );
};

export default MainPage;

