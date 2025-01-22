import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { SITE_URL } from "../define/Define.js";
import axios from "axios";

const HeroBanner = () => {

  const [showSkeleton, setShowSkeleton] = useState(true);
  const [bannerData, setBannerData] = useState([]);
  // console.log(bannerData);


  useEffect(() => {
    axios.post(`${SITE_URL}new/app/api/get_banner.php`).then(response => {
      setBannerData(response.data);
      setShowSkeleton(false);
    }).catch(error => {
      console.log("Could not fetch Banner => ", error);
    })
  }, [])


  return (
    <>

      {
        showSkeleton ? (
          <div id="carouselSkeleton" className="carousel slide">
            <div className="carousel-inner">
              {/* Placeholder for carousel items */}
              <div className="carousel-item active position-relative text-center">
                <div
                  className="skeleton skeleton-image d-block w-100"
                  style={{ height: '240px' }}
                ></div>
              </div>
            </div>
          </div>
        ) : (
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* filter data where status === 1 */}
              {bannerData.map((item, index) => (
                <div
                  className={`carousel-item ${index === 0 ? 'active' : ''} position-relative text-center`}
                  key={item.id}
                >
                  <img src={`${SITE_URL}new/app/upload/banner/${item.banner_image}`} className="d-block w-100" alt={''} />
                </div>
              ))}
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
        )
      }
    </>
  );
};

export default HeroBanner;
