import { useState } from 'react'
import Search from '../components/Search'
import Results from '../components/Results'

const Home = (props) => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [place, setPlace] = useState('')

  let getResults = () => {
    fetch(`http://localhost:5000/?q=${query}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.results)
          setPlace(result.placeName)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }

  return (
    <>
      <Search setQuery={setQuery} getResults={getResults} />
      <Results error={error} isLoaded={isLoaded} items={items} place={place} />
    </>
  );
}

export default Home;