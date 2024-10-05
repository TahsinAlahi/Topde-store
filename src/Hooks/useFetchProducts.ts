import { useEffect, useState } from "react";

const URL = `https://fakestoreapi.com/products?limit=6`;

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

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
