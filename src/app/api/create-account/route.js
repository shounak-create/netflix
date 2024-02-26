import connectMongodb from '@/database';
import Account from '@/models/Account';
import { NextResponse } from 'next/server'
import { hash } from 'bcryptjs';

export const dynamic = 'force-dynamic';

export async function POST(req){
    try {
        await connectMongodb();
    
        const {name,uid,pin} = await req.json();

        const isAccountAlreadyExists = await Account.find({uid,name});
        const allAccounts = await Account.find({});

        if (isAccountAlreadyExists){
            return NextResponse.json({
                success:false,
                message:"Account already exists..",
            })
        }

        if (allAccounts && allAccounts.length === 4){
            return NextResponse.json({
                success:false,
                message:"You can only create 4 accounts..",
            })
        }

        const hashpin = await hash(pin,12);

        const newlycreatedAccount = await Account.create({
            name,pin:hashpin,uid
        });

        if (newlycreatedAccount){
            return NextResponse.json({
                success:true,
                message:"New Account has been created..",
            })
        }else{
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