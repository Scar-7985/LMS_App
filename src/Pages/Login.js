import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ phone_no: '' });
    const [otpSent, setOtpSent] = useState(false); // Initially, OTP is not sent
    const [ShowResend, setShowResend] = useState(false);
    const [ReadOnly, setReadOnly] = useState(false);
    const [timer, setTimer] = useState(30); // Start the timer at 30 seconds
    const [isSubmitting, setIsSubmitting] = useState(false);


    useEffect(() => {
        let interval;
        if (otpSent && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setShowResend(true); // Enable resend button once the timer is 0
        }

        return () => clearInterval(interval);
    }, [otpSent, timer]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        axios.post('https://wealthsaga.store/new/app/inc/config/login-query.php', formData, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                console.log('login => ', response.data);
                setOtpSent(true);
                setReadOnly(true)
                setIsSubmitting(false);
            })
            .catch(error => {
                setIsSubmitting(false);
                console.log('Error => ', error);
            });
    };

    const handleOtpChange = (e, index) => {
        const value = e.target.value.slice(-1); // Keep only the last digit
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
        setShowResend(false); // Disable resend button when clicked
        setTimer(30); // Reset the timer to 30 seconds
        setOtpSent(false); // Resend OTP
    };

    return (
        <div className='px-2 bg-white' style={{ width: '100vw', height: 'calc(100vh - 116px)' }}>
            {/* Other sections */}
            <form onSubmit={handleSubmit}>
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

                {otpSent && (
                    <div className="form-group boxed">
                        <div className="input-wrapper">
                            <label className="label" htmlFor="email1">Enter the correct OTP</label>
                            <div className="d-flex justify-content-between">
                                {[0, 1, 2, 3].map((index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
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
                )}

                {otpSent && ShowResend && (
                    <div className="text-right">
                        <div
                            className="text-danger p-0"
                            style={{ cursor: 'pointer' }}
                            onClick={resendOtp}
                        >
                            Resend OTP?
                        </div>
                    </div>
                )}

                <div className="form-button-group p-0 mt-2">
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        style={{ height: '40px' }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Continue'}
                    </button>
                </div>

                <div className="form-links mt-1">
                    <div>
                        <Link style={{ textDecoration: 'none' }} to='/registration'>Register Now</Link>
                    </div>
                    <div><Link to='#' className="text-danger" style={{ textDecoration: 'none', fontWeight: '500' }}>Forgot Password?</Link></div>
                </div>
            </form>
        </div>
    );
};


// login : "518D22"
// msg : "Login Successful"
// status : 100

export default Login;
