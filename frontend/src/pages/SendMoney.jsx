import React from 'react'
import InputBox from '../components/InputBox'

function SendMoney() {
    return (        
    <div className='bg-neutral-700 w-screen h-screen flex justify-center items-center'>
        <div className='bg-neutral-200 w-80 h-120 rounded-md shadow-current shadow-md p-4'>
            <div className='font-extrabold text-3xl text-center p-3 pb-12'>
                Send Money
            </div>
            <div>
            <div className='flex'>
                            <div className='bg-neutral-300 size-2 rounded-full m-2 p-5 font-bold text-lg flex justify-center items-center border-neutral-500 border'>
                                {'a'}
                            </div>
                            <div className='flex items-center text-xl font-bold'>   
                                {'user.name'}
                            </div>
                        </div>
            </div>
            <InputBox title='Amount (in Rs.)' placeholder='Enter Amount'/>
            <div className='py-4'>
                <button className='bg-green-600 rounded-md p-1 w-full text-white font-semibold'>Initiate Transfer</button>
            </div>
        </div>
    </div>
    )
}

export default SendMoney