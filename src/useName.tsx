import { useAppContext } from "./AppContext"

export function useName(name: string){
    const {theme, dispatch} = useAppContext()

    function setTheme(newTheme: string){
        dispatch({
            type: 'changeTheme',
            payload: {
                themePayload: newTheme
            }
        })
    }

    switch(name){
        case 'light':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>🌝 light</li>
        case 'dark':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>🌚 dark</li>
        case 'cupcake':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>🧁 cupcake</li>
        case 'bumblebee':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>🐝 bumblebee</li>
        case 'emerald':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>✳️ Emerald</li>
        case 'corporate':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>🏢 Corporate</li>
        case 'synthwave':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>🌃 synthwave</li>
        case 'cyberpunk':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>🤖 cyberpunk</li>
        case 'valentine':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>🌸 valentine</li>
        case 'halloween':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>🎃 halloween</li>
        case 'garden':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>🌷 garden</li>
        case 'forest':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>🌲 forest</li>
        case 'aqua':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>🐟 aqua</li>
        case 'lofi':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>👓 lofi</li>
        case 'pastel':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>🖍 pastel</li>
        case 'fantasy':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>🧚‍♀️ fantasy</li>
        case 'wireframe':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>📝 Wireframe</li>
        case 'black':
            return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>🏴 black</li>
        case 'luxury':
        return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>💎 luxury</li>
        case 'dracula':
        return <li onClick={()=>setTheme(name)} className={`p-2 ${theme ===name ? 'bg-primary rounded-lg' : ''} curspr-pointer`}>🧛‍♂️ dracula</li>
        default : return <></>
    }
}