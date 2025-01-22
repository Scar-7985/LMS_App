import React from 'react';

const CardListSkeleton = () => {
    return (
        <div className="item shadow border">
            <div className="d-flex align-items-center" style={{ height: '110px' }}>
                {/* Skeleton for Image */}
                <div className="skeleton skeleton-image" style={{ width: '30%', height: '100%' }}></div>
                <div className="pl-2 py-2 h-100 d-flex flex-column justify-content-center" style={{ flex: '1' }}>
                    {/* Skeleton for Title */}
                    <div className="skeleton skeleton-text" style={{ width: '60%', height: '16px', marginBottom: '8px' }}></div>
                    {/* Skeleton for Category */}
                    <div className="skeleton skeleton-text" style={{ width: '40%', height: '12px', marginBottom: '8px' }}></div>
                    {/* Skeleton for Price */}
                    <div className="d-flex align-items-center">
                        <div className="skeleton skeleton-text" style={{ width: '30%', height: '18px' }}></div>
                        <div className="skeleton skeleton-text ml-1" style={{ width: '20%', height: '12px' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardListSkeleton;
