import React, { useContext } from 'react'
import { CourseContext } from './context/CourseContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Header from './components/Header';
import Home from './Pages/Home'
import Course from './Pages/Course';
import RecommendCourse from './components/RecommendCourse';
import MyCourses from './Pages/MyCourses';
import CourseDetail from './Pages/CourseDetails';
import CategorizedCourse from './Pages/CategorizedCourse';
import VideoPlayer from './Pages/VideoPlayer';
import Error from './Pages/Error';

const App = () => {

  const courseValue = useContext(CourseContext);
  // console.log(courseValue);


  return (
    <div style={{ padding: '56px 0 0 0' }}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={
            <>
              <Header profile={true} title={'Home'} showSearch={true} />
              <Home />
            </>
          } />
          <Route path='/course' element={
            <>
              <Header profile={true} title={'Courses'} showSearch={true} />
              <Course />
            </>
          } />
          <Route path='/course_category/:courseType' element={
            <>
              <CategorizedCourse />
            </>
          } />
          <Route path='/course-detail/:courseId' element={
            <>
              <Header profile={true} title={'Course Detail'} showSearch={true} />
              <CourseDetail />
            </>
          } />
          <Route path='/video/:getVideoId' element={
            <>
              <VideoPlayer />
            </>
          } />
          <Route path='/recommended-course' element={
            <>
              <Header profile={true} title={'Recommended Courses'} showSearch={true} />
              <RecommendCourse />
            </>
          } />
          <Route path='/trending-course' element={
            <>
              <Header profile={true} title={'Trending Courses'} showSearch={true} />
              <RecommendCourse />
            </>
          } />
          <Route path='/my-courses' element={
            <>
              <Header profile={true} title={'My Courses'} showSearch={true} />
              <MyCourses />
            </>
          } />
          <Route path='*' element={
            <>
              <Header profile={true} title={'Error - 404'} showSearch={true} />
              <Error />
            </>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
