import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Support = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email_id: window.localStorage.getItem('user_email'),
        phone_no: window.localStorage.getItem('user_phone'),
        name: (window.localStorage.getItem('user_name') === 'null' ? ("USER - "+window.localStorage.getItem('login_id')) : (window.localStorage.getItem('user_name'))),
        subject: '',
        message: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log('formData => ', formData);

        axios.post('https://wealthsaga.store/new/app/api/support.php', formData).then(response => {

            // console.log("response => ", response.data);

            // toast.error(response.data.msg);

            if (response.data.status === 100) {
                document.getElementById('openModal').click();
            } else if (response.data.status === 101) {
                toast.warning(response.data.msg);
            }

        }).catch(error => {
            console.log('error => ', error);

        })



    };

    return (
        <>
            <Header goBackTo={'/profile'} title={'Support'} showSearch={false} />
            <div
                className="section bg-white"
                style={{ overflow: 'hidden', height: 'calc(100vh - 440px)' }}
            >
                <img
                    className=""
                    src="/assets/img/bg/Mobile-login.jpg"
                    style={{ transform: 'scale(1.1)', width: '100%', height: '100%' }}
                    alt=""
                />
            </div>

            <div id="appCapsule" className="bg-white pt-0 pb-0">
                <div className="section full">
                    <div className="wide-block pt-2 pb-3" style={{ borderBottom: 'none' }}>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group boxed">
                                <div className="input-wrapper">
                                    <label className="label" htmlFor="help-type">Subject</label>
                                    <select
                                        name="subject"
                                        className="w-100 py-2 rounded"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="Blank">Select a subject</option>
                                        <option value="Course">Course</option>
                                        <option value="Order">Order</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group boxed">
                                <div className="input-wrapper">
                                    <label className="label" htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        className="form-control"
                                        placeholder="Your message here"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-group boxed mt-2 pb-3">
                                <div className="input-wrapper">
                                    <button className="btn btn-warning text-white w-100 update-btn" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* Display Success Message Directly */}
                        <>

                            <div className="section mt-2 d-none">
                                <div className="section-title">Iconed</div>
                                <div className="card">
                                    <ul className="listview flush transparent image-listview text">
                                        <li>
                                            <span className="item" data-bs-toggle="modal" data-bs-target="#DialogIconedSuccess" id='openModal'>
                                                <div className="in">
                                                    <div>Success</div>
                                                </div>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* ================================ */}

                            <div className="modal fade dialogbox" id="DialogIconedSuccess" data-bs-backdrop="static" tabIndex="-1"
                                role="dialog">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-icon text-success">
                                            <ion-icon name="checkmark-circle"></ion-icon>
                                        </div>
                                        {/* <div className="modal-header">
                                                <h5 className="modal-title">Success</h5>
                                            </div> */}
                                        <div className="modal-body mt-4">
                                            Thank you for reaching out to us! <br />
                                            We will respond to you shortly via email.
                                        </div>
                                        <div className="modal-footer">
                                            <div className="btn-inline">
                                                <span className="btn" data-bs-dismiss="modal"
                                                    onClick={() => {
                                                        setFormData({
                                                            category: '',
                                                            message: '',
                                                        }); navigate('/profile');
                                                    }}>CLOSE</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Support;
