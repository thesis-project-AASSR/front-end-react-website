import React, { Component } from "react";
import HomeNav from '../Navbar/homeNav';
import MapContainer from '../map.js';
import image6 from "../../images/1_x9sm3fjasQp8gXQp-Sd0pA.png";
import image8 from "../../images/lake-irene-1679708_1280.webp";
import image10 from '../../images/pexels-mali-maeder-802221.jpg';
import image11 from '../../images/background-recycle-symbol-260nw-110941127.webp';
import image12 from '../../images/crumpled-2537807_1280.jpg';
import image13 from '../../images/42-18260830edit.jpg';
import image14 from '../../images/wp2529177.jpg';
import image15 from '../../images/wp2529191.jpg';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
    <div>
    <div>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">Dawerha&copy; is a nonprofit website with free Membership. Everything posted must be free, legal and appropriate for all ages.
               Dawerha is a recycling website which aims to encourage people to recycle more and recycle more often. Our  mission is to protect the environment by converting waste materials into new materials and objects.</p>
            </div>
            
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
                <a href="https://m.facebook.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-facebook-f fa-1x"></i></a>
               <a href="https://twitter.com/?lang=en" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-twitter fa-1x"></i></a>
               <a href="https://www.youtube.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-youtube fa-1x"></i></a>
               <a href="https://mail.google.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fas fa-envelope fa-1x"></i></a>
               <a href="https://www.instagram.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-instagram fa-1x"></i></a> <br/><br/>
               <button onClick={() => {localStorage.removeItem('token'); localStorage.removeItem('user_id'); window.location=('/')}}  style={{color:"white"}} className="btn btn-outline-success"> Sign out </button>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img src={image6} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"></img>
            <strong>Dawerha</strong>
          </a>
          <a href="/SellerProfile" style={{color:"white"}}> Profile </a>
          <a href="/AddItems" style={{color:"white"}}> Add Items </a>
          <a href="/SellerItems" style={{color:"white"}}> All Items </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </div>
    </div>

  
    <div>
      <section className="jumbotron text-center" id="img" style={{background: `url(${image13})`, backgroundPosition: "center", backgroundRepeat: "no-repeat",backgroundSize:"cover"}}>
        <div className="container">
      
          {/* <p className="lead "  style={{color:"white",backgroundColor:"	rgb(48,48,48)", fontSize:"20px"}}>
          Thank you for using our website and for being responsible the Environment
Instructions of using this website:
In the upper part of this page, you can navigate through the pages.
In the Add Items page you need to select the category of your items, then you need to specify the weight, description, quantity and upload an image of these items, and at the end you need to pick your location in order to be able to reach you out for collection.
Before submitting, the expected Environment support will be for you.
In the profile page, you will be able to view your information and edit them.
 In the All Items page, you will be able to watch all items that you have submitted in addition to the ability of editing and deleting each entry.
          </p> */}
          {/* <p className="lead "  style={{color:"white", fontSize:"60px",fontWeight:"50px"}}>
          Welcome to Dawerha
          </p> */}
        </div>
        <br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/>
      </section>
    </div>




    </div>
    );
  }
}