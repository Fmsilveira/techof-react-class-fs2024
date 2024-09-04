function TicketDetails(props) {
  return (
    <div>
      <h1>Ticket Details</h1>
      <p>Name: {props.name}</p>
      <p>Gender: {props.gender}</p>
      <p>Seat: {props.seat}</p>
    </div>
  )
}

export default TicketDetails;
// export { TicketDetails };
