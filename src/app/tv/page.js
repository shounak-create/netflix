'use client'

import { useSession } from "next-auth/react";

export default function search(){
    const {data: session} = useSession();
    if (session === null){
        return <UnauthPage />
    }
    return (
        <div>search</div>
    )
}