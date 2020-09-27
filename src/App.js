import React, { Component } from 'react'
import Header from './components/layouts/Header'
import SideBar from './components/layouts/SideBar'
import SampleMenu from './components/SampleMenu'
import Keyboard from './components/Keyboard'
import BackgroundImage from './components/layouts/BackgroungImage'

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
        <Header />
        <SideBar />
        <SampleMenu changeInstrument={this.changeInstrument} instrument={this.state.instrument} />
        <Keyboard />
        <BackgroundImage instrument={this.state.instrument} />
      </div>
    );
  }
}
