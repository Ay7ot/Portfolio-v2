import { ReactNode, createContext, useContext, useReducer } from "react";
import { appReducer } from "./reducer";
import { AppContextType } from "./Types/types";

export const AppContext = createContext<AppContextType>({
    theme: 'forest',
    dispatch: ()=> {},
    themeModal: false
})

export const useAppContext = () => {
    return useContext(AppContext);
}

export function AppProvider({children}: {children:ReactNode}){
    
    const initialState = useAppContext()
    const [mainstate, dispatch] = useReducer(appReducer, initialState)

    return (
        <AppContext.Provider value={{...mainstate, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}
   