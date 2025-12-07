import { NextResponse } from "next/server";
import connect from "@/app/lib/db";
import { toast } from "react-hot-toast";

export async function GET(){
    try{
        const {db} = await connect();
        const users = db.collection("users");
        const data = await users.find({}).toArray();

        if(data){
            return NextResponse.json({status: "success", data}, {status: 200})
        }

    }catch(error) {
        if(error instanceof Error){
            console.error("error fetching users:",error)
        toast(error.message);
        }else{
            toast("unknown error occurred while fetching users")
        }
    }
}