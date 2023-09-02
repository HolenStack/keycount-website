import React, { useState, useEffect } from 'react';
import './SplitSectionVideo.scss';

const SplitSectionVideo = ({ title, content, videoLoader }) => {
    const [video, setVideo] = useState({ image: null, video: null });

    useEffect(() => {
        if (videoLoader) {
            videoLoader().then((vid) => {
                setVideo((prevMedia) => ({ ...prevMedia, video: vid.default }));
            });
        }
    }, [videoLoader]);

    return (
        <div className='row d-flex align-items-center mb-1'>
            <div className="kc-col-12 kc-col-xxl-6">
                    <div className="video-wrapper">
                        <video controls height="400vh" preload="true" playsInline>
                            <source src={video.video} type="video/mp4" />
                            Your Browser does not support the video tag.
                        </video>
                    </div>
                </div>
            <div className='kc-col-12 kc-col-xxl-6 min-h-100'>
                <div className="d-flex justify-content-around align-items-center m-2 text-align-center">
                    <h1>{title}</h1>
                    <span className="text-align-start">{content}</span>
                </div>
            </div>
        </div>
    );
};

export default SplitSectionVideo;
