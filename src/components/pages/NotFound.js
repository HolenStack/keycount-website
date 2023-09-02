import React from 'react';
import Section from "../common/Section";

const NotFound = () => {
    return (
        <div>
            <Section
                title="404 - Page Not Found"
                content="Sorry, the page you are looking for doesn't exist."
                buttonText={"Back to Homepage"}
                href="/"
            />
        </div>
    );
};

export default NotFound;