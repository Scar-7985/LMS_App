import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CardList from './CardList';
import { CourseContext } from '../context/CourseContext'
import { SITE_URL } from '../define/Define';

const RecommendCourse = () => {

    const { courseData } = useContext(CourseContext);

    // console.log(courseData);


    return (
        <div className="" style={{ paddingBottom: '80px' }}>
            {
                courseData.length > 0 ? (
                    courseData.map((item) => (
                        <Link
                            key={item.id}
                            to={`/course-detail/${item.program_name}`}
                            className="card mt-2 shadow text-decoration-none border"
                            style={{ overflow: 'hidden' }}
                        >
                            <CardList
                                title={item.program_name.length > 20 ? item.program_name.substring(0, 20) + ('...') : item.program_name}
                                image={`${SITE_URL}new/app/upload/course_img/${item.img}`}
                                category={item.category}
                                of_price={item.of_price}
                                ac_price={item.ac_price}
                            />
                        </Link>
                    ))
                ) : (
                    <p className="text-center mt-3">No courses available.</p>
                )
            }
        </div>
    );
};

export default RecommendCourse;
