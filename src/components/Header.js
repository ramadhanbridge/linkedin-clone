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
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function Header() {
    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }
    const user = useSelector(selectUser)
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

                {user ? (<HeaderRightOption avatar={user.photoUrl ? user.photoUrl : user?.email[0]} title="Logout" onClick={logoutOfApp} />) : ''}

            </div>
        </div>
    )
}

export default Header
