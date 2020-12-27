import React, { Component } from "react";
// import Navbar from '../Navbar/navbar';
import image1 from "../../images/nature-3294632_1280.jpg";
import image2 from "../../images/96091161-wild-natural-forest-at-sunrise-the-sun-is-shining-through-the-trees.jpg";
import image3 from "../../images/green-2008580_1280.jpg";
import image4 from "../../images/black-and-white-1297353__480.webp";
import image5 from "../../images/recycling.jpg";
import image6 from "../../images/1_x9sm3fjasQp8gXQp-Sd0pA.png";
import image7 from "../../images/forest-56930_1280.webp";
import image8 from "../../images/lake-irene-1679708_1280.webp";


export default class Viewpage extends Component {
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
                <a href="https://m.facebook.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-facebook-square fa-1x"></i></a>
               <a href="https://twitter.com/?lang=en" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-twitter-square fa-1x"></i></a>
               <a href="https://www.youtube.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-youtube fa-1x"></i></a>
               <a href="https://mail.google.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fas fa-envelope-square fa-1x"></i></a>
               <a href="https://www.instagram.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-instagram-square fa-1x"></i></a> 
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="/sign" className="navbar-brand d-flex align-items-center">
            <img src={image6} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"></img>
            <strong>Dawerha</strong>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </div>
    </div>
    
  <div>
      <section className="jumbotron text-center" id="img">
        <div className="container">
          <h1 className="jumbotron-heading" style={{color:"black"}}>Dawerha</h1>
          <p className="lead text-muted">can benefit our community and the environment, by collecting and processing materials that would otherwise be thrown away as trash and turning them into new products.</p>
          <p>
            <a href="/sign" className="btn btn-outline-success">Join Us</a>
            <a href="/login" className="btn btn-outline-success" id="button">Sign in</a>
          </p>
        </div>
      </section>
    </div>


   </div>
 

    
    );
  }
}