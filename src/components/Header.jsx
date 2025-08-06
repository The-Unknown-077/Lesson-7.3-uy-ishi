import React from 'react'

const Header = () => {
  return (
    <div className='navbar flex justify-center items-center gap-[10px]'>
        <input className='text-[16px] h-[35px] w-[400px] bg-white rounded-[4px] text-[#222] pl-[5px]' type="text" placeholder='Type here...' />
        <button className='text-[20px] text-white bg-[#222] rounded-[4px] h-[36px] w-[100px] duration-300 hover:bg-[#000]'>Search</button>
    </div>
  )
}

export default Header