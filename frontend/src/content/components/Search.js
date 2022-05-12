const Search = (props) => {
  return (
    <section class="search">
      <h3>Find Weather</h3>
      <input type="text" placeholder="Search for a City name" onChange={e => props.setQuery(e.target.value)} />
      <button onClick={props.getResults}>Search</button>
    </section>
  );
}

export default Search;