import React, { Component } from "react";
import Navbar from './navbar'
import LocationSearchModal from '../map.js'

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
   <LocationSearchModal/>
    </div>
    );
  }
}