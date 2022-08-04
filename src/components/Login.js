import React, { useState } from 'react'
import { login } from '../features/userSlice'
import { auth } from '../firebase'
import '../styles/Login.css'
import { useDispatch } from 'react-redux'
function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [photoUrl, setPhotoUrl] = useState('')
    const dispatch = useDispatch()

    const register = () => {
        if (!name) { return alert('Name is required') };
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: photoUrl,

            }).then(() => {
                dispatch(login({
                    name: name,
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    photoUrl: photoUrl
                }))
            })
        })
    }
    const loginToApp = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    name: name,
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    photoUrl: photoUrl
                }))
            })
    }
    return (
        <div className='login'>
            <img src="https://blogs.va.gov/VAntage/wp-content/uploads/2019/05/1280px-LinkedIn_Logo.svg_.png" alt="" />

            <form>
                <input type="text" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Photo Url" value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?
                <span className='login_register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
