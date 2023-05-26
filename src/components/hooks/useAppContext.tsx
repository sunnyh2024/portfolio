import { createContext, useContext, useState} from "react";
import useWindowSize from "./useWindowSize";

const AppContext = createContext<any>(null);

/***
 * Hold AppConfig data and allows children to set context data
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export function AppContextProvider ({children}: {children: any}) {
    const {width, height} = useWindowSize();
    const [appConfig, setAppConfig] = useState({
        theme: "dark",
        menuOpened: false,
        width: width,
        height: height,
    });

    return (
        <AppContext.Provider value={{appConfig, setAppConfig}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}

