import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { SITE_URL } from '../define/Define'


const LegalTerms = () => {

    const [termCondition, setTermsCondition] = useState(null);

    useEffect(() => {
        const fetchTermsCondition = async () => {
            try {
                const response = await axios.get(`${SITE_URL}new/app/api/terms-and-conditions.php`);
                const data = response.data;
                setTermsCondition(data);
            } catch (error) {
            }
        }

        fetchTermsCondition();
    }, [])


    return (
        <div className='pb-5'>

            {
                termCondition ? (
                    <div className="section mt-2 mb-3">
                        <div className="card shadow">
                            <div className="card-body">
                                {/* <h2 className="card-title">Condition of Attending</h2> */}
                                <div dangerouslySetInnerHTML={{ __html: termCondition.legalterms }} />
                            </div>
                        </div>
                    </div>

                ) : (
                    <div className='text-center py-5'>
                        <div className="spinner-border text-success" role="status"></div>
                    </div>
                )
            }


        </div>

    )
}
export default LegalTerms;