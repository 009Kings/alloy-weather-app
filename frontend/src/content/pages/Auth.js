import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Signup from '../components/Signup'
import Login from '../components/Login'

const Auth = (props) => {
  const [authed, setAuthed] = useState(localStorage.getItem('weatherUser') ? true : null)
  let navigate = useNavigate()

  useEffect(() => {
    if (authed) {
      props.setUser(localStorage.getItem('weatherUser'))
      navigate('/profile')
    }
  })

  return (
    <>
      <Signup setAuthed={setAuthed} />
      <Login setAuthed={setAuthed} />
    </>
  );
}

export default Auth;