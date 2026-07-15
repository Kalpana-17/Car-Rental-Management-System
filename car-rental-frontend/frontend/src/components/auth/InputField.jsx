import React from 'react'

const InputField = ({
    label,
    name,
    type = 'text',
    placeholder,
    value,
    onChange
}) => {
  return (
    <div className='input-group-custom'>
        <label className='input-label'>{label}</label>
        <input
            name={name}
            type={type}
            className='input-custome'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </div>
  )
}

export default InputField