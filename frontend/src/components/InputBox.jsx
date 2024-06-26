import React from 'react'

function InputBox({title,onChange}) {
    return (
        <div>
            <div className='text-md font-semibold pl-1 pt-2'>
                {title}
            </div>
            <input onChange={onChange} className='w-full p-2 h-8 rounded-md border-gray-400 border'/>
        </div>
    )
}

export default InputBox