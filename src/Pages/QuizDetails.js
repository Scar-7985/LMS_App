import { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { CourseContext } from '../context/CourseContext';
import VideoCard from '../components/VideoCard';
import { isAuthenticated } from '../define/Define'
import { SITE_URL } from '../define/Define';

const QuizDetail = () => {


    const { courseData } = useContext(CourseContext);
    const { quizId } = useParams();

    // Show specific course details
    const filteredCourse = courseData.find((item) => String(item.program_name) === String(quizId));
    // console.log('filteredCourse => ', filteredCourse);


    if (!filteredCourse) {
        // console.error('Course not found');
    }


    return (
        <>


            {
                filteredCourse ? (
                    <div key={filteredCourse.id} style={{ width: '100vw' }}>

                        <div className="section full bg-white">
                            <div className="subscribe bg-white shadow-lg" style={{ height: '50px' }}>



                                {isAuthenticated ?
                                    // If (status === 1) Purchased else not Purchased
                                    (filteredCourse.status === 1 ? (
                                        <Link
                                            className='w-100'
                                            to={'/quiz'}
                                            style={{ backgroundColor: 'orangered', color: 'white', textDecoration: 'none', display: 'grid', placeItems: 'center' }}>
                                            Play now
                                        </Link>
                                    ) : (

                                        <Link
                                            className='w-100'
                                            to={'/quiz'}
                                            style={{ backgroundColor: 'orangered', color: 'white', textDecoration: 'none', display: 'grid', placeItems: 'center' }}>
                                            Play now
                                        </Link>
                                    )
                                    ) : (
                                        <Link
                                            className='w-100'
                                            to={'/login'}
                                            style={{ backgroundColor: 'orangered', color: 'white', textDecoration: 'none', display: 'grid', placeItems: 'center' }}>
                                            Play now
                                        </Link>
                                    )
                                }
                            </div>


                            {/* ================ Main Content =================== */}
                            <div className="item">
                                <div className="user-car bg-white">
                                    <img src={`${SITE_URL}new/app/upload/course_img/${filteredCourse.img}`} alt="imaged" className="" style={{ width: '100%', height: '220px' }} />
                                </div>
                                <h1 className='mt-4 px-2'>{filteredCourse.program_name}</h1>
                                <div className='mt-1 px-2' style={{ fontWeight: '500', color: 'black' }}>
                                    <span className='text-secondary'>Total Questions :</span> {filteredCourse.id}</div>

                            </div>
                        </div>


                        {/* Description Filter */}

                        <div className="section bg-white pt-2 mb-5" style={{ paddingBottom: '80px' }}>


                            <>
                                <div className="card shadow py-2">
                                    <div className="card-body">
                                        <h2 className='mb-4 text-center' style={{ fontWeight: '600' }}>Quiz Details</h2>
                                        <div className="row">
                                            {/* Item */}
                                            <div className="col-6 d-flex flex-column justify-content-between align-items-center">
                                                <div className='d-flex justify-content-between align-items-center w-100'>
                                                    <ion-icon name="time" style={{ color: 'orange', fontSize: '20px' }}></ion-icon>
                                                    <span style={{ fontSize: '14px' }}>Total Timing</span>
                                                </div>
                                                <div className='text-dark fw-bold ml-1' style={{ fontWeight: '500' }}>5 Min</div>
                                            </div>
                                            {/* Item */}

                                            {/* ====================================================================== */}

                                            {/* Item */}
                                            <div className="col-6 d-flex flex-column justify-content-between align-items-end">
                                                <div className='d-flex justify-content-between align-items-center w-100'>
                                                    <ion-icon name="time" style={{ color: 'orange', fontSize: '20px' }}></ion-icon>
                                                    <span style={{ fontSize: '14px' }}>Total Questions</span>
                                                </div>
                                                <div className='text-dark fw-bold' style={{ fontWeight: '500' }}>{filteredCourse.id} Questions</div>
                                            </div>
                                            {/* Item */}

                                            {/* ====================================================================== */}

                                        </div>
                                    </div>
                                </div>


                                <div className="card shadow my-2">
                                    <div className="card-body m-0">
                                        <h3>Description</h3>
                                        <div dangerouslySetInnerHTML={{ __html: filteredCourse.program_desc }} />
                                    </div>
                                </div>
                            </>

                        </div>

                    </div>

                ) : (
                    <div style={{ width: '100%', height: 'calc(100vh - 112px)', display: 'grid', placeItems: 'center' }}>
                        <div className="spinner-border text-success" role="status">
                        </div>
                    </div>
                )}





        </>
    )
};

export default QuizDetail;
