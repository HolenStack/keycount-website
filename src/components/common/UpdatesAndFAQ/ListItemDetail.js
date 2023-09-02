import React from 'react';
import "./ListItemDetail.scss";
import Button from '../Button';

const ListItemDetail = ({ className, blogPost }) => {
    if (!blogPost) {
        return <p>No item selected.</p>;
    }

    return (
        <div className={className}>
            <div>
                <div className='d-flex justify-content-end'>
                    <Button
                        text=""
                        icon="arrow_back"
                        variant="tertiary"
                        onClick={() => window.history.back()}
                    />
                </div>
                <h1>{blogPost.title}</h1>
                <blogPost.component />
            </div>
        </div>
    );
};

export default ListItemDetail;
