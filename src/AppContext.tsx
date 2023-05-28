import { ReactNode, createContext, useContext, useReducer } from "react";
import { appReducer } from "./reducer";
import { AppContextType } from "./Types/types";

const themeInitial = localStorage.getItem('theme')
export const AppContext = createContext<AppContextType>({
    theme: themeInitial || 'halloween',
    dispatch: ()=> {},
    themeModal: false,
    hasStarted: false,
    shortNav: false,
    seeMore: false
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
   