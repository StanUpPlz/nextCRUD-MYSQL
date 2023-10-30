import pool from "@/database/pool";
import { NextResponse } from "next/server";

export async function PUT(request){
    const data = await request.json()
    const id = data.id;
    const name = data.name;
    const bmi = data.bmi;
    const tel = data.tel;
    
    try{
        const [response] = await pool.execute('UPDATE fanarm SET name = ?, bmi = ?, tel = ? WHERE id = ?', [name, bmi, tel,id]);
        if(response){
            return NextResponse.json({message: 'success'})
        }else{
            return NextResponse.json({message: 'error'})
        }
    }catch(e){
        return NextResponse.json({message: 'error'})
    }

    // console.log(id,name, bmi, tel);
    // return NextResponse.json({ message:"success" });
}