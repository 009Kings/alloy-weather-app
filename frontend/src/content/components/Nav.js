import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/auth">Signup || Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;