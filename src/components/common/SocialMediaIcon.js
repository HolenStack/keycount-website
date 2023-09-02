import React from "react";
import { SocialMediaIcons } from './SocialMediaIcons';


const SocialMediaIcon = ({platform, targetUrl, alt, size}) => {
    const iconLight = SocialMediaIcons["light"][platform];
    const iconDark = SocialMediaIcons["dark"][platform];
    
    return (
        <a
            href={targetUrl} target="_blank" className="h-100 d-flex align-items-center">
            <img src={iconLight.iconUrl} alt={alt} className={`d-none d-dark-block kc-social-media-image kc-social-media-image-${size} ${iconLight.cssClass}`} />
            <img src={iconDark.iconUrl} alt={alt} className={`d-none d-light-block kc-social-media-image kc-social-media-image-${size} ${iconDark.cssClass}`} />
        </a>
    );
};

export default SocialMediaIcon;