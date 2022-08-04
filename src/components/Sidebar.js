import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/Sidebar.css'
export default function Sidebar() {
    const recentItem = (topic) => {
        return (
            <div className="sidebar_recentItem">
                <span className='sidebar_hash'>#</span>
                <p>{topic}</p>
            </div>
        )

    }
    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1659560555326-b8054f22e870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
                <Avatar className="sidebar_avatar" />
                <h2>Ram Bridge</h2>
                <h4>ram@gmail.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who Viewed you</p>
                    <p className='sidebar_statNumber'>
                        785k
                    </p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on Post</p>
                    <p className='sidebar_statNumber'>
                        514k
                    </p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent topics</p>
                {recentItem('Reactjs')}
                {recentItem('Vuejs')}
                {recentItem('Devops')}
                {recentItem('Database')}
                {recentItem('Laravel')}
            </div>
        </div>
    )
}
