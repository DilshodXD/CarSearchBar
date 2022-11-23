import cars from './cars.json'
import './App.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react'
import 'react-lazy-load-image-component/src/effects/opacity.css';

function App() {
  const [query, setQuery] = useState('')
  let obj = []

  for (const car of cars) {
    
    if (query == '' && car.start_production !== undefined) {
      obj.push(car)
    }

    let splited = car.title.toLocaleLowerCase().split(' ')
    if (query.toLocaleLowerCase() == splited[0] && car.start_production !== undefined) {
      obj.push(car)
    }
  }

  // console.log(cars.filter(car => car.title.includes("mazda")));
  return (
    <div className='main'>
      <div className='search-bar'>
        <input onChange={(e) => setQuery(e.target.value)} className='search' type="text" />
      </div>
      <div className="container">
        <div className="main-items">
          {obj
            .sort((a, b) => a.start_production - b.start_production)
            .sort()
            .reverse()
            .map(car => (
              <div className='main-item' key={Date.now}>
                <LazyLoadImage effect="opacity" className='item-img' src={car.image} alt="car image" />
                <p className='item-name'>{car.title}</p>
                <p className='item-name'>{car.start_production}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}



export default App