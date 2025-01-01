import React from 'react'
import { Link } from 'react-router-dom'

function Support() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>


            <div className="section bg-white"
                style={{ overflow: 'hidden', height: 'calc(100vh - 520px)' }}>
                <img className='' src="/assets/img/bg/Mobile-login.jpg" style={{ transform: 'scale(1.1)', width: '100%', height: '100%' }} alt="" />
            </div>

            <div id="appCapsule" className='bg-white pt-0 pb-0'>
                <div className="section full">
                    <div className="wide-block pt-2 pb-3" style={{ borderBottom: 'none' }}>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group boxed">
                                <div className="input-wrapper">
                                    <label className="label" htmlFor="name5">Subject</label>
                                    <input type="text" className="form-control" id="name5" placeholder="Your subject here" />
                                </div>
                            </div>

                            <div class="form-group boxed">
                                <div class="input-wrapper">
                                    <label class="label" for="address5">Message</label>
                                    <textarea id="address5" rows="4" class="form-control" placeholder='Your message here'></textarea>
                                    <i class="clear-input"><ion-icon name="close-circle"></ion-icon></i>
                                </div>
                            </div>

                            <div className="form-group boxed mt-2 pb-3">
                                <div className="input-wrapper">
                                    <button className='btn btn-warning text-white w-100 update-btn' data-toggle="modal" data-target="#DialogIconedSuccess">Submit</button>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

            {/* ===================================== */}
            {/* Profile Update Success Toast */}

            <div class="modal fade dialogbox" id="DialogIconedSuccess" data-backdrop="static" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-icon text-success">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                        <div class="modal-header">
                            <h5 class="modal-title">Success</h5>
                        </div>
                        <div class="modal-body">
                            Your request sent successfully
                        </div>
                        <div class="modal-footer">
                            <div class="btn-inline">
                                <a href="#" class="btn" data-dismiss="modal">CLOSE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Support;