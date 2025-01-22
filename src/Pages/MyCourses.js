import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CourseContext } from '../context/CourseContext'
import VideoCard from '../components/VideoCard';
import { SITE_URL } from '../define/Define';
import axios from 'axios';
import CardListSkeleton from '../components/CardListSkeleton'

const MyCourses = () => {

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
    const purchasedCourses = courseData.filter((item) => item.status === 1);

    useEffect(() => {
        axios.post(`${SITE_URL}new/app/api/get_course.php`).then(response => {
            setCourseData(response.data);
            setShowSkeleton(false);
        }).catch(error => {
            console.log("Could not fetch my purchased courses => ", error);
        })
    }, [])

    return (
        <>
            <div className='d-flex flex-column px-2 pb-5'>
                <h4 className='text-muted text-center my-1 mt-2' style={{ fontSize: '15px' }}>
                    {
                        courseData.length > 0 ? ('-- Your Purchased Courses --') : ("You haven't purchased any courses")
                    }
                </h4>

                <div className='pb-4'>
                    {
                        showSkeleton ? (
                            skeletonData.map((item) => {
                                return (
                                    <div
                                        key={item.id}
                                        className="card mt-2 shadow text-decoration-none border"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <CardListSkeleton />
                                    </div>
                                )
                            })
                        ) : (
                            courseData.length > 0 ?
                                (

                                    purchasedCourses.map((item) => {
                                        return (
                                            <Link
                                                to={`/course-detail/${item.program_name}`}
                                                key={item.id}
                                                className="card mt-2 shadow text-decoration-none border"
                                                style={{ textDecoration: 'none' }}
                                            >
                                                <VideoCard
                                                    image={`${SITE_URL}new/app/upload/course_img/${item.img}`}
                                                    title={item.program_name.length > 35 ? item.program_name.substring(0, 35) + '...' : item.program_name}
                                                    category={item.category}
                                                />

                                            </Link>
                                        )
                                    })

                                ) : (
                                    <div style={{ display: 'grid', placeItems: 'center', width: '100%', height: '200px' }}>
                                        <Link to='/course' className='btn btn-md btn-success text-white'>Explore Courses</Link>
                                    </div>
                                )
                        )
                    }



                </div>

            </div>
        </>
    )
}

export default MyCourses
