import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import '../styles/Posts.css'
import InputOptions from './InputOptions'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
const Posts = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div className='post' ref={ref}>
            <div className="post_header">
                <Avatar />
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>

            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>
            <div className="post_button">
                <InputOptions Icon={ThumbUpAltIcon} title="Like" color="gray" />
                <InputOptions Icon={ChatBubbleOutlineIcon} title="Comment" color="gray" /><InputOptions Icon={ShareIcon} title="Share" color="gray" /><InputOptions Icon={SendIcon} title="Send" color="gray" />
            </div>
        </div>
    )
})

export default Posts
