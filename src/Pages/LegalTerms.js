import React, { useContext } from 'react'
import { CourseContext } from '../context/CourseContext';


const LegalTerms = () => {

    const { termCondition } = useContext(CourseContext);
    // console.log(termCondition[0]);


    return (
        <div className='pb-5'>

            {
                termCondition.length > 0 ? (
                    termCondition.map((item) => {
                        return (
                            <div className="section mt-2 mb-3">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h2 className="card-title">Condition of Attending</h2>
                                        <div dangerouslySetInnerHTML={{ __html: termCondition[0].terms_codintions}} />
                                    </div>
                                </div>
                            </div>
                        )
                    })

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