export type ProjectType = {
    name: string;
    id: string;
    description: string;
    image: string;
    github: string;
    liveLink: string,
    techStack: string[]
}

export type AppContextType = {
    theme: string;
    dispatch: React.Dispatch<AppActionType>;
    themeModal: boolean;
    hasStarted: boolean;
    shortNav: boolean;
    seeMore: boolean;
}

export type AppActionType = {
    type: string;
    payload?: {
        themePayload?: string;
        seeMorePayload?: boolean
    }
}