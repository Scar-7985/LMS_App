

const UpdateProfile = () => {

    return (
        <>


            <div id="appCapsule" className='py-0'>

                <div className="section mt-3 text-center">
                    <div className="avatar-section">
                        <div
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
                                className="imaged rounded"
                                src={"/assets/img/sample/avatar/avatar.png"}
                                style={{height: '100px', width: '100px'}}
                            />
                            <label htmlFor='changeImage'
                                className="button"
                                style={{ cursor: 'pointer' }}>
                                <ion-icon name="camera-outline"></ion-icon>
                            </label>
                        </div>

                    </div>
                    <div>
                        <p className='m-0' style={{ color: 'black', fontWeight: '500' }}>{"Nikhil"}</p>
                        <p className='m-0' style={{ fontSize: '12px' }}><span>+91</span> {'235235235'}</p>
                    </div>
                </div>

            </div>



            <div id="appCapsule pt-0 pb-2" className='bg-white shadow'>
                <div className="section full mt-1 mb-2">
                    <div className="wide-block pt-2 pb-3">

                        <div>
                            <div className="form-group boxed">
                                <div className="input-wrapper">
                                    <label className="label" htmlFor="name5">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                    <ion-icon name="create"
                                        style={{ fontSize: '20px', display: 'none' }}
                                    ></ion-icon>
                                </div>
                            </div>

                            <div className="form-group boxed">
                                <div className="input-wrapper">
                                    <label className="label" htmlFor="email5">E-mail</label>
                                    <input
                                        type="email"
                                        className="form-control" id="email5"
                                        placeholder="E-mail address"
                                    />
                                    <button
                                        style={{ display: 'none' }}
                                        className="btn btn-primary"
                                    >Save Changes</button>
                                </div>
                            </div>

                            <div className="form-group boxed">
                                <div className="input-wrapper">
                                    <label className="label" htmlFor="password5">Date Of Birth</label>
                                    <input type="date" className="form-control" id="password5" />
                                </div>
                            </div>

                            <div className="form-group boxed mt-3 pb-0">
                                <div className="input-wrapper">
                                    <button className='btn btn-warning text-white w-100'
                                    >Update</button>
                                </div>
                            </div>

                        </div>

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