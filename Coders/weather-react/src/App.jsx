import React, { useState, useEffect } from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld'
import { api } from './services/api'
import { FaTemperatureHigh, FaWind } from 'react-icons/fa'

function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("")

  async function handleGetWeather(event){
    event.preventDefault()
    const response = await api.get(city)
    console.log(response.data)
    setWeather(response.data)
  }
  
  useEffect(() => {
    // handleGetWeather()
  }, [])

  return (
    <div className="App">

      {/* <header>
      <button onClick = {handleGetWeather}>Enviar</button>
      </header> */}
      <header>
      
      </header>
      
      {weather &&
        <main>
          {/* <p>{JSON.stringify(weather)}</p> */}

          <h1>{city}</h1>

          <section className="current-weather">
            <h2>Current Weather</h2>

            <p>{weather.temperature}</p>
            <p>{weather.description}</p>
            
          </section>

          <section className="forecast">
            <h2>Forecast</h2>
            
            <ol>
            {
              weather.forecast.map(day =>
                <li>
                  <div>
                    <FaTemperatureHigh/>
                    <p>{day.temperature}</p>
                  </div>
                  <div>
                    <FaWind />
                    <p>{day.wind}</p>
                  </div>
                </li>
                )
            }
            </ol>
           
          </section>
          
        </main>
        
      }
      <div className="form">
            <div>
              <form onSubmit={handleGetWeather}>
                <input 
                type="text" value={city}
                onChange={(event) => setCity(event.target.value)}
                />
                <button>Enviar</button> 
              </form>
              
            </div>
          </div>
    </div>
  )
}

export default App
