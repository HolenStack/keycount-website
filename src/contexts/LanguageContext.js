import React, { createContext, useState, useEffect } from "react";
import en from "../translations/en";
import de from "../translations/de";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState(de);

  useEffect(() => {
    const userLanguage = navigator.language.slice(0, 2);
    if (userLanguage === "en") {
      setLanguage("en");
      setTranslations(en);
    } else {
      setLanguage("de");
      setTranslations(de);
    }
  }, []);

  return (
    <LanguageContext.Provider 
        value={{ language, translations, setLanguage, setTranslations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
