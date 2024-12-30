import { Link } from "react-router-dom";
import HeroBanner from '../components/HeroBanner'
import CategoryComp from '../components/CategoryComp';
import RecommendCourse from '../components/RecommendCourse'
import TrendingCourse from "../components/TrendingCourse";

function Home() {

    return (



        <div className='bg-white' style={{padding: '0 0 80px 0'}}>

            <HeroBanner />
            <div className="section mt-4">
                <div className="section-heading">
                    <h2 className="title">Category</h2>
                    <Link style={{ textDecoration: 'none' }} to='/course' className="link">See all</Link>
                </div>
            </div>


            <CategoryComp />

            <div className="section mt-4">
                <div className="section-heading">
                    <h2 className="title">Recommended</h2>
                    <Link style={{ textDecoration: 'none' }} to='/recommended-course' className="link">See all</Link>
                </div>
            </div>


            <RecommendCourse />


            <div className="section mt-4">
                <div className="section-heading m-0">
                    <h2 className="title">Trending Courses</h2>
                    <Link style={{ textDecoration: 'none' }} to='/popular-course' className="link">See all</Link>
                </div>
            </div>

            <TrendingCourse />
        </div>
    );
}

export default Home;