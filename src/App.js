import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

//components
import Header from './components/layouts/Header'
import SideBar from './components/layouts/SideBar'
import Mellotron from './components/Mellotron'


//pages
import About from './components/pages/About'
import Creators from './components/pages/Creators'
import LearnMore from './components/pages/LearnMore'
import Support from './components/pages/Support'

export default class App extends Component {

  state = {
    app: 'mellotron' //can be mellotron or sampler
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <SideBar />
          <Route exact path='/'>
            <Mellotron />
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/creators'>
            <Creators></Creators>
          </Route>
          <Route path='/learn-more'>
            <LearnMore />
          </Route>
          <Route path='/support'>
            <Support />
          </Route>
        </Router>
      </div>
    );
  }
}
