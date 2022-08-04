import { Avatar } from '@material-ui/core'
import React from 'react'

function HeaderRightOption({ avatar, Icon, title, onClick }) {
    return (
        <div onClick={onClick} className='headerOption '>
            {Icon && <Icon className="headerOption_icon" />}
            {avatar && <Avatar className="headerOption_icon" src={avatar} />}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}

export default HeaderRightOption
