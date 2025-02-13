import { Link } from "react-router-dom";
import HeroBanner from '../components/HeroBanner'
import CategoryComp from '../components/CategoryComp';
import RecommendCourse from '../components/RecommendCourse'
import TrendingCourse from "../components/TrendingCourse";
import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

const Home = () => {

    const { courseData } = useContext(CourseContext);

    return (

        <div className='bg-white' style={{ width: '100vw' }}>

            <HeroBanner />
            <div className="section my-4 border-bottom">
                <div className="section-heading">
                    <h2 className="title">Category</h2>
                    <Link style={{ textDecoration: 'none' }} to='/course' className="link">See all</Link>
                </div>
            </div>

            <div className="section">
                <CategoryComp />
            </div>

            <div className="section mt-5 border-bottom">
                <div className="section-heading">
                    <h2 className="title">Recommended</h2>
                    <Link style={{ textDecoration: 'none' }} to='/recommended-course' className="link">See all</Link>
                </div>
                <div className="mt-4">
                     
                    {/* <RecommendCourse /> */}
                </div>
            </div>




            <div className="section border-bottom">
                <div className="section-heading">
                    <h2 className="title">Trending Courses</h2>
                    <Link style={{ textDecoration: 'none' }} to='/trending-course' className="link">See all</Link>
                </div>
            </div>

            <div className="mt-4">
                <TrendingCourse />
            </div>

        </div>
    );
}

export default Home;