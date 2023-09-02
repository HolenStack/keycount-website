import React, { useContext } from 'react';
import PageBanner from "../common/PageBanner";
import { LanguageContext } from "../../contexts/LanguageContext";
import { teamMembers } from '../common/teamMembers';
import AboutPerson from "../common/AboutPerson";
import Partner from "../common/Partner";
import { partners } from "../common/partners";

const AboutUs = () => {
    const { translations } = useContext(LanguageContext);

    const teamMemberSection =
        <div className="row d-flex justify-content-center d-flex-gap-1">
            <div className="kc-col-12">
                <h1 className="text-align-center m-1">{translations.aboutUs.team.title}</h1>
            </div>
            <div className="kc-col-12 kc-col-md-8 kc-col-xl-6 text-align-center">
                <div className="p-1">
                    {translations.aboutUs.team.text}
                </div>
            </div>
            <div className='kc-col-12'>
                <div className="row mt-1 d-flex justify-content-center">
                    {Object.entries(teamMembers).map(([propertyName, member]) => (
                        <AboutPerson
                            imageUrl={member.imageUrl}
                            linkedinTargetUrl={member.linkedInTargetUrl}
                            mail={member.mail}
                            name={member.name}
                            title={member.title}
                            key={member.name}
                        />
                    ))}
                </div>
            </div>
        </div>

    const partnerSection =
        <div className="row d-flex justify-content-center">
            <div className="kc-col-12">
                <h1 className="text-align-center m-1">{translations.aboutUs.partner.title}</h1>
            </div>
            {Object.entries(partners).map(([propertyName, partner]) => (
                <div className="kc-col-12 kc-col-md-6 kc-col-xl-4 mt-1 mt-xl-0 d-flex justify-content-center" key={partner.name}>
                    <Partner
                        imageUrlLight={partner.imageUrlLight}
                        imageUrlDark={partner.imageUrlDark}
                        alt={`${partner.name} logo`}
                        
                        />
                </div>
            ))}
        </div>

    return (
        <div>
            <PageBanner
                title={translations.aboutUs.banner.title}
            />

            {teamMemberSection}
            {partnerSection}

        </div>
    );
};

export default AboutUs;