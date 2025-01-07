import React, { useState, useEffect } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { SITE_URL } from "../define/Define.js";
import axios from "axios";

const HeroBanner = () => {


  const [bannerData, setBannerData] = useState([])

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get(`${SITE_URL}new/app/api/get_banner.php`);
        const data = response.data;
        setBannerData(data);
      } catch (error) {

      }
    }

    fetchBanner();
  }, [])


  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* filter data where status === 1 */}
        {bannerData.filter((item) => item.status === 1).map((item, index) => (
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
  );
};

export default HeroBanner;
