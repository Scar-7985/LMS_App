import { useContext } from "react";
import { Link } from "react-router-dom";
import { CourseContext } from "../context/CourseContext";


const Notification = () => {

    const { notification } = useContext(CourseContext);

    return (
        <>


            <div id="appCapsule p-0">

                <div className="section full">

                    <ul className="listview image-listview flush" style={{ paddingBottom: '60px' }}>

                        {
                            notification.map((item) => {
                                return (
                                    <li className="item" key={item.id}>
                                        <Link
                                            to={`/notification-detail/${item.id}`}
                                            style={{ textDecoration: 'none' }} className="item">
                                            <div className="icon-box bg-primary">
                                                <ion-icon name="mail-outline"></ion-icon>
                                            </div>
                                            <div className="in">
                                                <div>
                                                    <div className="mb-05"><strong>{item.title}</strong></div>
                                                    <div className="text-small mb-05">{item.notification_desc.length > 30 ? item.notification_desc.substring(0, 30) + ('...') : item.notification_desc}</div>
                                                    <div className="text-xsmall">{item.created_on}</div>
                                                </div>
                                                <span className="badge badge-success badge-empty"></span>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }

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