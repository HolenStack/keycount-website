import React, { useContext, useState } from 'react';
import Button from './Button';
import SocialMediaBar from './SocialMediaBar';
import './BottomMenu.scss';
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "./../../contexts/LanguageContext";

const BottomMenu = () => {
    const { translations } = useContext(LanguageContext);
    const location = useLocation();
    const [popupOpen, setPopupOpen] = useState(false);

    return (
        <div className="kc-bottom-menu-container d-flex align-items-center justify-content-center flex-direction-column slow-fade-in">
            <div className={`kc-bottom-menu-popup elevated-primary ${popupOpen ? 'open' : ''}`}>
                <div>
                    <SocialMediaBar size="s" />
                </div>
                <ul>
                    <li className={location.pathname === "/#/updates-and-faq" ? "active" : ""}>
                        <Link 
                        to="/updates-and-faq" 
                        onClick={() => setPopupOpen(false)}>{translations.bottomMenu.updatesAndFAQ}
                        </Link>
                    </li>

                    <li className={location.pathname === "/#/about-us" ? "active" : ""}>
                        <Link 
                        to="/about-us"
                         onClick={() => setPopupOpen(false)}>{translations.bottomMenu.aboutUs}
                         </Link>
                    </li>

                    <li className={location.pathname === "/#/home" ? "active" : ""}>
                        <Link 
                        to="/home" 
                        onClick={() => setPopupOpen(false)}>{translations.bottomMenu.home}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="kc-bottom-menu" onClick={() => setPopupOpen(!popupOpen)}>
                <Button text="Menu" variant="elevated-primary" icon="menu" />
            </div>
        </div>
    );
};

export default BottomMenu;
