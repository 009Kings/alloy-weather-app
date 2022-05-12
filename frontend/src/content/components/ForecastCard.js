const ForecastCard = (props) => {
  // TODO: Store preference in Local storage
  // K => F   (K - 273.15) × 9/5 + 32
  // K => C   K - 273.15

  let date = new Date(props.dt * 1000)
  let toF = k => ((k - 273.15) * 9/5 + 32)

  // How would you know if it was already faved? 

  return (
    <div className="forecast-card">
      <h3>
        {date.toLocaleDateString(
          'en-gb',
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }
          )}
      </h3>
      <h2>{props.desc[0].toUpperCase() + props.desc.slice(1)}</h2>
      <h4>High of {Math.round(toF(props.high))}°F</h4>
      <h5>Low of {Math.round(toF(props.low))}°F</h5>
      <button className="fave"><i class="fa-regular fa-heart"></i></button>
    </div>
  );
}

export default ForecastCard;