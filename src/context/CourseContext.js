import React, { useEffect, createContext, useState } from 'react'
import axios from 'axios';
import { SITE_URL } from '../define/Define';

export const CourseContext = createContext();
const CourseProvider = ({ children }) => {


    const [courseCategory, setCourseCategory] = useState([]);
    const [courseData, setCourseData] = useState([]);
    const [videoData, setVideoData] = useState([]);
    const [bannerData, setBannerData] = useState([]);
    

    useEffect(() => {

        // Fetching Courses Data
        const fetchData = async () => {
            try {
                const courseResponse = await axios.get(`${SITE_URL}new/app/api/get_course.php`);
                setCourseData(courseResponse.data);

                const categoryResponse = await axios.get(`${SITE_URL}new/app/api/get_category.php`);
                setCourseCategory(categoryResponse.data);

                const videoResponse = await axios.get(`${SITE_URL}new/app/api/get_video.php`);
                setVideoData(videoResponse.data);

                const bannerResponse = await axios.get(`${SITE_URL}new/app/api/get_banner.php`);
                setBannerData(bannerResponse.data);

            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        };

        fetchData();

    }, []);



    const courseValue = {
        courseCategory,
        courseData,
        videoData,
        bannerData,
    };

    return (
        <CourseContext.Provider value={courseValue}>
            {children}
        </CourseContext.Provider>
    )
}

export default CourseProvider;
