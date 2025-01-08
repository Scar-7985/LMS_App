import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { SITE_URL } from '../define/Define';

const NotificationDetails = () => {

    const [notification, setNotification] = useState([]);
    const { notificationId } = useParams();


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


    const filteredNotification = notification.find((item) => Number(item.id) === Number(notificationId));
 

    return (
        <div id="appCapsule" className="full-height pt-3">

            {
                filteredNotification ? (
                    <div className="section">
                        <div className="listed-detail">
                            <div className="icon-wrapper">
                                <div className="iconbox">
                                    <ion-icon name="mail"></ion-icon>
                                </div>
                            </div>
                            <h5 className="text-center mt-2">{filteredNotification.title}</h5>
                        </div>

                        {/* <div>Message <ion-icon name="arrow-down-outline"></ion-icon></div> */}
                        <div className=" border-top border-bottom py-3" style={{ height: 'auto', wordWrap: 'break-word' }}>

                            {filteredNotification.notification_desc}

                        </div>
                    </div>
                ) : (
                    <div className='text-center py-5'>
                        <div className="spinner-border text-success" role="status"></div>
                    </div>
                )
            }

        </div>
    )
}

export default NotificationDetails
