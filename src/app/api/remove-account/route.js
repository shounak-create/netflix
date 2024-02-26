import connectMongodb from '@/database';
import Account from '@/models/Account';
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic';

export async function DELETE(req){
    try {

        await connectMongodb();

        const {searchParams} = new URL(req.url);
        const id = searchParams.get('id');

        if (!id){
            return NextResponse.json({
                success:false,
                message:"Account id is mandatory...",
            })
        }

        const deleteAccount = await Account.findByIdAndDelete(id)

        if (deleteAccount){
            return NextResponse.json({
                success:true,
                message:"Account is deleted successfully.",
            })
        } else{
            return NextResponse.json({
                success:true,
                message:"Account is deleted successfully.",
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