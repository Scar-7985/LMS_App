import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CourseContext } from "../context/CourseContext";

const NotificationDetails = () => {

    const { notification } = useContext(CourseContext);
    const { notificationId } = useParams();

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
                        <div class="spinner-border text-success" role="status"></div>
                    </div>
                )
            }

        </div>
    )
}

export default NotificationDetails
