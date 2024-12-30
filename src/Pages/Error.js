import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='pt-5 text-center'>
    <div className='text-center' style={{fontSize: '18px', fontWeight: '500'}}>Looks like you got lost</div>
      <Link to='/' className='btn btn-warning btn w-75 mt-5' style={{height: '40px', fontSize: '18px', fontWeight: '500'}}>Go Back</Link>
    </div>
  )
}

export default Error
