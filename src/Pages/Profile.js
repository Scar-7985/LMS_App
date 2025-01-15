import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

const Profile = () => {

    const navigate = useNavigate();


    const LogOut = () => {
        toast.success("Logged Out Successfully")
        setTimeout(() => {
            window.localStorage.removeItem("login_id");
            window.localStorage.removeItem("user_name");
            window.localStorage.removeItem("user_phone");
            window.localStorage.removeItem("user_email");
            navigate('/');
            window.location.reload();
        }, 2000);
    }


    return (
        <>

            <div id="appCapsule" className="pt-4">

                <div className="section mt-3 text-center">
                    <div className="avatar-section d-flex flex-column">
                        <div>
                            <img src="/assets/img/sample/avatar/avatar.png"
                                alt="avatar" className="" style={{ width: '50px', borderRadius: '50%' }} />
                        </div>
                        <div>
                            <p className='mt-2 mb-0' style={{ color: 'black', fontWeight: '500' }}>
                            {window.localStorage.getItem("user_name") === 'null' ? '' : window.localStorage.getItem("user_name")}</p>
                            <p className='m-0' style={{ fontSize: '12px' }}><span>+91 </span>
                                {window.localStorage.getItem('user_phone')}</p>
                        </div>
                    </div>
                </div>


                <ul className="listview image-listview text mt-5">

                    <li>
                        <Link style={{ textDecoration: 'none' }} to='/update-profile' className="item">
                            <div className="d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    className="bi bi-person-fill-gear" viewBox="0 0 16 16" style={{ marginRight: '10px' }}>
                                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                                </svg>
                                <div style={{ fontSize: '14px', fontWeight: '500' }}>Edit Profile</div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to='/notification' className="item">
                            <div className="d-flex align-items-center">
                                <ion-icon name="notifications" style={{ marginRight: '10px', fontSize: '19px' }}></ion-icon>
                                <div style={{ fontSize: '14px', fontWeight: '500' }}>Notification</div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to='/my-orders' className="item">
                            <div className="d-flex align-items-center">
                                <ion-icon name="cube" style={{ marginRight: '10px', fontSize: '19px' }}></ion-icon>
                                <div style={{ fontSize: '14px', fontWeight: '500' }}>My Orders</div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to='/legal-terms' className="item">
                            <div className="d-flex align-items-center">
                                <ion-icon name="newspaper" style={{ marginRight: '10px', fontSize: '19px' }}></ion-icon>
                                <div style={{ fontSize: '14px', fontWeight: '500' }}>Terms & Condition</div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to='/ask-doubts' className="item">
                            <div className="d-flex align-items-center">
                                <ion-icon name="help-circle" style={{ marginRight: '10px', fontSize: '20px' }}></ion-icon>
                                <div style={{ fontSize: '14px', fontWeight: '500' }}>Ask Doubts</div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to='/support' className="item">
                            <div className="d-flex align-items-center">
                                <ion-icon name="chatbox-ellipses" style={{ marginRight: '10px', fontSize: '19px' }}></ion-icon>
                                <div style={{ fontSize: '14px', fontWeight: '500' }}>Help & Support</div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <div className="item" data-toggle="modal" data-target="#DialogBasic" style={{ cursor: 'pointer' }}>
                            <div className="d-flex align-items-center">
                                <ion-icon name="log-out-outline" style={{ marginRight: '10px', fontSize: '20px', color: 'red' }}></ion-icon>
                                <div className='text-danger' style={{ fontSize: '14px', fontWeight: '500' }}>LogOut</div>
                            </div>
                        </div>
                    </li>

                </ul>



            </div>

            {/* ========================================= */}

            {/* Log Out Toast */}

            <div id="appCapsule">

                <div className="modal fade dialogbox" id="DialogBasic" data-backdrop="static" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title d-flex align-items-center">
                                    <span>
                                        Log Out
                                    </span>
                                    <ion-icon name="log-out-outline" style={{ marginRight: '10px', fontSize: '30px', color: 'red', marginLeft: '10px' }}></ion-icon>
                                </h5>
                            </div>
                            <div className="modal-body">
                                Are you sure ?
                            </div>
                            <div className="modal-footer">
                                <div className="btn-inline align-item-center">
                                    <div className="btn btn-text-secondary py-3"
                                        data-dismiss="modal"
                                        style={{ cursor: 'pointer', fontWeight: '500' }}>CLOSE</div>
                                    <div className="btn btn-text-primary py-3" data-dismiss="modal" style={{ cursor: 'pointer', fontWeight: '500' }}
                                        onClick={LogOut}>OK</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile
