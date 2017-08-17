import React, { Component } from 'react';
import {inject,observer} from 'mobx-react';

import style from '../App.css'


@observer
class App extends Component {
  render() {
    const values = {}
     return (
      <div>
      <div className={style.container}> 
      <div className={style.counter}>
        {this.props.appState.timeinSec}
    </div>
    <hr/>
     <p className={style.time}>{this.props.appState.timeinHr}:{this.props.appState.timeinMin}:{ this.props.appState.timeinSec }:{ this.props.appState.timeinMiliSec}
     
     </p>
      <div id="controls">
      
        <button className={style.button} onClick={this.onStart}>
          start
        </button> 

        <button className={style.button} onClick={this.onReset}>
          reset
        </button> 

         <button className={style.button} onClick={this.onStop}> stop </button>
      </div>
      </div>
      </div>
    );
  }

onStart = () => {
  
  this.props.appState.startTimer()
}

onReset = () => {
    this.props.appState.resetTimer()
  }

onStop =() => {
    this.props.appState.stopTimer()
  }
  
};

export default App;
