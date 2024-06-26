import React from 'react'
import Appbar from '../components/Appbar'
import Button from '../components/Button'

function Dashboard() {

    let users=[{
        name:"user1"
    },{
        name:"dev"
    }]

    return (        
    <div className='bg-neutral-700 w-screen h-screen flex justify-center items-center'>
        <div className='bg-neutral-200 h-120 px-4 pb-4 rounded-md shadow-current shadow-md'>
            <Appbar user="dev"/>
            
            <div className='font-bold pt-4 text-lg'>
                Your Balance ₹10000
            </div>
            <div className='py-2 font-bold text-lg'>
                Users
            </div>
            <div className='pb-2.5'>
                <input placeholder='Search Users' className='w-full p-2 h-8 rounded-md border-gray-400 border font-semibold'/>
            </div>
            <div>
                {users.map((user)=>{
                    return(
                    <div className='flex justify-between p-0.5'>
                        <div className='flex'>
                            <div className='bg-neutral-300 size-2 rounded-full m-2 p-5 font-bold flex justify-center items-center border-neutral-500 border'>
                                {user.name[0].toUpperCase()}
                            </div>
                            <div className='flex items-center text-lg font-semibold'>   
                                {user.name}
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <button className='bg-black text-white rounded-md p-2 text-sm font-semibold'>
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