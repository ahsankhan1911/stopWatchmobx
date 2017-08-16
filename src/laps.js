import React, { Component } from 'react';
import {inject,observer} from 'mobx-react';
import AppState from './AppState';

import style from '../App.css'

const appState2 = new AppState();
export default class Laps extends Component {
 render () {
     return(
         <div>
             <h1>Hello world</h1>
             {appState2.timeinSec}
             
        </div>

     )
 }

}
 