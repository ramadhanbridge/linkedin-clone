import React, { useEffect, useState } from 'react'
import '../styles/Feeds.css'
import CreateIcon from "@material-ui/icons/Create"
import InputOptions from './InputOptions'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Posts from './Posts';
import { db } from '../firebase.js';
import firebase from 'firebase/compat/app';
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';


export default function Feed() {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')
    const user = useSelector(selectUser)
    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])
    const sendPost = (e) => {
        e.preventDefault()
        db.collection('posts').add({
            name: user.name ?? 'Ram N',
            description: user.email ?? 'Ram D',
            message: input ?? 'Ram M',
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }
    return (
        <div className='feed'>
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form action="">
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Type...' />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photos" color='#70b5f9' />
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color='#E7a33e' />
                    <InputOptions Icon={EventNoteIcon} title="Event" color='#c0cbcd' />
                    <InputOptions Icon={CalendarViewDayIcon} title="Write Article" color='#7fc15e' />
                </div>
            </div>

            {/* Posts */}
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
                    return <Posts key={id}
                        name={name}
                        description={description}
                        message={message} />
                })}
            </FlipMove>


        </div>
    )
}
