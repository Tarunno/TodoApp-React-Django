import React, { Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Stat from './components/Stat';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import './App.css';

class App extends Component{
    render() {
        return (
        <Router>
          <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/stat" component={Stat} />
            </Switch>
            <Footer />
          </div>
        </Router>
        );
    }
}

export default App;
