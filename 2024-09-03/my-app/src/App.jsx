import './App.css';

const numberRangeChecker = (number) => {
  if (number < 50) {
    return "Under 50";
  } else if (number >= 50 && number <= 100) {
    return "50-100";
  }

  return "Over 100";
}

function App() {
  const numbers = [
    10, 50, 60, 110, 150
  ]
  return (
    <div>
      {
        numbers.map((number) => (
          <p>{number} is {numberRangeChecker(number)}</p>
        ))
      }
    </div>
  );
}

export default App;
