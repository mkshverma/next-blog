"use server"

import JWT from "@/lib/jwt";
import connectToDatabase from "@/lib/mongoose";
import User from "@/models/user";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function login(_prevState, formData){
    
    const email = formData.get('email');
    const password = formData.get('password');
    await connectToDatabase();
    const user = await User.findOne({email});
    if(user){
        const result = await bcrypt.compare(password, user.password)
        if(result){
            cookies().set('jwt', JWT.sign({
                name: user.name,
                email: user.email
            }));
            redirect('/');
        }else{
            return {
                error: 'Invalid User/Password!'
            }
        }
    }else{
        return {
            error: 'Invalid User/Password!'
        }
    }
}