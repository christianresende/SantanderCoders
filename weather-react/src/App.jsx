import React, { useState, useEffect } from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld'
import { api } from './services/api'
import { FaTemperatureHigh, FaWind } from 'react-icons/fa'

function App() {
  const [weather, setWeather] = useState(null)
  const city = "Lavras"

  async function handleGetWeather(){
    const response = await api.get(city)
    console.log(response.data)
    setWeather(response.data)
  }
  
  useEffect(() => {
    handleGetWeather()
  })

  return (
    <div className="App">

      {/* <header>
      <button onClick = {handleGetWeather}>Enviar</button>
      </header> */}

      
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
          <div className="form">
            <div>
              <input type="text" ></input> 
              <button>Enviar</button>
            </div>
          </div>
        </main>
        
      }
    </div>
  )
}

export default App
