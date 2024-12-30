import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import CardPopular from '../components/CardPopular'
import { CourseContext } from '../context/CourseContext'
import Header from '../components/Header'

const CategorizedCourse = () => {

    const { courseType } = useParams();
    // Courses Data
    const { courseCategory, courseData } = useContext(CourseContext);

    // Show specific courses of the selected category
    const selectedCategory = courseCategory.find((item) => item.ser_title === courseType)?.id;



    if (!selectedCategory) {
        return (
            <>
                <Header profile={true} title={`${courseType}`} showSearch={true} />
                <div className='pt-5 text-center'>
                    <div class="spinner-border text-success" role="status"></div>
                </div>
            </>
        )
    }

    console.log(courseData
        .filter((item) => Number(item.category) === Number(selectedCategory)));

    return (
        <>
            <Header profile={true} title={`${courseType}`} showSearch={true} />
            <div className='pb-5'>
                <div className='row px-2 pb-5'>

                    {courseData
                        .filter((item) => Number(item.category) === Number(selectedCategory)).length > 0 ?
                        (
                            courseData
                                .filter((item) => Number(item.category) === Number(selectedCategory))
                                .map((item) => (
                                    <div className="col-6 mt-2" key={item.id}>
                                        <Link to={`/course-detail/${item.id}`} className='card shadow text-decoration-none border'>
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
