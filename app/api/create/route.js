import { NextResponse } from "next/server";
import pool from "@/database/pool";
// import { redirect } from 'next/navigation'

export async function POST(request) {
  // const name = await request.body;
  // const res = await request.method;
  
  // console.log(dataF);
  // console.log(name);
  // console.log(res);
  // console.log(dataF.name);
//   console.log(request.cookies);
//   console.log(request.headers);
//   console.log(request.nextUrl.pathname);
//   console.log(request.nextUrl.searchParams);

  const dataF = await request.json();

  const name = dataF.name;
  const bmi = dataF.bmi;
  const tel = dataF.tel;

  try {
    const [result] = await pool.execute('INSERT INTO fanarm(name, bmi, tel) VALUES (?, ?, ?)', [name, bmi, tel]);
      if(result){
        return NextResponse.json({ message:"success"});
      }else{
        return NextResponse.json({ message:"error"});
      }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'ServerError' });
  }

  // console.log(name);
  // console.log(bmi);
  // console.log(tel);

  
  
  // redirect('/')

  // return NextResponse.json({ message: 'success'});
  
}
