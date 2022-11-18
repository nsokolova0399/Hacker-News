import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {MyHeader} from "./MyHeader";
import {News} from "./News";
import {HomePage} from "./HomePage";

const App = () => {
    return (
        <BrowserRouter>
        <div className="App">
            <MyHeader />
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/News/:id" component={News}/>
            </Switch>
            </div>
        </BrowserRouter>
            );
};

export default App;

