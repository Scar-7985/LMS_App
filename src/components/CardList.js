import React from 'react'

const CardList = (props) => {

    return (


        <div className="item shadow border" >
            <div className="d-flex align-items-center" style={{ height: '110px' }}>
                <img src={props.image} alt="img" className="" style={{ width: '40%', height: '100%' }} />
                <div className='pl-2 py-2 h-100 d-flex flex-column justify-content-center'>
                    <h4 className='text-secondary' style={{ fontSize: '16px', fontWeight: '500' }}>{props.title}</h4>
                    <h5 className='p-0 text-muted' style={{ fontSize: '12px' }}>Category: {props.category}</h5>
                    <div className='price m-0 p-0 d-flex align-items-center'>
                        <div className='text-danger' style={{ fontSize: '18px', fontWeight: '500' }}>₹ {props.of_price}</div>
                        <div className='text-secondary ml-1' style={{ fontSize: '12px', textDecoration: 'line-through', fontWeight: '500' }}>₹ {props.ac_price}</div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default CardList