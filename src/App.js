import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { changeOrientation } from './globalMethods'



//components
import Header from './components/layouts/Header'
import SideBar from './components/layouts/SideBar'
import Mellotron from './components/Mellotron'

//pages
import About from './components/pages/About'
import Creators from './components/pages/Creators'
import LearnMore from './components/pages/LearnMore'
import Page404 from './components/pages/404'

//config
import config from '../package.json'
const rootAddres = config.homepage.split('/').pop()

export default class App extends Component {

  state = {
    app: 'mellotron' //can be mellotron or sampler
  }

  componentDidMount() {
    window.addEventListener('resize', changeOrientation)
    window.addEventListener('load', changeOrientation)
  }



  render() {
    return (
      <div className="App">
        <Router basename={rootAddres}>
          <Header />
          <Switch>
            <Route exact path='/'>
              <SideBar />
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
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
