'use client'

import { GlobalContext } from "@/context"
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react"
import axios from 'axios'
import CircleLoader from "@/components/circle-loader";

export default function Manage_Account(){
    const {accounts, setAccounts,PageLoader,setPageLoader} = useContext(GlobalContext);
    const {data:session} = useSession()
    async function getAllFunction(){
        const res = await axios.get(`/api/get-all-accounts?id=${session?.user?.uid}`)
        console.log(res.data)
        if (res && res.data && res.data.length){
            setAccounts(res.data)
            setPageLoader(false)
        } else{
            setPageLoader(false)
        }
    }

    useEffect(()=>{
        getAllFunction()
    },[])

    if (PageLoader) return <CircleLoader />

    return <div className="min-h-screen flex justify-center flex-col items-center relative">
        <div className="flex justify-center flex-col items-center">
            <h1 className="text-white font-bold text-[54px] my-[36px]">Who's watching</h1>
            <ul className="flex gap-8 p-0 my-[25px]">
                {
                    accounts && accounts.length ? accounts.map(item =>{
                        <li className="max-w-[200px] w-[155px] cursor-pointer flex flex-col items-center gap-3 min-w-[200px]" key={item._id}>
                            <div className="relative">
                                <img
                                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fnetflix-profile-pictures&psig=AOvVaw03gsO-nTyrYEWGpPzO13Dh&ust=1709009305975000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOjXwPaZyIQDFQAAAAAdAAAAABAE"
                                alt="Account"
                                className="max-w-[200px] rounded min-w-[84px] max-h-[200px] object-cover w-[155px] h-[155px]"
                                />
                            </div>
                            <span className="mb-4">{item.name}</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000.svg" className="svg-icon svg-icon-profile-lock ltr-0 e1mhci4z1" data-name="Lock" aria-hidden="true">
                                <path
                                fill-rule="evenold"
                                clip-rule="evenold"
                                d="M7 6C7 3.23858 9.23858 1 12  1C14.7614 1 17 6V7H19C20.1046 7 21 9V18.6529C21 19.6274 20.2885" fill="currentColor" ></path>
                            </svg>
                        </li>
                    }):null
                }
                {
                    accounts && accounts.length < 4 ?
                    <li className="border text-black bg-[#e5b109] font-bold text-lg border-black max-w-[200px] rounded min-w-[84px] max-h-[200px] w-[155px] h-[155px] cursor-pointer flex justify-center items-center">
                        Add Account
                    </li>
                    :null
                }
            </ul>
        </div>
    </div>
}
