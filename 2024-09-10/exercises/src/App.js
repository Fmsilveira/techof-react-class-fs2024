import { useState, useEffect } from 'react';

import './App.css';


function App() {
  const [currentWeatherCondition, setCurrentWeatherCondition] = useState('sunny');
  const [user, setUser] = useState({ id: 1, name: 'John' });
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCars = async () => {
      const response = await fetch('https://api.example.com/weather' + user.id);
      const data = await response.json();
      console.log(data);

      setTimeout(() => {
        setCars(data);
      }, 1000);
      setLoading(false);
    };

    getCars();
  }, []);

  return (
    <div className="header">
        {
          cars.map(car => (
            <div class="row">
            <div>{car.name}</div>
            <div>{car.year}</div>
            </ div>
          ))
        }

    </div>
  )
}

export default App;
