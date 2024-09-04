import './App.css';

const numberRangeChecker = (number) => {
  if (number < 50) {
    return "Under 50";
  } else if (number >= 50 && number <= 100) {
    return "50-100";
  }

  return "Over 100";
}

// Functional component
function App() {
  const numbers = [
    10, 50, 60, 110, 150, 200
  ]
  return (
    <div>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
    </div>
  );
}

// Class component
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>Hello</p>
//         <p>Hello</p>
//         <p>Hello</p>
//       </div>
//     );
//   }
// }

export default App;
