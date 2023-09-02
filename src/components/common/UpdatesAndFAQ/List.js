import React, {useContext} from 'react';
import './List.scss';
import {LanguageContext} from "../../../contexts/LanguageContext";
import ListItem from "./ListItem";

const List = ({ items, onItemClick, className }) => {
    const { translations } = useContext(LanguageContext);
  
    return (
        <div className={`search-result-list ${className}`}>
            {(items && items.length > 0) ? items.map((item, index) => (
                <ListItem
                    key={item.id}
                    item={item}
                    onClick={() => onItemClick(item)}
                    className={`p-1`} />
            )) : ""}
            {items && items.length === 0 ?
                (<div className='p-1 mb-2'>
                    {
                        translations.updatesAndFAQ.noMatchingEntries
                    }
                </div>) : ""}
        </div>
    );
};

export default List;
