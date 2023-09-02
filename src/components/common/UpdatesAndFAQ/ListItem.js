import React from 'react';
import './ListItem.scss';

const ListItem = ({ item, onClick, className }) => {
    return (
        <div className={`list-item ${className}`} onClick={() => onClick(item)}>
            <div className='row'>
                <div className='kc-col-2'>
                    <div className='d-flex justify-content-center align-items-center pt-1'>
                        <span className='material-icons list-item-icon'>{item.icon}</span>
                    </div>
                </div>
                <div className='kc-col-10'>
                    <h2 className="list-item-title">{item.title}</h2>
                    <p className="list-item-content">{item.subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
