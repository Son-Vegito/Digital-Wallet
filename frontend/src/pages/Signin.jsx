import React, { useState } from 'react'

import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

function Signin() {
    
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    return (
        <div className='bg-neutral-700 w-screen h-screen flex justify-center items-center'>
            <div className='bg-neutral-200 w-80 h-120 rounded-md shadow-current shadow-md p-4'>
                <Heading title="Sign In"/>
                <SubHeading desc="Enter your credentials to access your account"/>
                <InputBox title="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <InputBox title='Password' onChange={(e)=>setPassword(e.target.value)}/>
                <Button title='Sign In'/>
                <BottomWarning desc="Don't have an account?" link=" Sign Up" redirect='/signup'/>
            </div>
        </div>
    )
}

export default Signin