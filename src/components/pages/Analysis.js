import React, { useContext } from 'react';
import { LanguageContext } from "../../contexts/LanguageContext";
import PageBanner from "../common/PageBanner";
import SplitSection from "../common/SplitSection";


const Analysis = () => {
    const { translations } = useContext(LanguageContext);

    return (
        <div>
            <PageBanner
                title={translations.analysis.banner.title}
                imageLoader={translations.analysis.banner.image}
            />

            {translations.analysis.sections.map((section, index) => (
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

export default Analysis