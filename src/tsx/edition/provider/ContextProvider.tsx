import { ReactNode, useState } from "react";
import { Context } from "../context/Context";

export function ContextProvider({children}: {children: ReactNode}) {
    const [update, setUpdate] = useState<boolean>(false)
    const [value, setValue] = useState({id: '', text: '', price: '', filtered: false})
    return (
        <Context.Provider value={{update, setUpdate, value, setValue}}>
            {children}
        </Context.Provider>
    )
}