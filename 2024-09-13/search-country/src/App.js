import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function Country(props) {
  return (
    <div className="country">
      <h5>{props.name}</h5>
      <img src={props.img} />
    </div>
  );
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

function CountriesList(props) {
  return (
    <div>
      {
      props.countries
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

function App() {
  const [country, setCountry] = useState({});
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('brasil');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(
    () => {
      const getCountries = async () => {
        try {
          setHasError(false);
          if ('' === searchTerm) {
            return;
          }

          const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);

          if (response.status === 404) {
            setHasError(true);
            return;
          }

          const data = await response.json();
          console.log(data);
          setCountries(data)
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }

      setLoading(true);
      setCountries([]);
      getCountries();
    },
    [searchTerm]
  );

  return (
    <div>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading &&
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      }
      {countries.length > 0 &&
        <CountriesList countries={countries} />
      }
      {
        hasError &&
        <p>{`Pais \"${searchTerm}\" não encontrado`}</p>
      }
    </div>
  );
}

export default App;
