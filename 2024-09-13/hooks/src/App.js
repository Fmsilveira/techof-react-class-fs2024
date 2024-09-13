import { useState, useEffect } from 'react';

import './App.css';

function Country(props) {
  return (
    <div className="country">
      <h5>{props.name}</h5>
      <img src={props.img} />
    </div>
  );
}

function CountriesList(props) {
  return (
    <div>
      {
      props.countries
      .filter(country => country.name.common.toLowerCase().includes(props.searchTerm.toLowerCase()))
      .map(
        (country) => {
          return (
            <Country
              key={country.cca2}
              name={country.name.common}
              img={country.flags.png}
            />
          )
        }
      )
      }
    </div>
  )
}

function SearchInput(props) {
  return (
    <input
      type="text"
      placeholder="Search"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(
    () => {
      const getCountries = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        console.log(data);
        setCountries(data);
        setLoading(false);
      }

      getCountries();
    },
    []
  );


  return (
    <div>
      {loading && <p>Loading...</p>}
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <CountriesList
        countries={countries}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;
