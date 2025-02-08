import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../define/Define";
import Search from "./Search";
import axios from "axios";
import { SITE_URL } from "../define/Define";

const Header = ({ title, profile = false, showSearch = false, rightSec, goback = true, goBackTo }) => {

    const navigate = useNavigate();
    const [profilePic, setProfilePic] = useState(null);
    // Open Search Bar
    const [isOpenActionSheet, setIsOpenActionSheet] = useState(false);

    const handleGoBack = () => {
        navigate(-1); // Navigate to the previous page
    };


    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axios.post(`${SITE_URL}new/app/api/get_profile.php`, {
                    login_id: window.localStorage.getItem("login_id"),
                });
                const data = response.data;

                setProfilePic(data.profile_pic);
            } catch (error) {
                console.error("Error fetching details:", error);
            }
        };

        fetchDetails();
    }, []);


    return (
        <>

            <Search show={isOpenActionSheet} onClose={() => setIsOpenActionSheet(false)} />

            {/* <Sidebar /> */}


            <div className="topHeader">


                {profile ? (
                    <Link to='/' className="headerButton">
                        {
                            isAuthenticated
                                ? <img src={`${SITE_URL}new/app/upload/profile_pic/${profilePic}`} className="imaged rounded w32" alt="" />
                                : <img src={'/assets/img/sample/avatar/avatar.png'} className="imaged rounded w32" alt="" />
                        }
                    </Link>
                ) : (
                    <> {
                        goback ?
                            (
                                <Link
                                    onClick={handleGoBack}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                                    </svg>
                                </Link>
                            ) : (
                                <div
                                    style={{ cursor: 'pointer' }}
                                    onClick={goBackTo}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                                    </svg>
                                </div>
                            )
                    }

                    </>
                )}


                <div className="pageTitle" >
                    <div className="text-dark" style={{ fontSize: '16px' }}>
                        {title}
                    </div>
                </div>


                {
                    showSearch ? (
                        <div className="d-flex align-items-center"
                            onClick={() => setIsOpenActionSheet(!isOpenActionSheet)}
                            style={{ cursor: 'pointer' }}>
                            <ion-icon name="search" style={{ fontSize: '24px' }}></ion-icon>
                        </div>
                    ) : (
                        <div className="" style={{ display: 'grid', placeItems: 'center' }}>{rightSec}</div>
                    )
                }



            </div>

        </>
    )
}
export default Header;