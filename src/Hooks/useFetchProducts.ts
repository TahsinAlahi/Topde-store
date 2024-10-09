import { useEffect, useState } from "react";
import { ProductType } from "../types";

const URL = `https://fakestoreapi.com/products?limit=6`;

function useFetchProducts(): [ProductType[] | [], boolean] {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      setIsLoading(true);
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getProducts();
  }, []);

  return [products, isLoading];
}

export default useFetchProducts;
