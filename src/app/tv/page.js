'use client'

import { GlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import Manage_Account from "../api/Manage_Account";

export default function search(){
    const {data: session} = useSession();
    const {LoggedAccount} = useContext(GlobalContext)

    if (session === null){
        return <UnauthPage />
    }
    if (LoggedAccount === null) return <Manage_Account />

    return (
        <div>search</div>
    )
}