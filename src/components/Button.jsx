import React from 'react'

const Button = ({ buttonType, children, buttonColor, buttonBg }) => {
  return (
    <button type={buttonType} className={`${buttonBg} pr-[20px] w-full pl-[20px] pt-[10px] text-[14px] pb-[10px] cursor-pointer rounded-md ${buttonColor}`}>
        {children}
    </button>
  )
}

export default Button