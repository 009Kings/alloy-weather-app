import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Auth from './pages/Auth'
// import Profile from './pages/Profile'

const Content = (props) => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      {/* TODO: Make that restricted */}
      {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
  );
}

export default Content;