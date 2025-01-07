import React from 'react'
import { Link } from 'react-router-dom'

const QuizCategory = () => {



    return (
        <div className='text-center py-5'>
            <Link to='/quiz' className='btn btn-success'>Start Quiz Now</Link>
        </div>
    )
}

export default QuizCategory
