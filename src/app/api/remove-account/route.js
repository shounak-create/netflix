import connectMongodb from '@/database';
import Account from '@/models/Account';
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic';

export async function DELETE(req){
    try {
        
    } catch (error) {
        console.log(e)
        return NextResponse.json({
            success:false,
            message:"Something went wrong...",
        })
    }
}