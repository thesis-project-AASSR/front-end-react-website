import React, { Component } from "react";
import Navbar from './navbar'
import MapContainer from '../map.js'

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
    <div>
    <Navbar/>
   <MapContainer/>
    </div>
    );
  }
}