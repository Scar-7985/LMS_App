import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import he from 'he';
import { CourseContext } from '../context/CourseContext';

const CourseDetail = () => {

    const { courseData, videoData } = useContext(CourseContext);
    // console.log("courseData =>", videoData);

    const { courseId } = useParams();
    // Only show seleected course details
    const filteredCourse = courseData.filter((item) => item.id === Number(courseId));
    // console.log(filteredCourse.map((item) => item.id));    
    // console.log(videoData[0].category);

    const filteredVideo = videoData.filter((item) => item.category === filteredCourse[0].category)
    // console.log("filteredVideo =>", filteredVideo);

    const [logged, setLogged] = useState(false);
    const [isPurchased, setIsPurchased] = useState(false);
    const [showInfoType, setShowInfoType] = useState('About');

    // console.log(videoData);


    return (
        <>


            {filteredCourse.length > 0 ? (
                filteredCourse.map((item) => {
                    return (
                        <div key={item.id}>

                            <div className="section full bg-white">
                                <div className="subscribe bg-white shadow-lg" style={{ height: '50px' }}>
                                    <div className='text-center'
                                        style={{ fontWeight: '500', fontSize: '18px', display: 'grid', placeItems: 'center' }}>
                                        ₹ {item.of_price}
                                    </div>
                                    {logged ?
                                        (isPurchased ? (
                                            <button>
                                                <Link
                                                    to={`/video/${item.id}`}
                                                    style={{ color: 'white', textDecoration: 'none' }}>
                                                    Watch now
                                                </Link>
                                            </button>
                                        ) : (
                                            <button>Buy now</button>
                                        )
                                        ) : (
                                            <button>
                                                <Link to='/login' style={{ color: 'white', textDecoration: 'none' }}>Buy now</Link>
                                            </button>
                                        )}
                                </div>

                                {/* to={`/video/${item.id}`} */}

                                {/* ================ Main Content =================== */}
                                <div className="item">
                                    <div className="user-car bg-white">
                                        <img src="/assets/img/bg/student-online.jpg" alt="imaged" className="" style={{ width: '100%', height: '220px' }} />
                                    </div>
                                    <h1 className='mt-4 px-2'>{item.program_name}</h1>
                                    <div className='mt-1 px-2' style={{ fontWeight: '500', color: 'black' }}>
                                        <span className='text-secondary'>Category :</span> {item.category}</div>

                                </div>
                            </div>

                            <div className="section bg-white row px-2 pt-4">
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
                                                            <div className='text-dark fw-bold' style={{ fontWeight: '500' }}>36 Hours</div>
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
                                                            <div className='text-dark fw-bold' style={{ fontWeight: '500' }}>{item.update_on}</div>
                                                        </div>
                                                        {/* Item */}
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="card shadow my-2">
                                                <div className="card-body m-0">
                                                    <h3>Description</h3>
                                                    <div dangerouslySetInnerHTML={{ __html: he.decode(item.program_desc) }} />
                                                </div>
                                            </div>
                                        </>
                                        )
                                        : showInfoType === 'Video' ?
                                            (
                                                filteredVideo.map((item) => {
                                                    return (
                                                        <div className='border card' key={item.id}>
                                                            <div className="card-body">
                                                                {item.title}
                                                            </div>
                                                        </div>
                                                    )
                                                })

                                            ) : (
                                                <div className='row'>
                                                    <div className="col-12 mt-1">
                                                        <div className="card shadow">
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
                    );
                })
            ) : (
                <div style={{ width: '100%', height: 'calc(100vh - 112px)', display: 'grid', placeItems: 'center' }}>
                    <div class="spinner-border text-success" role="status">
                    </div>
                </div>
            )}





        </>
    )
};

export default CourseDetail;
