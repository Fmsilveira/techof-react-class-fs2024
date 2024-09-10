import { useState } from 'react';

import './App.css';

function Exercise6() {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 25,
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      {user.age < 18 ?
        <p>Sorry, you are too young to view this information</p>
        : <p>Age: {user.age}</p>}
    </div>
  );
}

function WeatherDisplay(props) {
  switch (props.currentWeatherCondition) {
    case 'sunny':
      return (
        <p>It's sunny outside</p>
      )
    case 'rainning':
      return (
        <p>Bring an umbrella, it is running outside</p>
      )
    case 'snowing':
      return (
        <p>It's snowing outside</p>
      )
  }
}

function App() {
  const [currentWeatherCondition, setCurrentWeatherCondition] = useState('sunny');

  return (
    <div className="App">
      <div>
        <label for="weather-conditions">Choose the current weather: </label>
        <select id="weather-conditions" onChange={(e) => setCurrentWeatherCondition(e.target.value)}>
          <option value="sunny">Sunny</option>
          <option value="rainning">Rainning</option>
          <option value="snowing">Snowing</option>
        </select>
      </div>
      <WeatherDisplay currentWeatherCondition={currentWeatherCondition} />
    </div>
  )
}

export default App;
