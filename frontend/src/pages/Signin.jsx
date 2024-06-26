import React, { useState } from 'react'

import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signin() {
    
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();

    return (
        <div className='bg-neutral-700 w-screen h-screen flex justify-center items-center'>
            <div className='bg-neutral-200 w-80 h-120 rounded-md shadow-current shadow-md p-4'>
                <Heading title="Sign In"/>
                <SubHeading desc="Enter your credentials to access your account"/>
                <InputBox title="Email" onChange={(e)=>setUsername(e.target.value)}/>
                <InputBox title='Password' onChange={(e)=>setPassword(e.target.value)}/>
                <Button onClick={async()=>{
                    const response =await axios.post("http://localhost:3000/api/v1/user/signin",{
                        username,
                        password
                    })
                    localStorage.setItem('token',response.data.token);
                    navigate('/dashboard');
                }} title='Sign In'/>
                <BottomWarning desc="Don't have an account?" link=" Sign Up" to='/signup'/>
            </div>
        </div>
    )
}

export default Signin