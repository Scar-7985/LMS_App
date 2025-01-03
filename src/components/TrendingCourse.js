import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import CardPopular from './CardPopular';
import { CourseContext } from '../context/CourseContext'
import { SITE_URL } from '../define/Define';

const TrendingCourse = () => {


  const { courseData } = useContext(CourseContext);

  return (
    <div className="row m-0" style={{ width: '100vw' }}>

      {
        courseData.map((item, index) => {
          return (
            <div className="col-6 mt-1 p-2" key={item.id} style={{display: 'grid', placeItems: 'center'}}>
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
      }

    </div>
  )
}

export default TrendingCourse
