function Products() {
  const products = [
    {
      name: 'Product 1',
      description: 'Description of product 1',
      price: '$10.99'
    },
    {
      name: 'Product 2',
      description: 'Description of product 2',
      price: '$24.99'
    },
    {
      name: 'Product 3',
      description: 'Description of product 3',
      price: '$15.49'
    },
  ];
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <div
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            {product.name}
          </div>
          <div>{product.description}</div>
          <div
            style={{
              color: 'red',
            }}
          >
            {product.price}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
