import React, { useEffect, createContext, useState } from 'react'
import axios from 'axios';
import { SITE_URL } from '../define/Define';

export const CourseContext = createContext();
const CourseProvider = ({ children }) => {

    const [bannerData, setBannerData] = useState([]);
    const [courseData, setCourseData] = useState([]);
    const [courseCategory, setCourseCategory] = useState([]);
    const [videoData, setVideoData] = useState([]);
    const [notification, setNotification] = useState([]);
    const [termCondition, setTermsCondition] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const [bannerRes, courseRes, categoryRes, videoRes, notificationRes, termsRes] = await axios.all([
                    axios.get(`${SITE_URL}new/app/api/get_banner.php`),
                    axios.get(`${SITE_URL}new/app/api/get_course.php`),
                    axios.get(`${SITE_URL}new/app/api/get_category.php`),
                    axios.get(`${SITE_URL}new/app/api/get_video.php`),
                    axios.get(`${SITE_URL}new/app/api/notification.php`),
                    axios.get(`${SITE_URL}new/app/api/terms-and-conditions.php`),
                ]);

                setBannerData(bannerRes.data);
                setCourseData(courseRes.data);
                setCourseCategory(categoryRes.data);
                setVideoData(videoRes.data);
                setNotification(notificationRes.data);
                setTermsCondition(termsRes.data);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);




    const courseValue = {
        courseCategory,
        courseData,
        videoData,
        bannerData,
        notification,
        termCondition,
    };

    return (
        <CourseContext.Provider value={courseValue}>
            {children}
        </CourseContext.Provider>
    )
}

export default CourseProvider;
