import React, {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext";
import Section from "../common/Section";

const Contact = () => {
    const { translations } = useContext(LanguageContext);
    
    const email = <div className='kc-col-12'>
        <div className='row d-flex justify-content-center'>
            <div className='kc-col-12 kc-col-md-8 kc-col-xxl-6'>
                <div className='m-2'>
                    <p>
                        <a href={`mailto:${translations.contact.mail}`} target="_blank" rel="noopener noreferrer">
                            {translations.contact.mail}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>

    return (
        <div>
            <div>
                <Section
                    title={translations.contact.title}
                    content={translations.contact.text}/>
            </div>
            {email}
        </div>
    );
};

export default Contact;
