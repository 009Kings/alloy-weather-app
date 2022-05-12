import ForecastCard from './ForecastCard'

const Results = (props) => {
  if (props.items.length === 0 && !props.error) {
    return <div>No results yet!</div>
  } else if (props.error) {
    return <div>Error: {props.error.message}</div>;
  } else if (!props.isLoaded) {
    return <div>Loading...</div>;
  } else {
    let forecasts = props.items.map((item, i) => (
      <ForecastCard key={`${props.place}-${item.dt}`} {...item} />
    ))
    return (
      <section className="results">
        <h2>Results for {props.place}</h2>
        <div className="results-today">
          {forecasts[0]}
        </div>
        <div className="results-future">
          {forecasts.slice(1)}
        </div>
      </section>
    );
  }
}

export default Results;