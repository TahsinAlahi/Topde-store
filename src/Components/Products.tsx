import Spinner from "./Spinner";
import Product from "./Product";
import useFetchProducts from "../Hooks/useFetchProducts";

function Products() {
  const [products, isLoading] = useFetchProducts();

  if (isLoading) {
    return <Spinner />;
  }

  // console.log(products);
  return (
    <div className="grid grid-cols-3 gap-5 min-h-screen w-11/12 mx-auto py-40 ">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
