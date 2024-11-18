import React from "react";
import './Carousel.css';
import img1 from './8236601.jpg';
import img2 from './8226436.jpg';
import img3 from './789456.jpg';
import img4 from './10242499.jpg';
import img5 from './slider1.jpg';
import Allproducts from "../Products/Allproducts";
import Productdata from '../Products/productdata.json';

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 carousel-img"  alt="can't load" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 carousel-img" alt="can't load" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 carousel-img" alt="can't load" />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100 carousel-img" alt="can't load" />
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100 carousel-img" alt="can't load" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Allproducts data={Productdata} />
    </>
  );
}
