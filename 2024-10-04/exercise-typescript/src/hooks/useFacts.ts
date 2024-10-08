import { useState, useEffect } from "react";

type FactType = {
  fact: string;
  length: number;
}
export default function useFacts() {
  const [facts, setFacts] = useState<FactType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://catfact.ninja/facts?page=1")
      .then((response) => response.json())
      .then((response) => {
        const data = response.data as FactType[];
        setFacts(data);
        setIsLoading(false);
      })
  }, []);

  return { facts, isLoading };
}