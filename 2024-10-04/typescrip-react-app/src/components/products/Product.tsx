interface ProductPropsType {
  title: string;
  description: string;
  price: number;
  outOfStock?: boolean;
};

interface TechProductPropsType extends ProductPropsType {
  techSpecs: string[];
}

export default function Product(props: ProductPropsType) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>€{props.price}</p>
      {props.outOfStock ? <p>Out of stock</p> : <p>In stock</p>}
    </div>
  )
}

