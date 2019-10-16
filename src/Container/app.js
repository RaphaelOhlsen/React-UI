import React, { Component } from 'react'
import { Header, Footer } from '../Component/Layouts';
import Exercises from '../Component/Exercises';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Exercises />
        <Footer />
      </>
    )
  }
}

export default App;