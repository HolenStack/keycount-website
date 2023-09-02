import SocialMediaIcon from "./SocialMediaIcon";
import './AboutPerson.scss'


const AboutPerson = ({ imageUrl, linkedinTargetUrl, mail, name, title }) => {
    return (
        <div className="kc-col-12 kc-col-sm-6 kc-col-md-4 kc-col-xxl-2 d-flex justify-content-center">
            <div className="row">
                <div className="kc-col-12">
                    <img src={imageUrl} alt={`Portrait of ${name}`} className="kc-about-person-image " />
                </div>
                <div className="kc-col-12 d-flex justify-content-center align-items-center d-flex-gap-1 about-person-info">
                    <div>{name} - {title}</div>
                    <SocialMediaIcon
                        platform="linkedin"
                        size='l'
                        alt={`linkedin of ${name}`}
                        targetUrl={linkedinTargetUrl}
                    />
                </div>
            </div>

        </div>
    );
};


export default AboutPerson;
