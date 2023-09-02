import React, { useContext } from 'react';
import { LanguageContext } from "../../contexts/LanguageContext";
import SplitSection from "../common/SplitSection";


const Security = () => {
    const { translations } = useContext(LanguageContext);

    return (
        <div>
            {translations.safety.sections.map((section, index) => (
                <SplitSection
                    key={section.id}
                    title={section.title}
                    content={section.text}
                    imageLoader={section.image}
                    imageLocation={index % 2 === 0 ? "right" : "left"}
                />
            ))}
        </div>
    );
};

export default Security