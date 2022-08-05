import React, { useEffect } from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { selectUser, login, logout } from './features/userSlice';
import { useSelector, useDispatch } from 'react-redux'
import Login from './components/Login';
import { auth } from './firebase';
import Widgets from './components/Widgets';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          photoUrl: userAuth.photoUrl,
          name: userAuth.name
        }))
      } else {
        dispatch(logout())
      }
    })
  },
    [])
  return (
    <div className="app">
      <Header />
      {!user ? (<Login />) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}


    </div>
  );
}

export default App;
