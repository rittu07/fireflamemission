"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { TranslationBundle } from "@/data/contentData";

export type Language = "en" | "ta";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (bundle: TranslationBundle) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("site-lang") as Language;
    if (savedLang === "en" || savedLang === "ta") {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("site-lang", lang);
    }
  };

  // Helper function to translate bundles
  const t = (bundle: TranslationBundle): string => {
    return bundle[language] || bundle["en"];
  };

  // Render the Provider always so that children can resolve context on the server (during SSR/prerender)
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={mounted ? "" : "invisible"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
