'use client'
import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
// import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'


export default function page({params}) {
    const id = params.id
    // console.log(id);
    // const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [bmi, setBmi] = useState('');
    const [tel, setTel] = useState('');
    
    const router = useRouter()
    // setId(id1);



      useEffect(() => {
        const fetchData = async () =>{
          const response = await axios.post('/api/read', { id });
          const res = response.data;
          // console.log(res);
          res.map((item)  => (
            setName(item.name),
            setBmi(item.bmi),
            setTel(item.tel)
          ))
          // setData(response.data);
        }
        fetchData(); 
      },[id]);

    
    
    const handlerupdate = async () => {
      try {
        if(name === '' || bmi === '' || tel === ''){
          alert('กรุณากรอกข้อมูลให้ครบ');
        }else{
          const response = await axios.put('/api/update',{id,name,bmi,tel});
          const {message} = await response.data;
          console.log(message);
          if(message === 'success'){
            router.push('/');
          }else{
            alert('อัพเดตล้มเหลว');
          }
        }
      }catch(e){
        alert('catch');
        console.log(e);
      }
     
    };
    
  return (
    <div className='container mx-auto grid gap-4'>
      <h1>Update</h1>
      <input
        type="text"
        placeholder="{name}"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="{bmi}"
        value={bmi}
        onChange={(e) => setBmi(e.target.value)}
      />
      <input
        type="text"
        placeholder="{tel}"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
      />
      <button className='border border-green-500' onClick={handlerupdate}>Update</button>
    </div>
  )
}
