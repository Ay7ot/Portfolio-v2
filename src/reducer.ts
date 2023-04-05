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
                themeModal: false
            }
        default : return state
    }
}