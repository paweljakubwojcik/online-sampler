import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

//components
import Header from './components/layouts/Header'
import SideBar from './components/layouts/SideBar'
import SampleMenu from './components/SampleMenu'
import Keyboard from './components/Keyboard'
import BackgroundImage from './components/layouts/BackgroungImage'

//pages
import About from './components/pages/About'
import Creators from './components/pages/Creators'
import LearnMore from './components/pages/LearnMore'
import Support from './components/pages/Support'

export default class App extends Component {

  state = {
    instrument: 'Piano'
  }

  componentDidMount() {
    if (sessionStorage.getItem('instrument')) {
      let instrument = sessionStorage.getItem('instrument')
      this.setState({ instrument })
    }
  }

  changeInstrument = (instrument) => {
    this.setState({ instrument })
    sessionStorage.setItem('instrument', instrument)
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <SideBar />
          <Route exact path='/'>
            <SampleMenu changeInstrument={this.changeInstrument} instrument={this.state.instrument} />
            <Keyboard />
            <BackgroundImage instrument={this.state.instrument} />
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
