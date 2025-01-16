import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../define/Define";
import Search from "./Search";

const Header = ({ title, profile = false, showSearch = false, rightSec, goback = false, goBackTo }) => {

    const navigate = useNavigate();

    // Open Search Bar
    const [isOpenActionSheet, setIsOpenActionSheet] = useState(false);

    const handleGoBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <>

            <Search show={isOpenActionSheet} onClose={() => setIsOpenActionSheet(false)} />

            {/* <Sidebar /> */}


            <div className="topHeader">


                {profile ? (
                    <Link to='/' className="headerButton">
                        <img src={isAuthenticated ? "/assets/img/sample/avatar/avatar.png" : "/assets/img/sample/avatar/avatar.png"} alt="image" className="imaged rounded w32" />
                    </Link>
                ) : (
                    <> {
                        goback ?
                            (
                                <div
                                    style={{ cursor: 'pointer' }}
                                    onClick={goBackTo}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                                    </svg>
                                </div>
                            ) : (
                                <Link
                                    onClick={handleGoBack}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                                    </svg>
                                </Link>
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