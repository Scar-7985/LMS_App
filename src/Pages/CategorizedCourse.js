import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import CardPopular from '../components/CardPopular'
import { CourseContext } from '../context/CourseContext'
import Header from '../components/Header'
import axios from 'axios'
import { SITE_URL } from '../define/Define'

const CategorizedCourse = () => {

    const { courseType } = useParams();
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
    const selectedCategory = courseCategory.find((item) => item.ser_title === courseType)?.id;



    if (!selectedCategory) {
        return (
            <>
                <Header goBackTo={'/course'} title={`${courseType}`} showSearch={true} />
                <div className='pt-5 text-center'>
                    <div class="spinner-border text-success" role="status"></div>
                </div>
            </>
        )
    }

    // console.log(courseData.filter((item) => Number(item.category) === Number(selectedCategory)));

    return (
        <>
            <Header goBackTo={'/course'} title={`${courseType}`} showSearch={true} />
            <div className='pb-5'>
                <div className='row px-2 pb-5'>

                    {courseData
                        .filter((item) => Number(item.category) === Number(selectedCategory)).length > 0 ?
                        (
                            courseData
                                .filter((item) => Number(item.category) === Number(selectedCategory))
                                .map((item) => (
                                    <div className="col-6 mt-2" key={item.id}>
                                        <Link to={`/course-detail/${item.program_name}`} className='card shadow text-decoration-none border'>
                                            <CardPopular
                                                title={item.program_name}
                                                image={`https://wealthsaga.store/new/app/upload/course_img/${item.img}`}
                                                of_price={item.of_price}
                                                ac_price={item.ac_price}
                                                category={item.category}
                                            />
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

export default CategorizedCourse
