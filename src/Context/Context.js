import { createContext, useState } from "react";


export const Context = createContext()

const ContextProvider = ({ children }) => {
    const [username, setUsername] = useState('')

    const data = { username, setUsername }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )

}
export default ContextProvider