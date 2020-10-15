import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Imessage from './features/Components/Imessage';
import Login from './features/Components/Login';
import { auth } from './features/firebase';
import { login, logout, selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser){
        //user is logged in
        dispatch( login ({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }));
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, []) 
  return (
    <div className="app">
      {user ? <Imessage /> : <Login /> }
      
    </div>
  );
}

export default App;
