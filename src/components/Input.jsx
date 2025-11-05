import React from 'react'

const Input = ({ inputType, inputPlaceholder, onInputChange }) => {
  return (
    <input type={inputType} onChange={onInputChange} className='py-[10px] pl-[15px] pr-[8px] placeholder:text-[14px] rounded-md w-full outline-none focus:border-gray-400 border-[1px] border-solid border-gray-400' placeholder={inputPlaceholder}  />
  )
}

export default Input