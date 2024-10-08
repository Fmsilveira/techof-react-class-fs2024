const styles = {
  img: {
    width: '100px',
  }
}

export default function BestSellerProduct(props) {
  return (
    <div key={props.key}>
      <h4>{props.productTitle}</h4>
      <p>{props.productPrice}</p>
      <img src={props.productPhoto} alt={props.productTitle} style={styles.img}/>
    </div>
  );
}