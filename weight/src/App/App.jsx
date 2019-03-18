import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import StartPage from '../StartPage/StartPage';
import MainPage from '../MainPage/MainPage';
import styles from './App.module.css';


class App extends Component {
    state = {
        weight: 0,
        wishWeight: 0,
        height: 0,
        gender: '',
        history: [],
        modalClick: false,
        newWeight: null,
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
            index: Math.round(this.state.weight / Math.pow(this.state.height/100, 2))
        }

        localStorage.setItem('userInfo', JSON.stringify(user))
    }
    openModal = (e) => {
        if(e.target.dataset.btn === 'openBtn'){
            this.setState({
                modalClick: !this.state.modalClick,
            })
        }
    }
    saveNewInput = (e) => {
        const newWeight = e.target.value;

        this.setState({
            newWeight: newWeight,
        })
       
    }
    saveNewWeight = (e) => {
        e.preventDefault();
     
        const userObj = {
            weight: this.state.newWeight,
            date: new Date(),
        }

        this.setState((prev) => ({
            modalClick: false,
            history: [userObj, ...prev.history],
        }), () => localStorage.setItem('history', JSON.stringify(this.state.history)))
       
    };
    render() {
        const {modalClick} = this.state;
        return (
            <div className={styles.app}>
                 <Switch>
                    <Route exact path='/' render={props => (localStorage.getItem('userInfo') ? <Redirect to='/mainPage'/> : <StartPage {...props} readInputs = {this.readInputs} submitStart = {this.submitStart}/>)}/>

                    <Route path='/mainPage' render = {props => <MainPage {...props} openModal = {this.openModal} modalClick = {modalClick} saveNewInput = {this.saveNewInput} saveNewWeight = {this.saveNewWeight}/>}/>  
                </Switch>
            </div>
        );
    }
}

export default App;

