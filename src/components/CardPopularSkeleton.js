import React from 'react';

const CardPopularSkeleton = () => {
    return (
        <div className="card-body d-flex flex-column shadow w-100">
            {/* Skeleton for Image */}
            <div
                className="skeleton skeleton-image w-100"
                style={{ height: '120px', borderRadius: '7px 7px 0 0' }}
            ></div>
            <div className="mt-1 p-2">
                {/* Skeleton for Title */}
                <div
                    className="skeleton skeleton-text"
                    style={{ width: '70%', height: '16px', marginBottom: '8px' }}
                ></div>
                {/* Skeleton for Category */}
                <div
                    className="skeleton skeleton-text"
                    style={{ width: '50%', height: '12px', marginBottom: '8px' }}
                ></div>
                {/* Skeleton for Price */}
                <div className="d-flex align-items-center">
                    <div
                        className="skeleton skeleton-text"
                        style={{ width: '30%', height: '18px', marginRight: '8px' }}
                    ></div>
                    <div
                        className="skeleton skeleton-text"
                        style={{
                            width: '20%',
                            height: '12px',
                            textDecoration: 'line-through',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default CardPopularSkeleton;
