import React, { useState, useEffect, useContext, lazy } from 'react';
import SearchBar from '../common/UpdatesAndFAQ/SearchBar';
import List from '../common/UpdatesAndFAQ/List';
import PageBanner from '../common/PageBanner';
import { LanguageContext } from "../../contexts/LanguageContext";
import ListItemDetail from '../common/UpdatesAndFAQ/ListItemDetail';
import { useNavigate, useLocation } from 'react-router-dom';

const UpdatesAndFAQ = () => {
    const [search, setSearch] = useState('');
    const { translations } = useContext(LanguageContext);
    const navigate = useNavigate();
    const location = useLocation();

    const blogPostComponents = translations.blogPosts.map((post) => ({
        ...post,
        component: lazy(() => import(`./BlogPosts/${post.component}`)),
    }));

    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        navigate(item.route);
    };

    useEffect(() => {
        const matchingPost = blogPostComponents.find(
            (post) => post.route === location.pathname
        );
        setSelectedItem(matchingPost);
    }, [location.pathname]);

    const filteredData = blogPostComponents.filter(
        (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.subtitle.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <PageBanner title={translations.updatesAndFAQ.bannerTitle} />
            <SearchBar
                className="search-bar"
                placeHolderText={translations.updatesAndFAQ.searchField}
                onSearch={setSearch}
            />
            <div>
                {selectedItem ? (
                    <ListItemDetail className="mt-1 w-100 min-w-100" blogPost={selectedItem} />
                ) : (
                    <List items={filteredData} onItemClick={handleItemClick} />
                )}
            </div>
        </div>
    );
};

export default UpdatesAndFAQ;
