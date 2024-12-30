import React from 'react'

const CardList = (props) => {

    return (


        <div className="item">
            <div className="d-flex align-items-center">
                <img src={props.image} alt="img" className="image-block" style={{ width: '120px', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }} />
                <div className='pl-2 pr-1'>
                    <h4 className='text-secondary' style={{ fontSize: '16px', fontWeight: '500' }}>{props.title}</h4>
                    <h5 className='p-0 text-muted' style={{ fontSize: '12px' }}>Category: {props.category}</h5>
                    <div className='price m-0 mt-1 p-0 d-flex align-items-center'>
                        <div className='text-danger' style={{ fontSize: '18px', fontWeight: '500' }}>₹ {props.of_price}</div>
                        <div className='text-secondary ml-1' style={{ fontSize: '12px', textDecoration: 'line-through', fontWeight: '500' }}>₹ {props.ac_price}</div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default CardList