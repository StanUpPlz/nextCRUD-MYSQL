'use client'
import React,{ useState,useEffect } from 'react'
import axios from 'axios';
import Link from 'next/link';
// import { useRouter } from 'next/navigation'


export default function List() {
  const [data, setData] = useState([]);
  // const router = useRouter();
  

  const deletehandler = async (id) => {
      // console.log(id);
      const response = await axios.delete('/api/delete', {data: { id },});
      const {message} = await response.data;
      if (message === 'success') {
         alert('ลบสำเร็จ')
         window.location.reload();
      }else{
        alert('ลบไม่สำเร็จ');
      }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('/api/list');
        setData(res.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    fetchData();
  }, []);

  return (
    <div>
      <div className='container mx-auto grid items-center text-center'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Bni</th>
              <th>Tel</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className=''>
            {data.map((item,index) => (
              <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.name}</td>    
                <td>{item.bmi}</td>  
                <td>{item.tel}</td> 
                <td><Link href={`/updatepage/${item.id}`}><button className='text-green-600'>แก้ไข</button></Link></td>     
                <td>
                            <button
                              className='text-red-600'
                              onClick={() => {
                                const shouldDelete = window.confirm('Are you sure you want to delete?');

                                if (shouldDelete) {
                                  deletehandler(item.id);
                                }
                              }}
                            >
                              ลบ
                            </button>
                          </td>
               </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  )
}
