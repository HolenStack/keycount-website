import React, { useContext, useState } from 'react';
import keycountLogoWithLettering from "./../../assets/images/logos/keycount/Logo_keycount_lettering_and_logo_orange_on_white.svg";
import keycountLogoStandalone from "./../../assets/images/logos/keycount/Logo_standalone_orange.svg";
import { LanguageContext } from '../../contexts/LanguageContext';
import './Header.scss';
import LanguageSelect from './LanguageSelect';
import {Link} from "react-router-dom";

const Header = () => {
    const { translations } = useContext(LanguageContext);
    const { language, setLanguage, setTranslations } = useContext(LanguageContext);

    const switchLanguage = () => {
        if (language === 'en') {
            setLanguage('de');
            setTranslations(require('../../translations/de').default);
        } else {
            setLanguage('en');
            setTranslations(require('../../translations/en').default);
        }
    };
    

    return (
        <div className="kc-header d-flex justify-content-between p-1 align-items-center">
            <Link to="/home">
                <picture>
                    <source media="(min-width: 576px)" srcSet={keycountLogoWithLettering} />
                    <img alt="keycount logo" src={keycountLogoStandalone} className="kc-header-logo" />
                </picture>
            </Link>

            <div className="d-flex">
                <LanguageSelect onLanguageChange={switchLanguage} />
            </div>
        </div>
    );
};

export default Header;
