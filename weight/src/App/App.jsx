import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import StartPage from '../StartPage/StartPage';
import MainPage from '../MainPage/MainPage';
import styles from './App.module.css';


class App extends Component {
    state = {
        weight: 0,
        wishWeight: 0,
        height: 0,
        gender: 0,
    }

    readInputs = (e) => {
        const inputs = e.target.name;
        console.log(inputs);
        const value = e.target.value;

        this.setState({
            [inputs]: value,
        })   
    }

    submitStart = (e) => {
        const user = {
            weight: this.state.weight,
            wishWeight: this.state.wishWeight,
            height: this.state.height,
            gender: this.state.gender,
        }

        localStorage.setItem('userInfo', JSON.stringify(user))
    }

    render() {
        return (
            <div className={styles.app}>
                 <Switch>
                    <Route exact path='/' render = {props => <StartPage {...props} readInputs = {this.readInputs} submitStart = {this.submitStart}/>}/>
                    <Route path='/mainPage' component = {MainPage}/>  
                </Switch>
            </div>
        );
    }
}

export default App;

