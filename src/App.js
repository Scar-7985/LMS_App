import React, { useContext, useState } from 'react'
import { CourseContext } from './context/CourseContext';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
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
import UpdateProfile from './Pages/UpdateProfile'
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Notification from './Pages/Notification';
import MyOrders from './Pages/MyOrders';
import LegalTerms from './Pages/LegalTerms';
import Support from './Pages/Support';
import NonProtectedRoute from './components/NonProtectedRoute';
import { ToastContainer } from 'react-toastify';
import NotificationDetails from './Pages/NotificationDetails';
import Checkout from './Pages/Checkout';
import Quiz from './Pages/Quiz';

const App = () => {

  const courseValue = useContext(CourseContext);
  // console.log(courseValue);

  return (
    <div style={{ padding: '56px 0 0 0', width: '100vw' }}>
      <ScrollToTop />
      <ToastContainer
        // className='text-center'
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      <Routes>

        {/* ================== Non-Protected Routes Starts ================== */}

        <Route element={<NonProtectedRoute />}>

          <Route path='/login' element={
            <>
              <Header profile={true} title={'Login'} showSearch={true} />
              <Login />
            </>
          } />
        </Route>

        <Route path='/' element={
          <>
            <Header profile={true} title={'Home'} showSearch={true} />
            <Home />
          </>
        } />
        <Route path='/course' element={
          <>
            <Header profile={true} title={'Categories'} showSearch={true} />
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
            <Header goBackTo={'/course'} title={'Course Detail'} showSearch={false} />
            <CourseDetail />
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

        {/* ================== Non-Protected Routes End ================== */}

        {/* ================= Protected Routes Starts ================= */}

        <Route element={<ProtectedRoutes />}>
          <Route path='/checkout/:checkoutId' element={
            <>
              <Header profile={true} title={'Checkout'} showSearch={false} />
              <Checkout />
            </>
          } />
          <Route path='/video/:getVideoId' element={
            <>
              <VideoPlayer />
            </>
          } />
          <Route path='/quiz' element={
            <>
              <Quiz />
            </>
          } />
          <Route path='/my-courses' element={
            <>
              <Header profile={true} title={'My Courses'} showSearch={true} />
              <MyCourses />
            </>
          } />
          <Route path='/profile' element={
            <>
              <Header profile={true} title={'Profile'} showSearch={false} />
              <Profile />
            </>
          } />
          <Route path='/update-profile' element={
            <>
              <Header goBackTo={'/profile'} title={'Update Profile'} showSearch={false} />
              <UpdateProfile />
            </>
          } />
          <Route path='/notification' element={
            <>
              <Header goBackTo={'/profile'} title={'Notification'} showSearch={false} />
              <Notification />
            </>
          } />
          <Route path='/notification-detail/:notificationId' element={
            <>
              <Header goBackTo={'/notification'} title={'Notification Details'} showSearch={false} />
              <NotificationDetails />
            </>
          } />
          <Route path='/my-orders' element={
            <>
              <Header goBackTo={'/profile'} title={'My Orders'} showSearch={false} />
              <MyOrders />
            </>
          } />
          <Route path='/legal-terms' element={
            <>
              <Header goBackTo={'/profile'} title={'Terms & Conditions'} showSearch={false} />
              <LegalTerms />
            </>
          } />
          <Route path='/support' element={
            <>
              <Header goBackTo={'/profile'} title={'Support'} showSearch={false} />
              <Support />
            </>
          } />
        </Route>

        {/* ============= On undefined page go to Home Page ============= */}
        <Route path='*' element={
          <>
            <Header profile={true} title={'Home'} showSearch={true} />
            <Home />
          </>
        } />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
