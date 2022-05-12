import Nav from '../Nav'

const Header = (props) => {
  return (
    <header>
      <Nav user={props.user} setUser={props.setUser} />
    </header>
  );
}

export default Header;