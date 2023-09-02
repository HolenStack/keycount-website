import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import './LanguageSelect.scss';

const LanguageSelect = ({ onLanguageChange }) => {
    const { language } = useContext(LanguageContext);

    const handleChange = (e) => {
        onLanguageChange(e.target.value);
    };

    return (
        <div className="kc-language-select d-flex align-items-center background">
            <span className="material-icons">language</span>
            <select defaultValue={language} className="background" onChange={handleChange}>
                <option value="de">
                    DE
                </option>
                <option value="en">EN</option>
            </select>
        </div>
    );
};


export default LanguageSelect;
