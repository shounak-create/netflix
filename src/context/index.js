"use client"

import CircleLoader from "@/components/circle-loader";
import { useSession } from "next-auth/react";
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);


export default function GlobalState({children}) {

    const [LoggedAccount,setLoggedAccount] = useState(null);
    const [accounts, setAccounts] = useState([])
    const [PageLoader,setPageLoader] = useState(true)
 
    const {data:session} = useSession();
    if (session === undefined) return <CircleLoader />
    return <GlobalContext.Provider value={{LoggedAccount, setLoggedAccount, accounts, setAccounts,PageLoader,setPageLoader}}>{children}</GlobalContext.Provider>
}