import pool from "@/database/pool";
import { NextResponse } from "next/server";

export async function GET() {
    try {
    const [res] = await pool.execute("SELECT * FROM fanarm");
        return NextResponse.json(res);
    }catch(e){
        return NextResponse.json(e);
    }

}