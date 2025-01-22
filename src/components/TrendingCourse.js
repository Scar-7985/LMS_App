import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import CardPopular from './CardPopular';
import { CourseContext } from '../context/CourseContext'
import { SITE_URL } from '../define/Define';
import axios from 'axios';
import CardPopularSkeleton from './CardPopularSkeleton';

const TrendingCourse = () => {

  // =========== Skeleton UI Starts =========== //
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [skeletonData, setSkeletonData] = useState([
    { id: 1, title: "loading-skeleton" },
    { id: 2, title: "loading-skeleton" },
    { id: 3, title: "loading-skeleton" },
    { id: 4, title: "loading-skeleton" }
  ]);
  // =========== Skeleton UI Ends =========== //

  const [courseData, setCourseData] = useState([]);
  // console.log(courseData);

  useEffect(() => {
    axios.post(`${SITE_URL}new/app/api/get_course.php`).then(response => {
      setCourseData(response.data);
      setShowSkeleton(false);
    }).catch(error => {
      console.log("Could not get recommended Course => ", error);
    })
  }, [])

  return (
    <div className="row m-0" style={{ width: '100vw', paddingBottom: '80px' }}>

      {
        showSkeleton ? (
          skeletonData.map((item) => (
            <div
              key={item.id}
              className="col-6 mt-1 p-2"
              style={{ display: 'grid', placeItems: 'center' }}
            >
              <CardPopularSkeleton />
            </div>
          ))
        ) : (
          courseData.length > 0 ? (
            courseData.map((item, index) => {
              return (
                <div className="col-6 mt-1 p-2" key={item.id} style={{ display: 'grid', placeItems: 'center' }}>
                  <Link to={`/course-detail/${item.program_name}`} className='shadow text-decoration-none w-100'>
                    <CardPopular
                      title={item.program_name}
                      image={`${SITE_URL}new/app/upload/course_img/${item.img}`}
                      of_price={item.of_price}
                      ac_price={item.ac_price}
                      category={item.category}
                    />
                  </Link>
                </div>
              )
            })
          ) : (
            <p className="text-center mt-3">No courses available.</p>
          )
        )}



    </div>
  )
}

export default TrendingCourse
