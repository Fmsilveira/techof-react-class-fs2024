interface ProductPropsType {
  title: string;
  description: string;
  price: number;
  outOfStock?: boolean;
};

interface TechProductPropsType extends ProductPropsType {
  techSpecs: string[];
}
export default function TechProduct(props: TechProductPropsType) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>€{props.price}</p>
      <h2>Tech specs</h2>
      <p>{props.techSpecs}</p>
      {props.outOfStock ? <p>Out of stock</p> : <p>In stock</p>}
    </div>
  )
}
