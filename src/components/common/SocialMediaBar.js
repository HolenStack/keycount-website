import React from 'react';
import './SocialMediaBar.scss';
import SocialMediaIcon from "./SocialMediaIcon";

const SocialMediaBar = ({ size }) => {
    const platforms = [
        {
            name: "instagram",
            targetUrl: "https://www.instagram.com/keycount_eu/",
        },
        {
            name: "facebook",
            targetUrl: "https://www.facebook.com/people/Keycount/100075876857321/",
        },
        {
            name: "youtube",
            targetUrl: "https://www.youtube.com/channel/UCIN-4lKvZWS3PFRvAYzKkyA",
        },
        {
            name: "twitter",
            targetUrl: "https://twitter.com/keycount_eu",
        },
        {
            name: "telegram",
            targetUrl: "https://t.me/+vVz9_c1rcURjNDdk",
        },
        {
            name: "linkedin",
            targetUrl: "https://www.linkedin.com/company/74488789/",
        }
    ]

    return (
        <div className={`kc-social-media-bar surface-variant d-flex kc-social-media-bar-${size} kc-social-media-bar-variant`}>
            {platforms.map((platform, index) => (
                <SocialMediaIcon 
                    platform={platform.name}
                    size={size}
                    targetUrl={platform.targetUrl}
                    alt={platform.name}
                    key={index} />
            ))}
        </div>
    );
};

export default SocialMediaBar;
