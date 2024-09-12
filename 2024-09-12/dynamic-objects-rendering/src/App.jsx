import './App.css';

function Category(props) {
  return (
    <div className='category'>
      <img src={props.image} />
      <h6>{props.title}</h6>
    </div>
  )
}

function App() {

  const categories = [
    {
      image: "https://www.worten.pt/i/385978ef578ba030a3abada994d1cd240c73213f",
      title: "Jardim e Bricolage"
    },
    {
      image: "https://www.worten.pt/i/a6eef9339f9400c5d43b2bfe3187303cf2b38c8b",
      title: "Telemóveis e Smartphones"
    },
  ]

  return (
    <div className="categories">
      {
        categories.map((category) => {
          return <Category
            key={category.title}
            image={category.image}
            title={category.title}
          />
        })
      }
    </div>
  );
}

export default App;
