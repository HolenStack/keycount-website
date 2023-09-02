import vezgoLogoBlack from "./../../assets/images/logos/vezgo/vezgo_black.svg"
import './Partner.scss'

const Partner = ({imageUrlLight, imageUrlDark, alt}) => {
    
    const src = vezgoLogoBlack
    
    return (
        <div className="kc-partner d-flex align-items-center justify-content-center">
            <picture>
                <source srcSet={imageUrlDark} media="(prefers-color-scheme: dark)" />
                <img src={imageUrlLight} alt={alt} className="kc-partner-image" />
            </picture>
        </div>
    );
};


export default Partner;
