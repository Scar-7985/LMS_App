import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

const HeroBanner = () => {

  return (

    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active position-relative text-center">
          <img src="assets/img/bg/open-laptop.jpg" className="d-block w-100" alt="pic" style={{ height: '200px', zIndex: '0' }} />
          <div className="text-left"
            style={{
              position: 'absolute', top: '50%',
              left: '20%', transform: 'translate(-20%, -50%)', zIndex: '1',
            }}>
            <div className="text-white" style={{ fontSize: '14px' }}>Learn From Basics</div>
            <div className="text-white" style={{ fontSize: '20px', fontWeight: '600' }}>UI and UX Designs</div>
            <button className="button-56 mt-1" style={{fontWeight: '600'}}>Know More</button>
          </div>
        </div>
        <div className="carousel-item position-relative text-center">
          <img src="assets/img/bg/laptop-office.jpg" className="d-block w-100" alt="pic" style={{ height: '200px' }} />
          <div className="text-left"
            style={{
              position: 'absolute', top: '50%',
              left: '20%', transform: 'translate(-20%, -50%)', zIndex: '1',
            }}>
            <div className="text-white" style={{ fontSize: '14px' }}>Learn From Basics</div>
            <div className="text-white" style={{ fontSize: '20px', fontWeight: '600' }}>App Development</div>
            <button className="button-56 mt-1" style={{fontWeight: '600'}}>Know More</button>
          </div>
        </div>
        <div className="carousel-item position-relative text-center">
          <img src="assets/img/bg/working-late.jpg" className="d-block w-100" alt="pic" style={{ height: '200px' }} />
          <div className="text-left"
            style={{
              position: 'absolute', top: '50%',
              left: '20%', transform: 'translate(-20%, -50%)', zIndex: '1',
            }}>
            <div className="text-white" style={{ fontSize: '14px' }}>Learn From Basics</div>
            <div className="text-white" style={{ fontSize: '20px', fontWeight: '600' }}>Digital Marketing</div>
            <button className="button-56 mt-1" style={{fontWeight: '600'}}>Know More</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="assets/img/bg/desktop.jpg" className="d-block w-100" alt="pic" style={{ height: '200px' }} />
          <div className="text-left"
            style={{
              position: 'absolute', top: '50%',
              left: '20%', transform: 'translate(-20%, -50%)', zIndex: '1',
            }}>
            <div className="text-white" style={{ fontSize: '14px' }}>Learn From Basics</div>
            <div className="text-white" style={{ fontSize: '20px', fontWeight: '600' }}>Java Development</div>
            <button className="button-56 mt-1" style={{fontWeight: '600'}}>Know More</button>
          </div>
        </div>

      </div>
      <button className="carousel-control-prev d-none" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next d-none" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>





  );
};

export default HeroBanner;