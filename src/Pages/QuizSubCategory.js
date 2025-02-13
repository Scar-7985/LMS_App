import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../define/Define';

const QuizSubCategory = () => {

    const location = useLocation()
    const { quizId } = location.state || {};
    const [showBlank, setShowBlank] = useState(false);
    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
        if (quizId) {
            axios.post(`${SITE_URL}new/app/api/get_quiz_type.php`, { exam_id: quizId }).then(resp => {
                if (resp.data.status === 101) {
                    setShowBlank(true);
                } else {
                    setQuizData(resp.data);
                }

            }).catch(error => {
                console.log(error);
            })
        }
    }, [])

    console.log(quizData);
    

    return (
        <div>

        </div>
    )
}

export default QuizSubCategory
