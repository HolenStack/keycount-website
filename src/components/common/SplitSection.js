import React, { useState, useEffect } from 'react';
import Button from './Button';
import { useMediaQuery } from "react-responsive";


const SplitSection = ({ title, content, buttonText, href, imageLoader, imageLocation }) => {
    const [image, setImage] = useState({ image: null, video: null });
    const isMobile = useMediaQuery({ query: `(max-width:1399px)` });

    useEffect(() => {
        imageLoader().then((img) => {
            setImage((prevMedia) => ({ ...prevMedia, image: img.default }));
        });
    }, [imageLoader]);

    const imageContainer = <div className="kc-col-12 kc-col-xxl-6">
        <div className="d-flex justify-content-around m-1">
            <div className="image-container max-w-100">
                {image.image && <img src={image.image} alt="App Screenshot" />}
            </div>
        </div>
    </div>;

    return (
        <div className='row d-flex align-items-center mb-1'>
            {
                isMobile || imageLocation === "left" ? imageContainer : ""
            }

            <div className='kc-col-12 kc-col-xxl-6 min-h-100'>
                <div className="m-2">
                    <h1 className='text-align-center'>{title}</h1>
                    <p>{content}</p>
                    <div className='d-flex justify-content-center'>
                        {buttonText ? (
                            <Button
                                text={buttonText}
                                variant="tertiary"
                                className="mt-1"
                                href={href}
                            />
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
            {
                !isMobile && imageLocation === "right" ? imageContainer : ""
            }
        </div>
    );
};



export default SplitSection;