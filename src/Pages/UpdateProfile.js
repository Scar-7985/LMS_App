import { useState, useEffect } from "react";
import axios from "axios";
import { SITE_URL } from "../define/Define";
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useSearchParams } from "react-router-dom";


const UpdateProfile = () => {

    const [profilePic, setProfilePic] = useState(null);
    const [showChangeImage, setShowChangedImage] = useState(false);
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        login_id: window.localStorage.getItem("login_id"),
        uname: "",
        phone: "",
        email: "",
        address: "",
        uimage: ""
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
                uimage: data.profile_pic || "",
            });
            setProfilePic(data.profile_pic);
        } catch (error) {
            console.error("Error fetching details:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleImageChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];

        const imageURL = URL.createObjectURL(file);
        console.log(imageURL);

        setFormData((prevData) => ({
            ...prevData,
            [name]: file,
        }));

        setShowChangedImage(imageURL);
    };

    const handleUpdate = async (e) => {

        e.preventDefault();
        let formdata = new FormData();
        formdata.append("login_id", formData.login_id);
        formdata.append("uname", formData.uname);
        formdata.append("phone", formData.phone);
        formdata.append("email", formData.email);
        formdata.append("address", formData.address);
        formdata.append("uimage", formData.uimage);
        formdata.append("last_image", profilePic);

        try {
            const response = await axios.post(
                `${SITE_URL}new/app/api/update_profile.php`, formdata);

            if (response.data.status === 101) {
                toast.warning(response.data.msg);
                // console.log(response);

            } else {
                toast.success(response.data.msg);
                window.localStorage.removeItem('user_name');
                window.localStorage.removeItem('user_email');
                window.localStorage.removeItem('user_phone')
                window.localStorage.setItem('user_phone', formData.phone)
                window.localStorage.setItem('user_name', formData.uname);
                window.localStorage.setItem('user_email', formData.email);
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
            // console.log("Profile changes:", response.data);
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    const handleGoBack = () => {
        if (window.localStorage.getItem("user_name") === "null") {
            toast.warn("Please fill out the details");
        } else {
            navigate('/profile');
        }
    }



    return (
        <div className="bg-white" style={{ position: 'relative', zIndex: `${window.localStorage.getItem("user_name") === "null" ? '1000' : '100'}` }}>
            <Header
                profile={false}
                goback={false}
                goBackTo={handleGoBack}
                title={'Update Profile'}
                showSearch={false}
            />

            <div style={{ paddingBottom: '80px', }}>


                <div id="appCapsule" className='py-0'>

                    <div className="section text-center">
                        <div className="avatar-section">
                            <div
                                className="mt-2"
                                style={{ cursor: 'pointer', }}
                            >
                                <input
                                    type="file"
                                    className={`form-control`}
                                    id="imageFile"
                                    onChange={handleImageChange}
                                    name='uimage'
                                    style={{ display: 'none' }}
                                />
                                {
                                    showChangeImage
                                        ? <img src={showChangeImage} className="imaged rounded shadow" alt="Preview" style={{ height: '100px', width: '100px' }} />
                                        : <img src={`${SITE_URL}new/app/upload/profile_pic/${profilePic}`} className="imaged rounded shadow" alt="" style={{ height: '100px', width: '100px' }} />
                                }
                                <label htmlFor="imageFile"
                                    className="button"
                                    style={{ cursor: 'pointer' }}>
                                    <ion-icon name="camera-outline"></ion-icon>
                                </label>
                            </div>

                        </div>
                        <div className="my-3">
                            <p className='m-0' style={{ color: 'black', fontWeight: '500' }}>
                                {window.localStorage.getItem("user_name") !== "null" ? window.localStorage.getItem("user_name") : ''}
                            </p>
                            {window.localStorage.getItem("user_phone") !== "null" ? (
                                <p className='m-0' style={{ fontSize: '12px' }}>
                                    <span>+91</span>{window.localStorage.getItem("user_phone")}
                                </p>
                            ) : (
                                null
                            )}

                        </div>
                    </div>

                </div>



                <div id="appCapsule pt-0 pb-2" className='bg-white'>
                    <div className="section full mt-1 mb-2">
                        <div className="wide-block pt-2 pb-3 border border-0">

                            <form onSubmit={handleUpdate}>


                                <div className="form-group boxed">
                                    <div className="input-wrapper">
                                        <label className="label" htmlFor="phone" style={{ display: 'flex', alignItems: 'end', gap: '6px' }}>
                                            <span>Phone no. verified</span>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                                                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                                </svg>
                                            </span>
                                        </label>
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
                                            placeholder="E-mail"
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
                                        <textarea
                                            type="text"
                                            className="form-control" id="address"
                                            placeholder="Address here..."
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            style={{
                                                backgroundColor: '#E8F0FE',
                                                height: '100px',
                                            }}
                                        />
                                    </div>
                                </div>


                                <div className="form-group boxed mt-4 pb-0">
                                    <div className="input-wrapper">
                                        <button type="submit" className='btn btn-warning text-white w-100'
                                        >Update</button>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default UpdateProfile;