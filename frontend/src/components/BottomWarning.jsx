import React from 'react'
import { useNavigate } from 'react-router-dom'

function BottomWarning({desc, link, to}) {
    const navigate=useNavigate();
    return (
        <div className='flex justify-center pt-3'>
            <div className='font-medium text-sm'>
                {desc}
            </div>
            <div className='w-1'></div>
            <div onClick={()=>navigate(`${to}`)} className='font-semibold text-sm underline cursor-pointer'>
                {link}
            </div>
        </div>
    )
}

export default BottomWarning 