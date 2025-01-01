import { Link } from "react-router-dom";


function Notification() {

    
    return (
        <>


            <div id="appCapsule p-0">

                <div className="section full">

                    <ul className="listview image-listview flush">

                        <li className="active">
                            <Link style={{ textDecoration: 'none' }} to='#' className="item">
                                <div className="icon-box bg-primary">
                                    <ion-icon name="arrow-down-outline"></ion-icon>
                                </div>
                                <div className="in">
                                    <div>
                                        <div className="mb-05"><strong>Payment Received</strong></div>
                                        <div className="text-small mb-05">John sent you <b>$ 50</b></div>
                                        <div className="text-xsmall">5/3/2020 10:30 AM</div>
                                    </div>
                                    <span className="badge badge-success badge-empty"></span>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link style={{ textDecoration: 'none' }} to='#' className="item">
                                <div className="icon-box bg-danger">
                                    <ion-icon name="key-outline"></ion-icon>
                                </div>
                                <div className="in">
                                    <div>
                                        <div className="mb-05"><strong>Password changed</strong></div>
                                        <div className="text-small mb-05">Your password has been changed</div>
                                        <div className="text-xsmall">5/3/2020 10:30 AM</div>
                                    </div>
                                    <span className="badge badge-success">3</span>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link style={{ textDecoration: 'none' }} to='#' className="item">
                                <div className="icon-box bg-danger">
                                    <ion-icon name="key-outline"></ion-icon>
                                </div>
                                <div className="in">
                                    <div>
                                        <div className="mb-05"><strong>Password changed</strong></div>
                                        <div className="text-small mb-05">Your password has been changed</div>
                                        <div className="text-xsmall">5/3/2020 10:30 AM</div>
                                    </div>
                                </div>
                            </Link>
                        </li>


                    </ul>

                </div>

            </div>

        </>
    )
}

export default Notification;