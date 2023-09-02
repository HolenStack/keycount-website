import React, { useEffect, useState } from 'react';
import Button from "./Button";
import "./PageBanner.scss"

const PageBanner = ({ title, buttonText, href, buttonIcon = null, imageLoader = null }) => {
    const [image, setImage] = useState({ image: null, video: null });

    useEffect(() => {
        if (typeof imageLoader === 'function') {
            imageLoader().then((img) => {
                setImage((prevMedia) => ({ ...prevMedia, image: img.default }));
            });
        }
    }, [imageLoader]);


    const imageContainer = image.image && <div className="kc-col-12 kc-col-xxl-6">
        <div className="d-flex justify-content-center m-1">
            <div className="image-container-banner max-w-100">
                <img src={image.image} alt="App Screenshot" />
            </div>
        </div>
    </div>;



    return (
        <div className="row d-flex align-items-center justify-content-center primary-container">
            <div className="kc-col-12 min-h-100">
                <div className="d-flex justify-content-around m-2 ">
                    <div className="text-align-center banner-title">
                        {title}
                    </div>
                    {buttonText ? (
                        <Button
                            text={buttonText}
                            variant="elevated-tertiary"
                            icon={buttonIcon}
                            className="mt-1"
                            href={href}
                        />
                    ) : (
                        ''
                    )}
                </div>
            </div>
            {
                imageContainer
            }
        </div>
    );
};

export default PageBanner
