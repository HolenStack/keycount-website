import React, { useContext } from 'react';
import keycountLogo from "./../../assets/images/logos/keycount/Logo_keycount_lettering_and_logo_orange_on_white.svg";
import './Footer.scss';
import { LanguageContext } from "../../contexts/LanguageContext";

const Footer = () => {
    const { translations } = useContext(LanguageContext);

    return (
        <div className="row d-flex align-items-center footer pt-1">
            <div className="kc-col-12 kc-col-xxl-6 d-flex justify-content-center">
                <img
                    alt="Keycount logo"
                    src={keycountLogo}
                    className="footer-logo"
                />
            </div>
            <div className="kc-col-12 kc-col-xxl-6 d-flex justify-content-around">
                <a href="/#/privacy-policy"> {translations.footer.privacyPolicy}</a>
                <a href="/#/terms-and-conditions"> {translations.footer.termsAndConditions}</a>
            </div>
        </div>
    );
};

export default Footer;
