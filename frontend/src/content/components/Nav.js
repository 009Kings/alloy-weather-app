import { Link } from 'react-router-dom'

const Nav = (props) => {
  let logout = e => {
    e.preventDefault()
    localStorage.removeItem('weatherUser')
    props.setUser(null)
  }

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
        {props.user ? <li onClick={logout}>Log Out</li> : null}
      </ul>
    </nav>
  );
}

export default Nav;