import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProtectedRoutes from './components/ProtectedRoutes';
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Header from './components/Header';
import Home from './Pages/Home'
import RecommendCourse from './components/RecommendCourse';
import MyCourses from './Pages/MyCourses';
import CourseDetail from './Pages/CourseDetails';
import VideoPlayer from './Pages/VideoPlayer';
import UpdateProfile from './Pages/UpdateProfile'
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Notification from './Pages/Notification';
import MyOrders from './Pages/MyOrders';
import LegalTerms from './Pages/LegalTerms';
import Support from './Pages/Support';
import NonProtectedRoute from './components/NonProtectedRoute';
import NotificationDetails from './Pages/NotificationDetails';
import Checkout from './Pages/Checkout';
import Quiz from './Pages/Quiz';
import InvoiceView from './Pages/InvoiceView';
import QuizCategory from './Pages/QuizCategory';
import TrendingCourse from './components/TrendingCourse';
import CoursePDF from './Pages/CoursePDF';
import CourseCategories from './Pages/CourseCategories';
import CourseType from './Pages/CourseType';
import QuizType from './Pages/QuizType';
import QuizDetails from './Pages/QuizDetails'
import Doubts from './Pages/Doubts';
import UserStatus from './define/UserStatus';

const App = () => {

  const location = useLocation();

  return (
    <div style={{ padding: '56px 0 0 0', width: '100vw' }}>
      <ScrollToTop />
      <ToastContainer position="top-right" autoClose={1500} hideProgressBar={false} newestOnTop={true} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover={false} theme="colored" />


      {/* If user is banned by admin  */}
      <UserStatus />
      {/* If user is banned by admin  */}

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
            <CourseCategories />
          </>
        } />
        <Route path='/course_type/:courseType' element={
          <>
            <CourseType />
          </>
        } />
        <Route path='/course-detail/:courseId' element={
          <>
            <Header title={'Course Detail'} showSearch={false} />
            <CourseDetail />
          </>
        } />

        <Route path='/recommended-course' element={
          <>
            <Header profile={false} title={'Recommended Courses'} showSearch={true} />
            <RecommendCourse />
          </>
        } />
        <Route path='/trending-course' element={
          <>
            <Header profile={false} title={'Trending Courses'} showSearch={true} />
            <TrendingCourse />
          </>
        } />

        {/* ================== Non-Protected Routes End ================== */}

        {/* ================= Protected Routes Starts ================= */}

        <Route element={<ProtectedRoutes />}>
          <Route path='/invoice-view' element={
            <>
              <InvoiceView />
            </>
          } />
          <Route path='/checkout/:checkoutId' element={
            <>
              <Header profile={false} title={'Checkout'} showSearch={false} />
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
          <Route path='/quiz_details/:quizId' element={
            <>
              <Header profile={false} title={'Quiz Details'} showSearch={false} />
              <QuizDetails />
            </>
          } />
          <Route path='/quiz_type/:quizType' element={
            <>
              <QuizType />
            </>
          } />
          <Route path='/quiz-category' element={
            <>
              <Header profile={true} title={'Quiz Category'} showSearch={false} />
              <QuizCategory />
            </>
          } />
          <Route path='/course_pdf' element={
            <>
              <CoursePDF />
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
              <UpdateProfile />
            </>
          } />
          <Route path='/notification' element={
            <>
              <Header title={'Notification'} showSearch={false} />
              <Notification />
            </>
          } />
          <Route path='/notification-detail/:notificationId' element={
            <>
              <Header title={'Notification Details'} showSearch={false} />
              <NotificationDetails />
            </>
          } />
          <Route path='/my-orders' element={
            <>
              <Header title={'My Orders'} showSearch={false} />
              <MyOrders />
            </>
          } />
          <Route path='/legal-terms' element={
            <>
              <Header title={'Terms & Conditions'} showSearch={false} />
              <LegalTerms />
            </>
          } />
          <Route path='/ask-doubts' element={
            <>
              <Doubts />
            </>
          } />
          <Route path='/support' element={
            <>
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
      {
        location.pathname !== '/quiz' && <Footer />
      }

    </div>
  )
}

export default App
