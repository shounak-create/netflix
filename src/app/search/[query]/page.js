'use client'

import Manage_Account from "@/app/api/Manage_Account";
import UnauthPage from "@/components/unauth-page";
import { GlobalContext } from "@/context";
import { useSession } from "next-auth/react";

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