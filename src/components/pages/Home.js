import React, {useContext} from 'react';
import Section from "../common/Section";
import {LanguageContext} from "../../contexts/LanguageContext";
import SplitSection from "../common/SplitSection";
import PageBanner from "../common/PageBanner";
import video from "./../../assets/videos/Vision.mp4";
import UAParser from 'ua-parser-js';


const Home = () => {
    const { translations } = useContext(LanguageContext);

    const getDevice = () => {
        const parser = new UAParser();
        return parser.getDevice().type;
    };

    const deviceType = getDevice();


    const visionSection =
        <div className='row d-flex align-items-center mb-1'>
            <div className="kc-col-12 kc-col-xxl-6">
                <div className="d-flex justify-content-around m-1">
                    <video controls height="400vh" preload="true">
                        <source src={video} type="video/mp4" />
                            Your Browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className='kc-col-12 kc-col-xxl-6 min-h-100'>
                <div className="d-flex justify-content-around align-items-center m-2 text-align-center">
                    <h1>{translations.home.vision.title}</h1>
                    <span className="text-align-start">{translations.home.vision.text}</span>
                </div>
            </div>
        </div>

    return (
        <div>
            <PageBanner
                title={translations.home.banner.title}
                imageLoader={translations.home.banner.image}
                // buttonText={translations.home.banner.videoButton} // TODO add as soon video is produced
                // buttonIcon="play_circle" // TODO add as soon video is produced
            />
            <Section
                title={translations.home.safety.title}
                content={translations.home.safety.text}
                buttonText={translations.home.safety.button}
                href="/#/safety"
                imageLocation={"right"}
            />
            <SplitSection
                title={translations.home.payments.title}
                content={translations.home.payments.text}
                buttonText={translations.home.payments.button}
                imageLoader={translations.home.payments.image}
                href="/#/payments"
                imageLocation={"left"}
            />
            <SplitSection
                title={translations.home.eBanking.title}
                content={translations.home.eBanking.text}
                buttonText={translations.home.eBanking.button}
                imageLoader={translations.home.eBanking.image}
                href="/#/e-banking"
                imageLocation={"right"}
            />
            <SplitSection
                title={translations.home.analysis.title}
                content={translations.home.analysis.text}
                buttonText={translations.home.analysis.button}
                imageLoader={translations.home.analysis.image}
                href="/#/analysis"
                imageLocation={"left"}
            />
            <SplitSection
                title={translations.home.crypto.title}
                content={translations.home.crypto.text}
                buttonText={translations.home.crypto.button}
                imageLoader={translations.home.analysis.image}
                href="/#/crypto"
                imageLocation={"right"}
            />
            {/*TODO video does not work on mobile*/}
            {deviceType !== "mobile" && visionSection}
            
        </div>
    );
};


export default Home;