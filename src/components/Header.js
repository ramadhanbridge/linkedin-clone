import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LinkedinLogo from '../assets/linkedin.png'
import HeaderRightOption from './HeaderRightOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className='header'>
            <div className="header_left">
                <img src={LinkedinLogo} alt="" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header_right">
                <HeaderRightOption Icon={HomeIcon} title="Home" />
                <HeaderRightOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderRightOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderRightOption Icon={ChatIcon} title="Messaging" />
                <HeaderRightOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderRightOption avatar="https://media-exp1.licdn.com/dms/image/C4D03AQHeuFoeieKUhw/profile-displayphoto-shrink_100_100/0/1645108231212?e=1665014400&v=beta&t=7qd4A0HULsD30Dgj4gI-4o_tHjxFfTwSx7YYUoAEGvY" title="online" />
            </div>
        </div>
    )
}

export default Header
