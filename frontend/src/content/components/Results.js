// TODO: Convert to F or C from Kelvin. Preference stored in Local storage? 
// K => F   (K − 273.15) × 9/5 + 32
// K => C   K − 273.15

const Results = (props) => {
  if (props.items.length === 0 && !props.error) {
    return <div>No results yet!</div>
  } else if (props.error) {
    return <div>Error: {props.error.message}</div>;
  } else if (!props.isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <section>
        <ul>
          {props.items.map((item, i) => (
            <li key={`${props.place}-${item.dt}`}>
              {item.desc}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Results;