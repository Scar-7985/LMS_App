import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CourseContext } from '../context/CourseContext'
import { SITE_URL } from '../define/Define'

const Checkout = () => {

    const { checkoutId } = useParams();
    const { courseData } = useContext(CourseContext);

    // find specific course
    const filteredCourse = courseData.find((item) => Number(item.id) === Number(checkoutId));

    // console.log(filteredCourse);


    // const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(50);

    return (
        <React.Fragment>
            <div className="container" style={{width: '100vw'}}>

                <div className="row">
                    {
                        filteredCourse ? (
                            <div className="col-md-4 order-md-2 mb-4">
                                {/* <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                            <span className="badge badge-secondary badge-pill">3</span>
                        </h4> */}
                        <div>
                            <img src={`${SITE_URL}new/app/upload/course_img/${filteredCourse.img}`} alt="" width={'100%'} height={'50%'} />
                        </div>

                                <ul className="list-group my-3">
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 className="my-0">{filteredCourse.program_name}</h6>
                                            <small className="text-muted" style={{ fontSize: '12px' }}>
                                                <span className='text-secondary'>Category :</span> {filteredCourse.id}
                                            </small>
                                        </div>
                                        <div className="text-muted d-flex justify-content-between flex-column align-items-end" style={{ fontSize: '16px' }}>
                                            <span>₹{filteredCourse.of_price}</span>
                                            <span style={{ textDecoration: 'line-through', fontSize: '13px' }}>₹{filteredCourse.ac_price}</span>
                                        </div>
                                    </li>

                                    <li className="list-group-item d-flex justify-content-between bg-light">
                                        <div className="text-success">
                                            <h6 className="my-0">Discount</h6>
                                            <small>Code</small>
                                        </div>
                                        <span className="text-success">-₹{discount}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Total (Rs.)</span>
                                        <strong>₹{filteredCourse.of_price - discount}</strong>
                                    </li>
                                </ul>



                                <form className="card p-2">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Promo code" />
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-secondary">Redeem</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className='text-center py-5'>
                                <div className="spinner-border text-success" role="status"></div>
                            </div>
                        )
                    }
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">Name</label>
                                    <input type="text"
                                        className="form-control text-secondary"
                                        id="firstName" placeholder="Nikhil"
                                        required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email">Email <span className="text-muted"></span></label>
                                <input type="email" className="form-control text-secondary" id="email" placeholder="nikhil45@gmail.com" />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="Your address here..." required />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <hr className="mb-4" />
                            <h4 className="mb-3">Payment</h4>

                            <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required />
                                    <label className="custom-control-label" htmlFor="credit">Credit card</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="debit">Debit card</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="paypal">PayPal</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-name">Name on card</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                    <small className="text-muted">Full name as displayed on card</small>
                                    <div className="invalid-feedback">
                                        Name on card is required
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-number">Credit card number</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Credit card number is required
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="cc-expiration">Expiration</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Expiration date required
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="cc-cvv">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Security code required
                                    </div>
                                </div>
                            </div>
                            <hr className="mb-4" />
                            <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                        </form>
                    </div>
                </div>

                <footer className="my-5 pt-5 text-muted text-center text-small">
                    <p className="mb-1">2017-2019 Company Name</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#">Privacy</a></li>
                        <li className="list-inline-item"><a href="#">Terms</a></li>
                        <li className="list-inline-item"><a href="#">Support</a></li>
                    </ul>
                </footer>
            </div>
        </React.Fragment>
    )
}

export default Checkout
