import { useState, createContext, FC } from 'react';

export type ContextTypes = {
    isNavVisible: boolean,
    setIsNavVisible: (arg: boolean) => void,
    isEnglish: boolean,
    setIsEnglish: (arg: boolean) => void,
};

const contextDefaultValues: ContextTypes = {
    isNavVisible: false,
    setIsNavVisible: () => {},
    isEnglish: true,
    setIsEnglish: () => {},
}

 export const AppContext = createContext<ContextTypes>(contextDefaultValues);

 export const AppProvider: FC = ({ children }) => {

    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isEnglish, setIsEnglish] = useState(true);

    return(
        <AppContext.Provider value={{ isNavVisible, setIsNavVisible, isEnglish, setIsEnglish }}>
            {children}
        </AppContext.Provider>
    );
 }