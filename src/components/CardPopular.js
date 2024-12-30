import React from 'react'

const CardPopular = (props) => {


    return (

        <div className="ard-body d-flex flex-column ">
            <img src={props.image} alt="img" className="image-block w-100" style={{ height: '120px', borderRadius: '7px 7px 0 0' }} />
            <div className='mt-1 p-1'>
                <h4 className='text-secondary' style={{ fontSize: '16px', wordWrap: 'break-word', height: '40px' }}>{props.title.length > 20 ? props.title.substring(0, 20) + "..." : props.title}
                </h4>
                <h5 className='p-0 text-secondary' style={{ fontSize: '12px' }}>Category : {props.category}</h5>
                <div className='price m-0 mt-1 p-0 d-flex align-items-center'>
                    <div className='text-danger' style={{ fontSize: '18px', fontWeight: '500' }}>₹ {props.of_price}</div>
                    <div className='text-secondary ml-1' style={{ fontSize: '12px', textDecoration: 'line-through', fontWeight: '500' }}>₹ {props.ac_price}</div>
                </div>
            </div>
        </div>

    )
}

export default CardPopular