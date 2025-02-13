import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { SITE_URL, isAuthenticated } from './Define';

const UserStatus = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const toastShownRef = useRef(false);

    useEffect(() => {
        if (isAuthenticated) {
            axios.post(`${SITE_URL}new/app/api/user_status.php`, { login_id: isAuthenticated })
                .then(response => {
                    if (response.data.status === 102 && !toastShownRef.current) {
                        toast.error(response.data.msg);
                        toastShownRef.current = true;
                        setTimeout(() => {
                            window.localStorage.clear();
                            navigate('/');
                            window.location.reload();
                        }, 1000);
                    }
                })
                .catch(error => {
                    console.error('Error fetching user status:', error);
                });
        }

        if (isAuthenticated && window.localStorage.getItem("user_name") === "null") {
            navigate('/update-profile');
        }
    }, [isAuthenticated, navigate, location.pathname]);

    return null;
};

export default UserStatus;
