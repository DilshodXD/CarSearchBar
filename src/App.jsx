import cars from './cars.json'
import './App.css'
import { useState } from 'react'

function App() {

  const [query, setQuery] = useState('')
  console.log(query);

  // console.log(cars.filter(car => car.title.includes("mazda")));
  return (
    <div className='main'>
      <div className='search-bar'>
        <input onChange={(e) => setQuery(e.target.value)} className='search' type="text" />
      </div>
      <div className="container">
        <div className="main-items">
          {cars.map((car) => (
            <div className='main-item' key={Date.now}>
              <img className='item-img' src={car.image} alt="car image" />
              <p className='item-name'>{car.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App