'use client'

import UnauthPage from "@/components/unauth-page";
import { GlobalContext } from "@/context";
import { useSession } from "next-auth/react"
import { useContext } from "react";
import Manage_Account from "../api/Manage_Account";

export default function Browse(){

    const {LoggedAccount} = useContext(GlobalContext)

    const {data: session} = useSession();

    if (session === null){
        return <UnauthPage />
        
    }
    if (LoggedAccount === null) return <Manage_Account />
    return <div>Browse</div>
}