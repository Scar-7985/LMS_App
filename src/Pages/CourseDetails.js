import { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { CourseContext } from '../context/CourseContext';
import VideoCard from '../components/VideoCard';
import { isAuthenticated } from '../define/Define'
import { SITE_URL } from '../define/Define';

const CourseDetail = () => {

    const { courseData, videoData } = useContext(CourseContext);
    const { courseId } = useParams();

    // Show specific course details
    const filteredCourse = courseData.find((item) => String(item.program_name) === String(courseId));
    // console.log('filteredCourse => ', filteredCourse);


    if (!filteredCourse) {
        // console.error('Course not found');
    }

    const filteredVideo = filteredCourse ? videoData.filter((item) => String(item.category) === String(filteredCourse.id)) : [];

    const [goToVideo, setGoToVideo] = useState('#');

    useEffect(() => {
        if (filteredCourse && filteredVideo.length > 0) {
            setGoToVideo(String(filteredVideo[0].id));
        } else {
            console.error('Video not found or course is unavailable');
        }
    }, [filteredCourse, filteredVideo]);

    const [showInfoType, setShowInfoType] = useState('About');

    const navigate = useNavigate();
    const goToPDF = (invidP) => {
        navigate("/course_pdf",
            // { state: { invid: invidP } }
        );
    }

    return (
        <>


            {
                filteredCourse ? (
                    <div key={filteredCourse.id} style={{ width: '100vw' }}>

                        <div className="section full bg-white">


                            <div className="subscribe bg-white shadow-lg w-100" style={{ height: '50px' }}>
                                <div className='text-center w-50'
                                    style={{ fontWeight: '500', fontSize: '18px', display: 'grid', placeItems: 'center' }}>
                                    ₹ {filteredCourse.of_price}
                                </div>
                                {isAuthenticated ?
                                    // If (status === 1) Purchased else not Purchased
                                    (filteredCourse.status === 1 ? (
                                        <Link
                                            className='w-50'
                                            to={`/video/${goToVideo}`}
                                            style={{ backgroundColor: 'orangered', color: 'white', textDecoration: 'none', display: 'grid', placeItems: 'center' }}>
                                            Watch now
                                        </Link>
                                    ) : (

                                        <Link
                                            className='w-50'
                                            to={`/checkout/${filteredCourse.id}`}
                                            style={{ backgroundColor: 'orangered', color: 'white', textDecoration: 'none', display: 'grid', placeItems: 'center' }}>
                                            Buy now
                                        </Link>
                                    )
                                    ) : (
                                        <Link
                                            className='w-50'
                                            to={'/login'}
                                            style={{ backgroundColor: 'orangered', color: 'white', textDecoration: 'none', display: 'grid', placeItems: 'center' }}>
                                            Buy now
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
                                    <span className='text-secondary'>Category :</span> {filteredCourse.id}</div>

                            </div>
                        </div>

                        <div className="section bg-white row px-2 pt-4 w-100">
                            <div
                                className={`col-4 text-center ${showInfoType === 'About' ? 'description' : ''}`}
                                onClick={() => setShowInfoType('About')}
                                style={{ cursor: 'pointer' }}
                            >
                                About
                            </div>
                            <div
                                className={`col-4 text-center ${showInfoType === 'Video' ? 'description' : ''}`}
                                onClick={() => setShowInfoType('Video')}
                                style={{ cursor: 'pointer' }}
                            >
                                Video
                            </div>
                            <div
                                className={`col-4 text-center ${showInfoType === 'PDF' ? 'description' : ''}`}
                                onClick={() => setShowInfoType('PDF')}
                                style={{ cursor: 'pointer' }}
                            >
                                PDF
                            </div>
                        </div>

                        {/* Description Filter */}

                        <div className="section bg-white pt-2 mb-5" style={{ paddingBottom: '80px' }}>


                            {
                                showInfoType === 'About' ?
                                    (<>
                                        <div className="card shadow py-2">
                                            <div className="card-body">
                                                <h2 className='mb-4 text-center' style={{ fontWeight: '600' }}>Course Details</h2>
                                                <div className="row">
                                                    {/* Item */}
                                                    <div className="col-6 d-flex flex-column justify-content-between align-items-end">
                                                        <div className='d-flex justify-content-between align-items-center w-100'>
                                                            <ion-icon name="time" style={{ color: 'orange', fontSize: '20px' }}></ion-icon>
                                                            <span style={{ fontSize: '14px' }}>Total Timing</span>
                                                        </div>
                                                        <div className='text-dark fw-bold' style={{ fontWeight: '500' }}>{filteredCourse.program_duration} Hours</div>
                                                    </div>
                                                    {/* Item */}

                                                    {/* ====================================================================== */}

                                                    {/* Item */}
                                                    <div className="col-6 d-flex flex-column justify-content-between align-items-end">
                                                        <div className='d-flex justify-content-between align-items-center w-100'>
                                                            <ion-icon name="time" style={{ color: 'orange', fontSize: '20px' }}></ion-icon>
                                                            <span style={{ fontSize: '14px' }}>Total Videos</span>
                                                        </div>
                                                        <div className='text-dark fw-bold' style={{ fontWeight: '500' }}>35 Videos</div>
                                                    </div>
                                                    {/* Item */}

                                                    {/* ====================================================================== */}

                                                    {/* Item */}
                                                    <div className="col-6 d-flex flex-column justify-content-between align-items-end mt-3">
                                                        <div className='d-flex justify-content-between align-items-center w-100'>
                                                            <ion-icon name="shield" style={{ color: 'orange', fontSize: '20px' }}></ion-icon>
                                                            <span style={{ fontSize: '14px' }}>Accessibility</span>
                                                        </div>
                                                        <div className='text-dark fw-bold' style={{ fontWeight: '500' }}>Lifetime</div>
                                                    </div>
                                                    {/* Item */}

                                                    {/* ====================================================================== */}

                                                    {/* Item */}
                                                    <div className="col-6 d-flex flex-column justify-content-between align-items-end mt-3">
                                                        <div className='d-flex justify-content-between align-items-center w-100'>
                                                            <ion-icon name="bag-handle" style={{ color: 'orange', fontSize: '20px' }}></ion-icon>
                                                            <span style={{ fontSize: '14px' }}>Last Uploaded</span>
                                                        </div>
                                                        <div className='text-dark fw-bold' style={{ fontWeight: '500' }}>{filteredCourse.update_on}</div>
                                                    </div>
                                                    {/* Item */}
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
                                    )
                                    : showInfoType === 'Video' ?
                                        (
                                            <div className="card-body pt-0">

                                                {
                                                    filteredVideo.length > 0 ? (
                                                        filteredVideo.map((item, index) => {
                                                            return (
                                                                <div
                                                                    key={index}
                                                                    className="card mt-2 shadow text-decoration-none border"
                                                                >
                                                                    <VideoCard
                                                                        title={item.title}
                                                                        image={`${SITE_URL}new/app/upload/video_thumb/${item.thumb}`}
                                                                        category={item.category}
                                                                    />
                                                                </div>
                                                            )

                                                        })
                                                    ) : (
                                                        <div className='text-center pt-4'>
                                                            No video available .
                                                        </div>
                                                    )
                                                }
                                            </div>


                                        ) : (
                                            <div className='row'>
                                                <div className="col-12 mt-1">
                                                    <div className="card shadow"
                                                        onClick={goToPDF}
                                                        style={{ cursor: 'pointer' }}>
                                                        <div className="card-body d-flex align-items-center">
                                                            <img src="/assets/img/pdf_icon.png" style={{ width: '50px' }} alt="" />
                                                            <div className='px-2'>
                                                                <div style={{ fontWeight: '500' }}>
                                                                    PDF: Web Development
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                            }
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

export default CourseDetail;
