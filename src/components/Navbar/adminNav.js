import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class AdminNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
    <div>
    <nav>
    {/* <Link to="/home" > DAWERHA </Link> */}
    <Link to="/AdminItems"> all Items</Link>
    <Link to="/" onClick={() => {localStorage.removeItem('token'); localStorage.removeItem('user_id'); window.location.reload()}}> Sign out </Link>
    </nav>
    </div>
    );
  }
}