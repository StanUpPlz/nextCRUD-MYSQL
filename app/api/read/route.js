import React from "react";
import pool from "@/database/pool";
import { NextResponse } from "next/server";

export async function POST(request) {
    const data = await request.json();
    const id = data.id;
    // console.log(id);
    try {
    const [res] = await pool.execute("SELECT * FROM fanarm WHERE id = ?",[id]);
        return NextResponse.json(res);
    }catch(e){
        return NextResponse.json(e);
    }

}