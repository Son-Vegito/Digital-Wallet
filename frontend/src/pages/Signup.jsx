import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

function Signup() {

    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    
    return (
        <div className='bg-neutral-700 w-screen h-screen flex justify-center items-center'>
            <div className='bg-neutral-200 w-80 h-120 rounded-md shadow-current shadow-md p-4'>
                <Heading title="Sign Up"/>
                <SubHeading desc="Enter your information to create an account"/>
                <InputBox title="First Name" onChange={(e)=>setFirstname(e.target.value)}/>
                <InputBox title='Last Name'  onChange={(e)=>setLastname(e.target.value)}/>
                <InputBox title="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <InputBox title='Password'  onChange={(e)=>setPassword(e.target.value)}/>
                <Button title='Sign Up'/>
                <BottomWarning desc="Already have an account?" link=" Sign In" redirect="/signin"/>
            </div>
        </div>
        
    )
}

export default Signup