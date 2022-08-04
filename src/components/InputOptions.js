import React from 'react'
import '../styles/InputOptions.css'
function InputOptions({ Icon, title, color }) {
    return (
        <div className='inputOptions'>
            <Icon style={{ color: color }} />
            <span>{title}</span>
        </div>
    )
}

export default InputOptions
