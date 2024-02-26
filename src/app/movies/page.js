'use client'

import UnauthPage from "@/components/unauth-page";
import { GlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import Manage_Account from "../api/Manage_Account";

export default function Movies(){
    const {data: session} = useSession();
    const {LoggedAccount} = useContext(GlobalContext)

    if (session === null){
        return <UnauthPage />
    }
    if (LoggedAccount === null) return <Manage_Account />

    return (
        <div>Movies</div>
    )
}