import { useState, useEffect } from "react";
import axios from "axios";
import { SITE_URL } from "../define/Define";
import { toast } from 'react-toastify';


const UpdateProfile = () => {

    const [formData, setFormData] = useState({
        login_id: window.localStorage.getItem("login_id") || "",
        uname: "",
        email: "",
        address: "",
        phone: "",
    });

    useEffect(() => {
        fetchDetails();
    }, []);

    const fetchDetails = async () => {
        try {
            const response = await axios.post(`${SITE_URL}new/app/api/get_profile.php`, {
                login_id: formData.login_id,
            });
            const data = response.data;

            setFormData({
                login_id: formData.login_id,
                uname: data.name || "",
                email: data.email || "",
                address: data.address || "",
                phone: data.phone || "",
            });
        } catch (error) {
            console.error("Error fetching details:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${SITE_URL}new/app/api/update_profile.php`,
                formData,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            if (response.data.status === 101) {
                toast.error(response.data.msg);
            } else {
                toast.success(response.data.msg);
            }
            console.log("Profile updated:", response.data);
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <>


            <div id="appCapsule" className='py-0'>

                <div className="section mt-3 text-center">
                    <div className="avatar-section">
                        <div
                            className=""
                            style={{ cursor: 'pointer', }}
                        >
                            <input
                                type="file"
                                id="profilePic"
                                className='d-none'
                                name="profilePic"
                                accept="image/*"
                            />
                            <img
                                className="imaged rounded shadow"
                                src={"/assets/img/sample/avatar/avatar.png"}
                                style={{ height: '100px', width: '100px' }}
                            />
                            {/* <label htmlFor='changeImage'
                                className="button"
                                style={{ cursor: 'pointer' }}>
                                <ion-icon name="camera-outline"></ion-icon>
                            </label> */}
                        </div>

                    </div>
                    <div className="my-3">
                        <p className='m-0' style={{ color: 'black', fontWeight: '500' }}>{formData.uname}</p>
                        <p className='m-0' style={{ fontSize: '12px' }}><span>+91</span> {formData.phone}</p>
                    </div>
                </div>

            </div>



            <div id="appCapsule pt-0 pb-2" className='bg-white'>
                <div className="section full mt-1 mb-2">
                    <div className="wide-block pt-2 pb-3 border border-0">

                        <form onSubmit={handleUpdate}>


                            <div className="form-group boxed">
                                <div className="input-wrapper">
                                    <label className="label" htmlFor="phone">Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Phone"
                                        readOnly
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        style={{ backgroundColor: '#E8F0FE' }}
                                    />
                                </div>
                            </div>
                            <div className="form-group boxed">
                                <div className="input-wrapper">
                                    <label className="label" htmlFor="name5">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your name"
                                        name="uname"
                                        value={formData.uname}
                                        onChange={handleChange}
                                        style={{ backgroundColor: '#E8F0FE' }}
                                    />
                                </div>
                            </div>

                            <div className="form-group boxed">
                                <div className="input-wrapper">
                                    <label className="label" htmlFor="email5">E-mail</label>
                                    <input
                                        type="text"
                                        className="form-control" id="email5"
                                        placeholder="E-mail address"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={{ backgroundColor: '#E8F0FE' }}
                                    />
                                    <button
                                        style={{ display: 'none' }}
                                        className="btn btn-primary"
                                    >Save Changes</button>
                                </div>
                            </div>

                            <div className="form-group boxed">
                                <div className="input-wrapper">
                                    <label className="label" htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        className="form-control" id="address"
                                        placeholder="E-mail address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        style={{ backgroundColor: '#E8F0FE' }}
                                    />
                                    <button
                                        style={{ display: 'none' }}
                                        className="btn btn-primary"
                                    >Save Changes</button>
                                </div>
                            </div>

                            {/* <div className="form-group boxed">
                                <div className="input-wrapper">
                                    <label className="label" htmlFor="password5">Date Of Birth</label>
                                    <input type="date" className="form-control" id="password5" />
                                </div>
                            </div> */}

                            <div className="form-group boxed mt-3 pb-0">
                                <div className="input-wrapper">
                                    <button type="submit" className='btn btn-warning text-white w-100'
                                    >Update</button>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

            {/* ===================================== */}
            {/* Profile Update Success Toast */}

            <div className="modal fade dialogbox" id="DialogIconedSuccess" data-backdrop="static" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-icon text-success">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                        <div className="modal-header">
                            <h5 className="modal-title">Success</h5>
                        </div>
                        <div className="modal-body">
                            Profile Updated Successfully
                        </div>
                        <div className="modal-footer">
                            <div className="btn-inline">
                                <a href="#" className="btn" data-dismiss="modal">CLOSE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default UpdateProfile;