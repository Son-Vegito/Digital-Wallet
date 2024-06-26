import React from 'react'
import { useNavigate } from 'react-router-dom'

function BottomWarning({desc, link, redirect}) {
    const navigate=useNavigate();
    return (
        <div className='flex justify-center pt-3'>
            <div className='font-semibold text-sm'>{desc}</div>
            <div onClick={()=>navigate(`${redirect}`)} className='font-semibold text-sm underline cursor-pointer'>{link}</div>
        </div>
    )
}

export default BottomWarning