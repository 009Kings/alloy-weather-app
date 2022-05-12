const ForecastCard = (props) => {
  // TODO: Store preference in Local storage
  // K => F   (K - 273.15) × 9/5 + 32
  // K => C   K - 273.15
  let date = new Date(props.dt * 1000)

  let toF = k => ((k - 273.15) * 9/5 + 32)

  return (
    <div className="forecast-card">
      <h1>
        {date.toLocaleDateString(
          'en-gb',
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }
        )}
      </h1>
      <h3>{props.desc}</h3>
      <h4>High of {Math.round(toF(props.high))}°F</h4>
      <h5>Low of {Math.round(toF(props.low))}°F</h5>
    </div>
  );
}

export default ForecastCard;