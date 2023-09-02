import { createContext, useContext, useState } from 'react';

const SelectedItemContext = createContext();

export const useSelectedItem = () => {
    return useContext(SelectedItemContext);
};

export const SelectedItemProvider = ({ children }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
            {children}
        </SelectedItemContext.Provider>
    );
};
