import React from 'react'

const VideoCard = (props) => {

    return (


        <div className="item">
            <div className="d-flex align-items-center">
                <img src={props.image} alt="img" className="image-block" style={{ width: '120px', height: '90px', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }} />
                <div className='pl-2 pr-1 w-100'>
                    <h4 className='text-secondary' style={{ fontSize: '16px', fontWeight: '500' }}>{props.title}</h4>
                    <div className='price m-0 mt-1 p-0 d-flex justify-content-between align-items-center'>
                        <h5 className='p-0 text-muted' style={{ fontSize: '12px' }}>Category: {props.category}</h5>
                        <div className='' style={{ fontSize: '24px', textDecoration: 'line-through', fontWeight: '500', color: 'orangered' }}>
                            <ion-icon name="play-circle-outline"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default VideoCard