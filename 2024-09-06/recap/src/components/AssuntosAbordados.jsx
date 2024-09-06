function AssuntosAbordados(props) {
  return (
    <div>
      {
        props.assuntosAbordados.map(assunto => <p>{`* ${assunto}`}</p>)
      }
    </div>
  );
}

export default AssuntosAbordados;
