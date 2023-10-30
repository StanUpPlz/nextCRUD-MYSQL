import pool from "@/database/pool";
import { NextResponse } from "next/server";

export async function DELETE(request){
    const data = await request.json();
    const id = data.id;
    // console.log(id);
    try{
       const res = await pool.execute('DELETE FROM fanarm WHERE id = ?', [id]);
       if(res){
        return NextResponse.json({message:'success'});
       }else{
        return NextResponse.json({message:'error'});
       }
    }catch(e){
        return NextResponse.json({e})
    }
    
}