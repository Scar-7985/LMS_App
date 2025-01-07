import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const Pathname = useMemo(() => location.pathname, [location.pathname]);

    // Define menu items dynamically
    const menuItems = [
        { path: '/', icon: 'home', label: 'Home' },
        { path: '/course', icon: 'play', label: 'Courses' },
        { path: '/quiz-category', icon: 'speedometer', label: 'Quiz' },
        { path: '/my-courses', icon: 'book', label: 'My Courses' },
        { path: '/profile', icon: 'person', label: 'Profile' },
    ];

    return (
        <div className="appBottomMenu">
            {menuItems.map((item) => (
                <Link
                    key={item.path}
                    to={item.path}
                    className={`item ${Pathname === item.path ? 'active' : ''}`}
                    aria-label={item.label}
                    style={{ textDecoration: 'none' }}
                >
                    <div className="col">
                        <ion-icon name={`${Pathname === item.path ? item.icon : (item.icon + '-outline') }`}></ion-icon>
                        <strong>{item.label}</strong>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Footer;
