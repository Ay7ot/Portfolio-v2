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
        case 'setThemeModalFalse':
            return {
                ...state,
                themeModal: false
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
        case 'setShortNavFalse':
            return {
                ...state,
                shortNav: false
            }
        case 'setHasStarted':
            return {
                ...state,
                hasStarted: true
            }
        case 'setSeeMore':
            return {
                ...state,
                seeMore: action.payload?.seeMorePayload ?? false
            }
        default : return state
    }
}