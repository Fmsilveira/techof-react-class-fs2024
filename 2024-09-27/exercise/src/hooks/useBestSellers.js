import { useState, useEffect } from 'react';

export default function useBestSellers() {
  const [bestSellers, setBestSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await fetch('http://localhost:3001/');
        const { data: { best_sellers: bestSellers } } = await response.json();
        console.log('bestSellers:', bestSellers);
        setBestSellers(bestSellers);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBestSellers();
  }, []);

  return { bestSellers, isLoading };
}
