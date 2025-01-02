import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {

    const location = useLocation();
    const Pathname = location.pathname;


    return (
        <>
            <div className="appBottomMenu">
                <Link style={{ textDecoration: 'none' }} to="/" className={`item ${Pathname === '/' ? 'active' : ''}`}>
                    <div className="col">
                        <ion-icon name="home"></ion-icon>
                        <strong>Home</strong>
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/course' className={`item ${Pathname === '/course' ? 'active' : ''}`}>
                    <div className="col">
                        <ion-icon name="play"></ion-icon>
                        <strong>Courses</strong>
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/my-courses'} className={`item ${Pathname === '/my-courses' ? 'active' : ''}`}>
                    <div className="col">
                        <ion-icon name="book"></ion-icon>
                        <strong>My Courses</strong>
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/profile'} className={`item ${Pathname === '/profile' ? 'active' : ''}`}>
                    <div className="col">
                        <ion-icon name="person"></ion-icon>
                        <strong>Profile</strong>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Footer
