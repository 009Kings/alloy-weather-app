import Nav from '../Nav'

const Header = (props) => {
  return (
    <header>
      <Nav user={props.user} />
    </header>
  );
}

export default Header;