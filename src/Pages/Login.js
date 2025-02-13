import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SITE_URL } from '../define/Define';
import { toast } from 'react-toastify';

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ phone_no: '' });
    const [otpSent, setOtpSent] = useState(false);
    const [ShowResend, setShowResend] = useState(false);
    const [ReadOnly, setReadOnly] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const otpTimerRef = useRef(null);  // Add useRef hook

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        // console.log(formData);

        e.preventDefault();
        setIsSubmitting(true);
        axios.post(`${SITE_URL}new/app/inc/config/login-query2.php`, formData, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {

                if (response.data.status === 101) {
                    toast.error(response.data.msg);
                    setIsSubmitting(false);
                }
                else if (response.data.status === 102) {
                    document.querySelector("#otpBtn").disabled = true;
                    toast.success(response.data.msg)
                    setOtpSent(true);
                    setReadOnly(true)
                    setIsSubmitting(false);
                    let timer = 30;
                    const timerFunc = setInterval(() => {
                        if (timer > 0) {
                            if (otpTimerRef.current) {  // Safely update the timer using ref
                                otpTimerRef.current.innerHTML = `Resend OTP in: ${timer -= 1}`;
                            }
                        } else {
                            clearInterval(timerFunc);
                            if (otpTimerRef.current) {  // Safely clear the timer
                                otpTimerRef.current.innerHTML = '';
                            }
                            setShowResend(true);
                        }
                    }, 1000);

                }
                else if (response.data.status === 100) {
                    toast.success(response.data.msg)
                    // console.log("response => ", response);

                    setTimeout(() => {
                        if (otpTimerRef.current) {  // Safely clear the timer when login is successful
                            otpTimerRef.current.innerHTML = '';
                        }
                        setIsSubmitting(false);
                        const login_id = response.data.login;
                        const user_name = response.data.name;
                        const user_phone = response.data.phone;
                        const user_email = response.data.email;
                        window.localStorage.setItem('login_id', login_id);
                        window.localStorage.setItem('user_name', user_name);
                        window.localStorage.setItem('user_phone', user_phone);
                        window.localStorage.setItem('user_email', user_email);
                        // ============================================== //

                        window.location.reload();
                    }, 1000);

                }

            })
            .catch(error => {
                setIsSubmitting(false);
                console.log('Error => ', error);
            });
    };

    const handleOtpChange = (e, index) => {
        document.getElementById("otpBtn").disabled = false;
        const value = e.target.value.slice(-1);
        const otpArray = formData.otp ? [...formData.otp] : ["", "", "", ""];
        otpArray[index] = value;

        setFormData({ ...formData, otp: otpArray.join("") });

        if (value && e.target.nextSibling) {
            e.target.nextSibling.focus();
        }
    };

    const handleOtpKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            const otpArray = formData.otp ? [...formData.otp] : ["", "", "", ""];
            otpArray[index] = "";
            setFormData({ ...formData, otp: otpArray.join("") });

            if (index > 0) {
                e.target.previousSibling.focus();
            }
        }
    };

    const resendOtp = () => {
        setShowResend(false);
        setOtpSent(false);
        document.querySelector('#otpBtn').disabled = false;
        document.querySelector('#otpBtn').click();
    };

    return (
        <div className='px-2 bg-white' style={{ width: '100vw', height: 'calc(100vh - 116px)' }}>
            <div className="section my-3 w-100" style={{ overflow: 'hidden', height: 'calc(100vh - 500px)' }}>
                <img className='' src="/assets/img/bg/register.jpg" style={{ transform: 'scale(1.4)', width: '100%', height: '100%' }} alt="" />
            </div>

            <div className="section text-center bg-white">
                <h1 className="pb-0">Welcome Back</h1>
                <h4 className='text-muted mb-0'>Log in to your existing account of e-learning</h4>
            </div>

            <div className="section">
                <div className="w-100">
                    <div className="mt-4">
                        <form onSubmit={handleSubmit}>
                            {
                                !otpSent ? (
                                    <div className="form-group boxed">
                                        <div className="input-wrapper">
                                            <label className="label" htmlFor="txt">E-mail/Phone number</label>
                                            <input
                                                id="phone_no"
                                                name="phone_no"
                                                type="text"
                                                className="form-control"
                                                readOnly={ReadOnly}
                                                value={formData.phone_no}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="form-group boxed">
                                        <div className="input-wrapper">
                                            <label className="label" htmlFor="email1">Enter the correct OTP</label>
                                            <div className="d-flex justify-content-between">
                                                {[0, 1, 2, 3].map((index) => (
                                                    <input
                                                        key={index}
                                                        type="text"
                                                        maxLength={1}
                                                        autoComplete="one-time-code"
                                                        className="form-control otp-input text-center p-0"
                                                        onChange={(e) => handleOtpChange(e, index)}
                                                        onKeyDown={(e) => handleOtpKeyDown(e, index)}
                                                        value={formData.otp?.[index] || ""}
                                                        style={{ width: '50px', height: '50px', fontSize: '22px', fontWeight: '500' }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            <div className="form-button-group p-0 mt-4">
                                <button
                                    id='otpBtn'
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    style={{ height: '40px' }}
                                >
                                    {otpSent ? "Submit" : "Continue"}
                                </button>
                            </div>

                            <div className="d-flex justify-content-between align-items-center mt-3">
                                {otpSent &&
                                    <div id='otp_timer' ref={otpTimerRef} style={{ fontSize: '12px', fontWeight: '500' }}></div>
                                }
                                {ShowResend &&
                                    <div
                                        className="p-0"
                                        style={{ cursor: 'pointer', fontSize: '14px', fontWeight: '500', color: '#FF4C6F' }}
                                        onClick={resendOtp}
                                    >
                                        Resend OTP?
                                    </div>
                                }
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
