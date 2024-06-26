import React, { useEffect, useState } from 'react'
import Appbar from '../components/Appbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [users,setUsers]=useState([])
    const [filter,setFilter]=useState("");
    const [balance,setBalance]=useState(0);

    const navigate=useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`,{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            setUsers(response.data.users);
        })
    },[filter])

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                'authorization':`Bearer ${localStorage.getItem('token')}`
            }
        }).then((response)=>setBalance(response.data.balance))
    },[])

    return (        
    <div className='bg-neutral-700 w-screen h-screen flex justify-center items-center'>
        <div className='bg-neutral-200 w-80 h-120 px-4 pb-4 rounded-md shadow-current shadow-md'>
            <Appbar user={'A'}/>
            
            <div className='font-bold pt-4 text-lg'>
                Your Balance ₹{balance}
            </div>
            <div className='py-2 font-bold text-lg'>
                Users
            </div>
            <div className='pb-2.5'>
                <input onChange={(e)=>{
                    setFilter(e.target.value)
                }} placeholder='Search Users' className='w-full p-2 h-8 rounded-md border-gray-400 border font-semibold'/>
            </div>
            <div>
                {users.map((user)=>{
                    return(
                    <div className='flex justify-between p-0.5' key={user._id}>
                        <div className='flex'>
                            <div className='bg-neutral-300 size-2 rounded-full m-2 p-5 font-bold flex justify-center items-center border-neutral-500 border'>
                                {user.firstName[0].toUpperCase()}
                            </div>
                            <div className='flex items-center text-lg font-semibold'>   
                                {user.firstName+' '+user.lastName}
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <button onClick={()=>navigate(`/send?id=${user._id}&name=${user.firstName+' '+user.lastName}`)} className='bg-black text-white rounded-md p-2 text-sm font-semibold'>
                                Send Money
                            </button>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
    )
}

export default Dashboard