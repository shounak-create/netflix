import connectMongodb from '@/database';
import Account from '@/models/Account';
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic';

export async function GET(req){
    try {
        await connectMongodb();
    
        const {name,uid,pin} = await req.json();

        const isAccountAlreadyExists = await Account.find({uid,name});

        if (isAccountAlreadyExists){
            return NextResponse.json({
                success:false,
                message:"Account already exists..",
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