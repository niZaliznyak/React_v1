import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state}/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" render={() => <Dialogs state={props.state}/>}/>
                    <Route path="/profile" render={() => <Profile state={props.state}/>}/>
                    <Route path="/friends" render={() => <Friends state={props.state}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;