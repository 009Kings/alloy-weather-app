import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { useEffect, useState } from 'react'

import Header from './content/components/wrappers/Header'
import Footer from './content/components/wrappers/Footer'
import Content from './content/Content'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    let isUser = localStorage.getItem('weatherUser')
    if (isUser) setUser(isUser)
  }, [user])

  return (
    <Router>
      <div className="App">
        <Header user={user}/>
        <main>
          <Content user={user} setUser={setUser} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
