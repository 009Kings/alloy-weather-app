import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Auth from './pages/Auth'
import Profile from './pages/Profile'

const Content = (props) => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/auth" element={<Auth setUser={props.setUser} />} />
      <Route path="/profile" element={!props.user ? <Navigate to="/auth" replace /> :  <Profile />} />
    </Routes>
  );
}

export default Content;