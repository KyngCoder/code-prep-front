import { createContext, useState } from "react";

export const AppContext = createContext()

const Info = ({children}) => {
    const [quizName,setQuizName] = useState('')
    const [level,setLevel] = useState('')

    return(
        <AppContext.Provider value={{quizName,setQuizName,level,setLevel}}>
            {children}
        </AppContext.Provider>
        )
}

export default Info