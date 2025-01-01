import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CourseContext } from '../context/CourseContext'
import VideoCard from '../components/VideoCard';

const MyCourses = () => {

    const { courseData } = useContext(CourseContext);
    const purchasedCourses = courseData.filter((item) => item.status === 1);


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
                        courseData.length > 0 ?
                            (

                                purchasedCourses.map((item) => {
                                    return (
                                        <Link
                                            to={`/course-detail/${item.id}`}
                                            key={item.id}
                                            className="card mt-2 shadow text-decoration-none border"
                                            style={{ textDecoration: 'none', padding: '4px' }}
                                        >
                                            <VideoCard
                                                image={`https://wealthsaga.store/new/app/upload/course_img/${item.img}`}
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
                    }



                </div>

            </div>
        </>
    )
}

export default MyCourses
