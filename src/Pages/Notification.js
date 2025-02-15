import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { SITE_URL } from "../define/Define";
import { not } from "ajv/dist/compile/codegen";


const Notification = () => {

    const [notification, setNotification] = useState([]);

    useEffect(() => {
        const fetchNotificaton = async () => {
            try {
                const response = await axios.get(`${SITE_URL}new/app/api/notification.php`);
                const data = response.data;
                setNotification(data);
            } catch (error) {

            }
        }

        fetchNotificaton();
    }, [])


    return (
        <>


            <div id="appCapsule p-0">

                <div className="section full">

                    <ul className="listview image-listview flush" style={{ paddingBottom: '60px' }}>

                        {
                            notification.length > 0 ? (

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
                                }

                                )
                            ) : (
                                <div className='text-center py-5'>
                                    <div className="spinner-border text-success" role="status"></div>
                                </div>
                            )

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


                    </ul>

                </div>

            </div>

        </>
    )
}

export default Notification;