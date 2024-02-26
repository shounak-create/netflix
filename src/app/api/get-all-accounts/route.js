import connectMongodb from '@/database';
import Account from '@/models/Account';
import { NextResponse } from 'next/server'
import { hash } from 'bcryptjs';

export const dynamic = 'force-dynamic';

export async function GET(req){
    try {
        await connectMongodb();
        
        const {searchParams} = new URL(req.url);
        const id = searchParams.get('id');

        const getAllAccounts = await Account.find({uid:id});

        if (getAllAccounts){
            return NextResponse.json({
                success:true,
                data:getAllAccounts
            })
        } else {
            return NextResponse.json({
                success:false,
                message:"Something went wrong..."
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