import React, { useMemo, useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Update() {

    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[password,setPassword]=useState('');

    const navigate=useNavigate();
    
    const body=useMemo(()=>{
        let body={};
        if(firstName)   body.firstName=firstName;
        if(lastName)    body.lastName=lastName;
        if(password)    body.password=password;
        return body;
    },[firstName,lastName,password])

    return (
        <div className='bg-neutral-700 w-screen h-screen flex justify-center items-center'>
            <div className='bg-neutral-200 w-80 h-120 rounded-md shadow-current shadow-md p-4'>
                <Heading title="Update Profile"/>
                <SubHeading desc='Enter updated information'/>

                <div className='flex justify-center'>
                    <div className='bg-neutral-300 size-20 rounded-full m-2 p-17 font-semibold text-6xl flex justify-center border-neutral-500 border'>
                        <span className='m-1'>
                            {'A'}
                        </span>
                    </div>
                </div>

                <InputBox onChange={(e)=>setFirstName(e.target.value)} title='First Name'/>
                <InputBox onChange={(e)=>setLastName(e.target.value)} title='Last Name'/>
                <InputBox onChange={(e)=>setPassword(e.target.value)} title='Password'/>

                <Button onClick={()=>{
                    axios.put("http://localhost:3000/api/v1/user",body,{
                        headers:{
                            "Authorization":`Bearer ${localStorage.getItem('token')}`
                        }
                    }).then(navigate('/dashboard'))
                }} title='Update'/>
                

            </div>
        </div>
    )
}

export default Update