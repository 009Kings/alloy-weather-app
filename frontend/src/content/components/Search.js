const Search = (props) => {
  return (
    <section class="search">
      <h3>Find Weather</h3>
      <form onSubmit={props.getResults}>
        <input type="text" placeholder="Search for a City name" onChange={e => props.setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default Search;