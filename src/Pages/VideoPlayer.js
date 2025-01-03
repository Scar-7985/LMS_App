import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CourseContext } from '../context/CourseContext';
import VideoCard from '../components/VideoCard';
import Header from '../components/Header';
import { SITE_URL } from '../define/Define';

const VideoPlayer = () => {

    const { videoData } = useContext(CourseContext);
    const { getVideoId } = useParams();
    const [currentVideoId, setCurrentVideoId] = useState(null); // Track the current video ID

    // Initialize the video ID from the URL when the component loads
    useEffect(() => {
        if (getVideoId) {
            setCurrentVideoId(Number(getVideoId));
        } else if (videoData && videoData.length > 0) {
            setCurrentVideoId(videoData[0].id); // Default to the first video
        }
    }, [getVideoId, videoData]);

    const currentVideo = videoData?.find((item) => Number(item.id) === Number(currentVideoId));

    const handleRelatedVideoClick = (id) => {
        setCurrentVideoId(id); // Change the current video ID to the selected video
    };

    if (!videoData || videoData.length === 0) {
        return <div className="text-center">No videos available.</div>;
    }

    if (!currentVideo) {
        return <div className="text-center">Video not found.</div>;
    }

    const relatedVideos = videoData.filter(
        (item) => Number(item.category) === Number(currentVideo.category) && item.id !== currentVideo.id
    );

    // console.log('currentVideo => ', currentVideo);


    return (
        <>
            <Header goBackTo={'/my-courses'} showSearch={false} />
            <div className="d-flex flex-column" style={{ position: 'relative' }}>
                <div className="bg-white sticky-top" style={{ top: '56px', zIndex: '50' }}>
                    <video
                        key={currentVideoId} // Force React to re-render the video element when the ID changes
                        id="my-video"
                        className="video-js vjs-default-skin img-fluid"
                        controls
                        preload="auto"
                        muted
                        style={{ width: '100%', height: '200px' }}
                    >
                        <source
                            src={`${SITE_URL}new/app/upload/video/${currentVideo.video}`}
                            type="video/mp4"
                        />
                    </video>
                    <div className="text-dark border p-2 d-flex flex-column" style={{ fontSize: '14px', fontWeight: '600', backgroundColor: '#F2F2F2' }}>
                        <span>{currentVideo.title}</span>
                        <span className='text-muted'>Category: {currentVideo.category}</span>
                    </div>
                </div>

                <div className="d-flex flex-column px-2" style={{ paddingBottom: '80px' }}>

                    {
                        relatedVideos.length > 0 ?

                            (<>
                                <div className='text-center py-2'>More Videos</div>
                                {relatedVideos.map((item) => (
                                    <div
                                        key={item.id}
                                        className="card shadow border"
                                        onClick={() => handleRelatedVideoClick(item.id)} // Switch video on click
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <VideoCard
                                            title={item.title}
                                            image={`${SITE_URL}new/app/upload/video_thumb/${item.thumb}`}
                                            alt={`thumbnail`}
                                            category={item.category}
                                            of_price={item.of_price}
                                            ac_price={item.ac_price}
                                        />
                                    </div>
                                ))}
                            </>
                            ) : (
                                <div className='text-center py-4'>No more videos available for <br />
                                    "{currentVideo.title}"
                                </div>
                            )
                    }
                </div>
            </div>
        </>
    );
};

export default VideoPlayer;
