import connectToDatabase from "@/lib/mongoose";
import User from "@/models/user";
import bcrypt from 'bcrypt'

export async function GET(){
    const password = await bcrypt.hash('Climate123#',10);
    await connectToDatabase();
    await User.insertMany([
        {name:'test',email: 'test@gmail.com', password: password}
    ]);
    return Response.json({status: 'success'})
}