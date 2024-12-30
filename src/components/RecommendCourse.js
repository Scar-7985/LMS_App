import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardList from './CardList';
import axios from 'axios';
import { CourseContext } from '../context/CourseContext'

const RecommendCourse = () => {

    const { courseData } = useContext(CourseContext);


    return (
        <div className="card-body px-2 pt-0">
            {
                courseData.length > 0 ? (
                    courseData.map((item) => (
                        <Link
                            key={item.id}
                            to={`/course-detail/${item.id}`}
                            className="card mt-2 shadow text-decoration-none border"
                            style={{ padding: '4px' }}
                        >
                            <CardList
                                title={item.program_name}
                                image={`https://picsum.photos/id/${item.id}/200/180`}
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
