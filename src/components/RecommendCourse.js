import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CardList from './CardList';
import { SITE_URL } from '../define/Define';
import CardListSkeleton from './CardListSkeleton';

const RecommendCourse = () => {

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
        <div className="" style={{ paddingBottom: '80px' }}>
            {
                showSkeleton ? (
                    skeletonData.map((item) => (
                        <div
                            key={item.id}
                            className="card mt-2 shadow text-decoration-none border"
                            style={{ overflow: 'hidden' }}
                        >
                            <CardListSkeleton />
                        </div>
                    ))
                ) : (
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
                )
            }

        </div>
    );
};

export default RecommendCourse;
