import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>
          {!props.user ?
          <Link to="/auth">Signup || Login</Link> :
          <Link to="/profile">Account</Link>
          }
        </li>
        {props.user ? <li><Link to="/logout">Log Out</Link></li> : null}
      </ul>
    </nav>
  );
}

export default Nav;