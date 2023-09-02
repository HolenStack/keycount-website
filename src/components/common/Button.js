import React from 'react';

import './Button.scss'

const Button = ({ text, variant, icon, className, href, onClick }) => {
    const contentClassName = `d-flex align-items-center kc-btn-content${icon ? ' has-icon' : ''}${text ? ' has-text' : ''}`;

    return (
        <a href={href}>
            <button className={`kc-btn ${variant} ${className}`} onClick={onClick}>
                <span className={contentClassName}>
                    {icon && <span className="material-icons">{icon}</span>}
                    {text && <span className="kc-btn-text">{text}</span>}
                </span>
            </button>
        </a>
    );
};

export default Button;
