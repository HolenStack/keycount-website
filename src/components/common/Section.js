import React from 'react';
import Button from './Button';


const Section = ({ title, content, buttonText, href, }) => {
    return (
        <div className='row mb-1'>

            <div className='kc-col-12'>
                <div className='row d-flex justify-content-center'>
                    <div className='kc-col-12 kc-col-md-8 kc-col-xxl-6'>
                        <div className='m-2'>
                            <h1 className='text-align-center'>{title}</h1>
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='kc-col-12 d-flex justify-content-center'>
                {buttonText ? (
                    <Button
                        text={buttonText}
                        variant="tertiary"
                        className="mt-1"
                        href={href}
                    />
                ) : (
                    ''
                )}
            </div>

        </div>
    );
};



export default Section;