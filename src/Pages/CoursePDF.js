import React, { useEffect } from 'react'
import Header from '../components/Header';

const CoursePDF = () => {
    const UploadUrl = 'https://fakeurl.com/';
    const companyDetails = {
        logo: 'logo.png',
        web_name: 'Fake Company Pvt Ltd.',
        email: 'contact@fakecompany.com',
        phone: '+91 9876543210',
        address: '123 Fake Street, City, Country'
    };

    const invoiceDetail = {
        invoiceId: 'INV-123456',
        clName: 'John Doe',
        clEmail: 'john.doe@example.com',
        clAddress: '789 Client Road, City, Country',
        clDistrict: 'District Name',
        clPin_code: '123456',
        discount: '100.00',
        tax: '18',
        totalAmount: '2500.00',
        note: 'Thank you for your business!'
    };

    const data = [
        { quantity: 1, title: 'Product A', description: 'Description of Product A', rate: '500.00', amount: '1000.00' },
    ];

    const getInvoiceSum = {
        status: '<span>Paid</span>',
        unpaid: '0.00'
    };

    const totalAmount = '2500.00';

    const paymentHistory = [
        { id: '1', txnID: 'TXN-001', date: '2025-01-01', amount: '2500.00' }
    ];

    const InvoiceTermDecode = 'Please ensure payment is made within 30 days.';

    const handlePrint = () => {
        const printContents = document.querySelector('#PDFInvoice').innerHTML;
        const originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;

        window.print();

        setTimeout(() => {
            document.body.innerHTML = originalContents;
            window.location.reload();
        }, 500);
    };




    return (
        <>
            <Header goBackTo={'/course'} title={'PDF View'} showSearch={false} rightSec={
                <div
                    onClick={handlePrint}
                    className="avatar avatar-icon avatar-lg avatar-cyan rounded"
                    style={{
                        display: 'grid',
                        placeItems: 'center',
                        background: '#1DCC70',
                        color: '#fff',
                        cursor: 'pointer',
                        height: '36px',
                        width: '36px'
                    }}
                >
                    <ion-icon name="print-outline" style={{ fontSize: '24px' }}></ion-icon>
                </div>
            } />



            <div className="container mt-3" id="PDFInvoice" style={{ paddingBottom: '100px' }}>
                <div className="card shadow py-2">
                    <div className="card-body">
                        <div id="invoice" className="">
                            <div className="d-flex justify-content-between">
                                <div style={{ width: '140px' }}>
                                    <img src={'/assets/img/sample/brand/brand.png'} alt="logo" style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div style={{
                                    position: "absolute",
                                    left: "10%",
                                    top: "50%",
                                    transform: "translate(0, -50%) rotate(25deg)",
                                    opacity: '0.2',
                                    width: '140px'
                                }}>
                                    <img src={'/assets/img/sample/brand/brand.png'} alt="logo" style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div>
                                    <div className="invoice-id">{invoiceDetail.invoiceId}</div>
                                </div>
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-center gap-2" >

                                <div className="w-100 mt-4">
                                    <address className="" style={{ wordBreak: 'break-word' }}>
                                        <span className="font-weight-semibold text-dark" style={{ fontSize: '12px' }}>{companyDetails.web_name}</span><br />
                                        <span className="text-muted">{companyDetails.email}</span><br />
                                        <span className="text-muted">{companyDetails.phone}</span><br />
                                        <span className="text-muted">{companyDetails.address}</span>
                                    </address>
                                </div>

                                <div className="w-100">
                                    <address className="" style={{ wordBreak: 'break-word' }}>
                                        <span className="font-weight-semibold text-dark" style={{ fontSize: '12px' }}>To: <br />{invoiceDetail.clName}</span><br />
                                        <span className="text-muted">{invoiceDetail.clEmail}</span><br />
                                        <span className="text-muted">{invoiceDetail.clAddress}</span><br />
                                        <span className="text-muted">{invoiceDetail.clDistrict}</span><br />
                                        <span className="text-muted">{invoiceDetail.clPin_code}</span>
                                    </address>
                                    <div className="invoice-detail text-right text-white mt-2">
                                        <div className="rounded-pill px-3" style={{ backgroundColor: '#1DCC70', display: 'inline-block' }}>
                                            {getInvoiceSum.status && (
                                                <div
                                                    dangerouslySetInnerHTML={{ __html: getInvoiceSum.status }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-3">
                                <div className="table-responsive">
                                    <hr className="m-0" />
                                    <table className="table">
                                        <thead style={{ border: '2px solid #D5D6D6', borderLeft: 'none', borderRight: 'none', borderTop: 'none' }}>
                                            <tr>
                                                <th className='col-3'>S no.</th>
                                                <th className='col'>Product</th>
                                                <th className='col'>Rate(₹)</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {data.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.quantity}</td>
                                                    <td>
                                                        <span>
                                                            Product LMS
                                                        </span>
                                                        <br />

                                                        <p className="text-muted">
                                                            Description of the product here
                                                        </p>
                                                    </td>
                                                    <td className="text-center">{item.rate}</td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>

                                <div className="mt-2">
                                    <div className="table-responsive">
                                        {/* <hr className="m-0" /> */}
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Discount{" "}</th>
                                                    <th className="text-right">&#8377; {invoiceDetail.discount}</th>
                                                </tr>
                                                <tr>
                                                    <th>Subtotal{" "}</th>
                                                    <th className="text-right">&#8377; {totalAmount}</th>
                                                </tr>
                                                <tr>
                                                    <th>Tax</th>
                                                    <th className="text-right">{invoiceDetail.tax}%</th>
                                                </tr>
                                                <tr>
                                                    <th>Total</th>
                                                    <th className="text-right" style={{ fontSize: '18px', fontWeight: '600', color: '#3F87F5' }}>&#8377; {invoiceDetail.totalAmount}</th>
                                                </tr>
                                                <tr>
                                                    <th>Total Due</th>
                                                    <th className="text-right" style={{ fontSize: '18px', fontWeight: '600', color: '#3F87F5' }}>&#8377; {getInvoiceSum.unpaid}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    {/* <td>Content Here</td> */}
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="">
                                    <span className="text-muted" style={{ fontSize: '18px' }}>Note :</span>
                                    {invoiceDetail.note}
                                </div>

                                <div className="mt-2">
                                    <h4 className="text-muted">Payment History</h4>
                                    <hr className="mt-0" />

                                    <table className="w-100">
                                        <thead>

                                            {paymentHistory.length > 0 &&
                                                paymentHistory.map((history, index) => {
                                                    return (
                                                        <tr className="d-flex justify-content-between" key={history.id}>
                                                            <th className="d-flex flex-column">
                                                                <span>{history.txnID}</span>
                                                                <span className="text-muted">{history.date}</span>
                                                            </th>
                                                            <th className="text-right" style={{ color: '#1DCC70' }}>&#8377; {history.amount}</th>
                                                        </tr>
                                                    );
                                                })}

                                        </thead>
                                    </table>
                                    <hr />

                                </div>

                                <div className="row m-t-30 lh-1-8">
                                    <div className="col-sm-12">
                                        <div className="float-left">
                                            <div className="invoice-detail mt-4">
                                                <span className="font-15 fw-6">Terms & Condition</span>
                                                <div>{InvoiceTermDecode}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoursePDF
