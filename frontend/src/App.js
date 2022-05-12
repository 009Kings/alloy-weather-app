import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'

import Header from './content/components/wrappers/Header'
import Footer from './content/components/wrappers/Footer'
import Content from './content/Content'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Content />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
