import React, { useState } from "react";
import { useCookies } from "react-cookie";
import "./CookieBanner.scss";
import Button from "./Button";

const CookieBanner = () => {
    const [cookies, setCookie] = useCookies(["cookieConsent"]);
    const [showBanner, setShowBanner] = useState(!cookies.cookieConsent);

    const acceptCookies = () => {
        setCookie("cookieConsent", true, { path: "/", maxAge: 60 * 60 * 24 * 365 });
        setShowBanner(false);
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div className="cookie-banner">
            <p>
                We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
                <a href="/privacy-policy">Learn more</a>
            </p>
            <Button
                text="Accept"
                onClick={acceptCookies}
                variant="secodnary"
                />
        </div>
    );
};

export default CookieBanner;
