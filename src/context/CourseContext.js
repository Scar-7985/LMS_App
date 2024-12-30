import React, { useEffect, createContext, useState } from 'react'
import axios from 'axios';

export const CourseContext = createContext();
const CourseProvider = ({ children }) => {

    const [courseCategory, setCourseCategory] = useState([]);
    const [courseData, setCourseData] = useState([]);
    const [videoData, setVideoData] = useState([]);

    // console.log(courseData);
    

    useEffect(() => {
        // console.log("Component mounted");
    
        const fetchData = async () => {
            try {
                const courseResponse = await axios.get('https://wealthsaga.store/new/app/api/get_course.php');
                setCourseData(courseResponse.data);
    
                const categoryResponse = await axios.get('https://wealthsaga.store/new/app/api/get_category.php');
                setCourseCategory(categoryResponse.data);
    
                const videoResponse = await axios.get('https://wealthsaga.store/new/app/api/get_video.php');
                setVideoData(videoResponse.data);
    
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        };
    
        fetchData();
    }, []);
    
    

    const courseValue = {
        courseCategory,
        courseData,
        videoData
    };

    return (
        <CourseContext.Provider value={courseValue}>
            {children}
        </CourseContext.Provider>
    )
}

export default CourseProvider;
