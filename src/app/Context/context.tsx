'use client';
import {createContext, useContext, Dispatch, SetStateAction, useState} from "react";

interface ContextProps {
    currentCard: number;
    setCurrentCard: Dispatch<SetStateAction<number>>
    suit :number
    setSuit: Dispatch<SetStateAction<number>>
}

const CardContext = createContext<ContextProps>({
    currentCard: 0,
    setCurrentCard: (): number => 0,
    suit: 0,
    setSuit: (): number => 0
});

export const GlobalContextProvider = ({ children }:any) => {
    const [currentCard, setCurrentCard] = useState(0);
    const [suit, setSuit] = useState(0);

return(
    <CardContext.Provider value = {{currentCard, setCurrentCard, suit, setSuit}}>
        {children}
    </CardContext.Provider>
)
}

export const useCardContext = () => useContext(CardContext);