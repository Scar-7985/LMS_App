import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import CardPopular from './CardPopular';
import {CourseContext} from '../context/CourseContext'

const TrendingCourse = () => {

 const { courseData } = useContext(CourseContext);

  return (
    <div className="row px-2 items-center" >

      {
        courseData.map((item, index) => {
          return (
            <div className="col-6 mt-2" key={item.id}>
              <Link to={`/course-detail/${item.id}`} className='card shadow text-decoration-none border'>
                <CardPopular
                  key={item.id}
                  title={item.program_name}
                  image={`https://picsum.photos/id/${index + 49}/200/200`}
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
