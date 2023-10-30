'use client'
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [bmi, setBmi] = useState('');
  const [tel, setTel] = useState('');

  const handleCreate = async () => {
    try {
      if(name === '' || bmi === '' || tel === ''){
        alert('กรุณากรอกข้อมูลให้ครบ');
      }else{
      const response = await fetch('/api/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, bmi,tel}),
      });
      const res = await response.json();
      if(res.message ==='success'){
        alert('บันทึกสำเร็จ')
      }else{
        alert('บันทึกผิดพลาด')
      }
    }
    } catch (error) {
      console.error('Failed to create record', error);
    }
  };
  
  return (
    <div className='container mx-auto grid gap-4'>
      <h1>Create Record</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bmi"
        value={bmi}
        onChange={(e) => setBmi(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tel"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
      />
      <button className='border border-green-500' onClick={handleCreate}>Create</button>
    </div>
  );
}
