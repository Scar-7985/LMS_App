import { Link } from "react-router-dom";
import HeroBanner from '../components/HeroBanner'
import CategoryComp from '../components/CategoryComp';
import RecommendCourse from '../components/RecommendCourse'
import TrendingCourse from "../components/TrendingCourse";

const Home = () => {


    return (

        <div className='bg-white' style={{ padding: '0 0 80px 0', width: '100vw' }}>

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

            <div className="section my-4 border-bottom">
                <div className="section-heading">
                    <h2 className="title">Recommended</h2>
                    <Link style={{ textDecoration: 'none' }} to='/recommended-course' className="link">See all</Link>
                </div>
            </div>


            <div className="section">
                <RecommendCourse />
            </div>


            <div className="section mt-4 border-bottom">
                <div className="section-heading">
                    <h2 className="title">Trending Courses</h2>
                    <Link style={{ textDecoration: 'none' }} to='/trending-course' className="link">See all</Link>
                </div>
            </div>

            <TrendingCourse />
        </div>
    );
}

export default Home;