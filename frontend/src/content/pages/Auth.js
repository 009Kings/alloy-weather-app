import { useState } from 'react'
import { useLocation, Navigate } from 'react-router-dom'

import Signup from '../components/Signup'
import Login from '../components/Login'

const Auth = (props) => {
  const [authed, setAuthed] = useState(localStorage.getItem('weatherUser') ? true : null)
  let location = useLocation()

  if (authed) return <Navigate to="/profile" state={{ from: location }} replace />

  return (
    <>
      <Signup setAuthed={setAuthed} />
      <Login setAuthed={setAuthed} />
    </>
  );
}

export default Auth;