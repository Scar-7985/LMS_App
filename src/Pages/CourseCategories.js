import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { SITE_URL } from "../define/Define";

const CourseCategories = () => {
  // =========== Skeleton UI Starts =========== //
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [skeletonData, setSkeletonData] = useState([
    { id: 1, title: "loading-skeleton" },
    { id: 2, title: "loading-skeleton" },
    { id: 3, title: "loading-skeleton" },
    { id: 4, title: "loading-skeleton" }
  ]);
  // =========== Skeleton UI Ends =========== //

  const [courseCategory, setCourseCategory] = useState([]);

  useEffect(() => {
    axios.post(`${SITE_URL}new/app/api/get_category.php`).then(response => {
      setCourseCategory(response.data);
      setShowSkeleton(false);

    }).catch(error => {
      console.log("Could not fetch Course Category => ", error);
    })

  }, [])



  return (
    <div className="bg-white" style={{ height: 'calc(100vh - 116px)' }}>
      <div className="row mx-1">
        {
          showSkeleton ? (

            skeletonData.map((item) => {
              return (
                <div className="col-6 d-flex flex-column px-1 mt-3" key={item.id}>
                  <div
                    className="border border-2 shadow"
                    style={{
                      height: '200px',
                      borderTopLeftRadius: '8px',
                      borderTopRightRadius: '8px',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Skeleton for Image */}
                    <div
                      className="skeleton skeleton-image"
                      style={{ width: '100%', height: '60%' }}
                    ></div>

                    {/* Skeleton for Text */}
                    <div
                      className="pt-2 d-flex flex-column justify-content-center align-items-center"
                      style={{ height: '40%' }}
                    >
                      <div
                        className="skeleton skeleton-text"
                        style={{ width: '80%', height: '16px', marginBottom: '8px' }}
                      ></div>
                      <div
                        className="skeleton skeleton-text"
                        style={{ width: '80%', height: '16px', marginBottom: '8px' }}
                      ></div>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            courseCategory.length > 0 ? (
              courseCategory.map((item) => {
                return (
                  <div
                    className="col-6 d-flex flex-column px-1 mt-3"
                    key={item.id}>
                    <Link
                      to={`/course_type/${item.ser_title}`}
                      className="border border-2 shadow" style={{ height: '200px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', overflow: 'hidden', textDecoration: 'none' }}>
                      <img src={`${SITE_URL}new/app/upload/category_img/${item.image}`} alt="img" className="" style={{ width: '100%', height: '60%' }} />
                      <div className="pt-2" style={{ height: '40%' }}>
                        <div className='text-secondary text-center p-0' style={{ width: '100%', fontSize: '14px', fontWeight: '600' }}>
                          <div dangerouslySetInnerHTML={{ __html: item.ser_title.length > 50 ? item.ser_title.substring(0, 50) + "..." : item.ser_title }} />
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })
            ) : (
              <div style={{ width: '100%', height: 'calc(100vh - 112px)', display: 'grid', placeItems: 'center' }}>
                <div className="spinner-border text-success" role="status">
                </div>
              </div>
            )
          )
        }
      </div>

    </div>



  );
};

export default CourseCategories;