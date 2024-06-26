import React from 'react'
import { useNavigate } from 'react-router-dom'

function Appbar({user}) {
    const navigate=useNavigate()
    return (
        <div className='flex justify-between h-25 items-center border-b border-neutral-500 py-3'>
            <div className='font-bold text-3xl items-center'>
                Payments App
            </div>
            <div className='w-24'></div>
            <div className='flex items-center'>
                <div>
                    Hello
                </div>
                <div onClick={()=>navigate('/update')} className='bg-neutral-300 size-7 rounded-full m-2 p-5 font-bold flex justify-center items-center border-neutral-500 border cursor-pointer'>
                    {user[0].toUpperCase()}
                </div>
            </div>
        </div>
    )
}

export default Appbar