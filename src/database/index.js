import mongoose from 'mongoose';

const connectMongodb = async () =>{
    try{
        await mongoose.connect(
            "mongodb+srv://shounakpandit47:HJswcypNY0aH3QDZ@cluster0.4wgyvgy.mongodb.net/"
        )
        console.log('mongodb is connected..');
    }catch(e){
        console.log(e);
    }
}