import connectMongodb from '@/database';
import Account from '@/models/Account';
import { compare } from 'bcryptjs';
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic';

export async function POST(req){
    try {
        await connectMongodb();

        const {pin,accountid,uid} = await req.json();

        const getCurrentAccount = await Account.findOne({_id:accountId, uid,})

        if (!getCurrentAccount){
            return NextResponse.json({
                success:false,
                message:"Account doeesn't exists.",
            })
        }

        const checkpin = await compare(pin,getCurrentAccount.pin)

        if (checkpin){
            return NextResponse.json({
                success:true,
                message:"Account logged in.",
            })
        } else{
            return NextResponse.json({
                success: false,
                message:"Incorrect PIN ! Please try again."
            })
        }
        
    } catch (error) {
        console.log(e)
        return NextResponse.json({
            success:false,
            message:"Something went wrong...",
        })
    }
}