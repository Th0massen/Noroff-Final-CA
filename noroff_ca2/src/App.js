import React, { Component } from 'react';
import './App.module.scss'

class App extends Component {
 render(){
    return(
      <React.Fragment>
        { this.props.children }
      </React.Fragment>
    )
 }
}

export default App;