import PageBanner from "../common/PageBanner";
import {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext";
import Button from "../common/Button";

const Exit = () => {
    const { translations } = useContext(LanguageContext);

    const getTextBlock = (content) => {
        const replacedContent = content.replace('{emailLink}', '<a href="mailto:company@key-count.com">company@key-count.com</a>');
        
        const jsx =  
        <div className='row mb-1'>
            <div className='kc-col-12'>
                <div className='row d-flex justify-content-center'>
                    <div className='kc-col-12 kc-col-md-8 kc-col-xxl-6'>
                        <p dangerouslySetInnerHTML={{ __html: replacedContent }}></p>
                    </div>
                </div>
            </div>
        </div>
    
        return jsx;
    };

    return (
        <div>
            <PageBanner
                title={translations.exit.banner.title}
                // imageLoader={translations.exit.banner.image}
            />

            {translations.exit.sections.map((section, index) => (
                getTextBlock(section.text)
            ))}

            <div className='kc-col-12 d-flex justify-content-center'>
                <Button
                    text={translations.exit.buttonText}
                    variant="tertiary"
                    className="mt-1"
                    href="/#/home"
                />
            </div>

        </div>
    );
};


export default Exit;