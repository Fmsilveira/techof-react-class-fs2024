import { useState, useEffect } from "react";

export default function useFacts() {
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://catfact.ninja/facts?page=1")
      .then((response) => response.json())
      .then((response) => {
        const { data } = response;
        setFacts(data);
        setIsLoading(false);
      })
  }, []);

  return { facts, isLoading };
}