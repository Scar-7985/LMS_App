import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CourseContext } from '../context/CourseContext'
import Header from '../components/Header'
import axios from 'axios'
import { SITE_URL } from '../define/Define'

const QuizType = () => {

    const { quizType } = useParams();
    // Courses Data
    const { courseData } = useContext(CourseContext);

    const [courseCategory, setCourseCategory] = useState([])

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`${SITE_URL}new/app/api/get_category.php`);
                const data = response.data;
                setCourseCategory(data);
            } catch (error) {

            }
        }

        fetchCategory();
    }, [])

    // Show specific courses of the selected category
    const selectedCategory = courseCategory.find((item) => item.ser_title === quizType)?.id;



    if (!selectedCategory) {
        return (
            <>
                <Header goBackTo={'/quiz-category'} title={`${quizType}`} showSearch={true} />
                <div className='pt-5 text-center'>
                    <div className="spinner-border text-success" role="status"></div>
                </div>
            </>
        )
    }

    // console.log(courseData.filter((item) => Number(item.category) === Number(selectedCategory)));

    return (
        <>
            <Header goBackTo={'/quiz-category'} title={`${quizType}`} showSearch={true} />
            <div className='pb-5'>
                <div className='row px-2 pb-5'>

                    {courseData
                        .filter((item) => Number(item.category) === Number(selectedCategory)).length > 0 ?
                        (
                            courseData
                                .filter((item) => Number(item.category) === Number(selectedCategory))
                                .map((item) => (
                                    <div className="col-6 mt-2" key={item.id}>
                                        <Link to={`/quiz_details/${item.program_name}`} className='card shadow text-decoration-none border'>
                                            {/* ========================== */}

                                            <div className="ard-body d-flex flex-column shadow">
                                                <img src={`${SITE_URL}new/app/upload/course_img/${item.img}`} alt="img" className="image-block w-100" style={{ height: '120px', borderRadius: '7px 7px 0 0' }} />
                                                <div className='mt-1 p-2'>
                                                    <h4 className='text-secondary' style={{ fontSize: '16px', wordWrap: 'break-word', height: '40px' }}>{item.program_name.length > 20 ? item.program_name.substring(0, 20) + "..." : item.program_name}
                                                    </h4>
                                                    <h5 className='p-0 text-secondary' style={{ fontSize: '12px' }}>Questions : {item.category}</h5>
                                                    
                                                </div>
                                            </div>

                                            {/* ========================== */}
                                        </Link>
                                    </div>
                                ))
                        ) : (
                            <div className='text-center pt-5' style={{ fontWeight: '500' }}>No course available here.</div>
                        )}
                </div>
            </div>
        </>
    )
}

export default QuizType
