import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import {Switch, Route} from 'react-router-dom';
import Imt from '../Imt/Imt';
import Weight from '../Weight/Weight';
import History from '../History/History';

const MainPage = () => {
    return (
        <div>
            <Header/>
            <Nav/>
            <Switch>
                <Route path='/mainPage/imt' component={Imt}/>
                <Route path='/mainPage/weight' component={Weight}/>
                <Route path='/mainPage/history' component={History}/>
            </Switch>
        </div>
    );
};

export default MainPage;

