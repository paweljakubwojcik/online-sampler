import React from 'react';
import Header from './components/layouts/Header'
import SideBar from './components/layouts/SideBar'
import SampleMenu from './components/SampleMenu'
import Keyboard from './components/Keyboard'
import BackgroundImage from './components/layouts/BackgroungImage'

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <SampleMenu />
      <Keyboard />
      <BackgroundImage />
    </div>
  );
}

export default App;
