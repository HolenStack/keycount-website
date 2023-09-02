import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';

const InternshipIt = () => {
    const { translations } = useContext(LanguageContext);
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        fetch(translations.internshipIt.contentFile)
            .then((response) => response.text())
            .then((html) => setHtmlContent(html));
    }, [translations.internshipIt.contentFile]);

    return (
        <div className='row mb-1'>
            <div className='kc-col-12'>
                <div className='row d-flex justify-content-center'>
                    <div className='kc-col-12 kc-col-md-8 kc-col-xxl-6'>
                        <div className='m-2'>
                            <h1 className='text-align-center'>{translations.internshipIt.title}</h1>
                            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InternshipIt;
