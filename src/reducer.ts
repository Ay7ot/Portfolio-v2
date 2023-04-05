import { AppActionType, AppContextType } from "./Types/types";

export function appReducer(state: AppContextType, action: AppActionType){
    switch(action.type){
        case 'changeTheme':
            return {
                ...state,
                theme: action.payload?.themePayload ?? ''
            }
        case 'setThemeModalTrue':
            return {
                ...state,
                themeModal: true
            }
        case 'setNoModals':
            return {
                ...state,
                themeModal: false,
                shortNav: false,
                navModal: false
            }
        case 'setNavModalTrue':
            return {
                ...state,
                navModal: true
            }
        case 'setShortNavTrue':
            return {
                ...state,
                shortNav: true
            }
        case 'setHasStarted':
            return {
                ...state,
                hasStarted: true
            }
        default : return state
    }
}