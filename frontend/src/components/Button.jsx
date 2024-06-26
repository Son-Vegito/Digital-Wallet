import React from 'react'

function Button({title,onClick}) {
    return (
        <button onClick={onClick} className='bg-black text-center font-semibold w-full h-9 rounded-md text-white mt-4'>{title}</button>
    )
}

export default Button