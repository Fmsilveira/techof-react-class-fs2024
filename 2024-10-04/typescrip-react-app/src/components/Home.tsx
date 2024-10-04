import { useState, useEffect } from "react";

import validateAge from "../service/validateAge";
import Product from "./products/Product";
import TechProduct from "./products/TechProduct";

export default function Home() {
  const [age, setAge] = useState<number>(0);
  const [isAdult, setIsAdult] = useState<boolean>(false);

  useEffect(() => {
    setIsAdult(validateAge(age));
  }, [age]);

  return (
    <div>
      <h1>Home</h1>
      <input type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
      {isAdult ? <p>Adult</p> : <p>Kid</p>}

      <Product
        title='Desktop Gaming Victus'
        description="presentamos o Desktop Gaming Victus TG02-1003np, um computador poderoso e elegante que oferece uma experiência de jogo incrível. Com um processador Intel Core i5-13400F e uma arquitetura de CPU Raptor Lake, este desktop proporciona um desempenho rápido e eficiente para todos os teus jogos favoritos."
        price={999.99}
        outOfStock={false}
      />

      <Product
        title='Desktop Gaming Omen'
        description="Omen 25L é um computador de secretária que oferece uma experiência de jogo incrível. Com um processador Intel Core i5-13400F e uma arquitetura de CPU Raptor Lake, este desktop proporciona um desempenho rápido e eficiente para todos os teus jogos favoritos."
        price={899.99}
        outOfStock={true}
      />

      <TechProduct
        title="All-in-One LENOVO IdeaCentre A340-24IWL"
        description="24IRH9-435"
        price={499.99}
        outOfStock={false}
        techSpecs={['Intel Core i5-8265U', '8GB RAM', '256GB SSD', '23.8" FHD']}
      />
    </div>
  );
}