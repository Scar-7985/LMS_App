import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CourseContext } from '../context/CourseContext'

const Course = () => {

  const { courseCategory } = useContext(CourseContext);
  // console.log(courseCategory);


  return (
    <div className="bg-white" style={{ height: 'calc(100vh - 116px)' }}>
      <div className="row px-2">
        {courseCategory.length > 0 ? (
          courseCategory.map((item) => {
            return (
              <Link to={`/course_category/${item.ser_title}`}
                className="col-6 px-1 mt-1"
                key={item.id}
                style={{ height: '140px', position: 'relative' }}
              >
                <img src={`https://wealthsaga.store/new/app/upload/category_img/${item.image}`} alt="img" className="image-block imaged" style={{ width: '100%', height: '100%', filter: 'brightness(40%)' }} />
                <div className="text-white" style={{ position: 'absolute', top: '0', left: '0', bottom: '0', right: '0', display: 'grid', placeItems: 'center', }}>
                  <div className='text-white text-center p-2' style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', fontSize: '18px', fontWeight: '500' }}>
                    <div dangerouslySetInnerHTML={{ __html: item.ser_title }} />
                  </div>
                </div>
              </Link>
            )
          })
        ) : (
          <div style={{ width: '100%', height: 'calc(100vh - 112px)', display: 'grid', placeItems: 'center' }}>
            <div className="spinner-border text-success" role="status">
            </div>
          </div>
        )
        }
      </div>

    </div>



  );
};

export default Course;