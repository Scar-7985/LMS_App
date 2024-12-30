import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CourseContext } from '../context/CourseContext'

const MyCourses = () => {

    const { courseData } = useContext(CourseContext);
    const purchasedCourses = courseData.filter((item) => item.status === 1);


    return (
        <>



            <div className='d-flex flex-column px-2'>
                <h4 className='text-muted text-center my-1 mt-2' style={{ fontSize: '15px' }}>
                    {
                        courseData.length > 0 ? ('-- Your Purchased Courses --') : ("You haven't purchased any courses")
                    }
                </h4>

                <div className='pb-2' style={{ minHeight: 'calc(100vh - 154px)' }}>
                    {
                        courseData.length > 0 ?
                            (

                                purchasedCourses.map((item) => {
                                    return (
                                        <Link
                                            to={`/course-detail/${item.id}`}
                                            key={item.id}
                                            className="card shadow border mt-1"
                                            style={{ textDecoration: 'none', padding: '4px' }}
                                        >
                                            <div className="card-body d-flex p-0">
                                                <img src={'/assets/img/course/1.png'} className='' alt="course"
                                                    style={{ width: '100px', height: '100px', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}
                                                />
                                                <div className='pl-1 py-2 w-100'>
                                                    <div style={{ fontWeight: '600', fontSize: '15px', overflowWrap: 'break-word', lineHeight: '1', color: 'orangered' }} >
                                                        {item.program_name.length > 35 ? item.program_name.substring(0, 35) + '...' : item.program_name}
                                                    </div>
                                                    <div className='mt-1' style={{ color: 'orangered', fontSize: '12px', fontWeight: '600' }}>
                                                        Duration: {item.video_duration}
                                                    </div>
                                                </div>
                                                <div style={{ alignSelf: 'center', fontSize: '30px', color: 'orangered' }}>
                                                    <ion-icon name="play-circle"></ion-icon>
                                                </div>
                                            </div>
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
