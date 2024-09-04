import TicketDetails from './TicketDetails';

function App(props) {
  const passengers = [
    {
      name: "John Doe",
      gender: "Mr",
      seat: "14M",
    },
    {
      name: "Marie Doe",
      gender: "Ms",
      seat: "13M",
    },
    {
      name: "Marie Doe",
      gender: "Ms",
      seat: "13M",
    }
  ];

  return (
    <div>
      {
        passengers.map((passenger) => {
          return (
            <TicketDetails 
              name={passenger.name}
              gender={passenger.gender}
              seat={passenger.seat}
            />
          )
        })
      }
    </div>
  );
}

export default App;
