import { useProduct } from "../Contexts/ProductContext";
import { ProductType } from "../types";

function CartItems() {
  const { state, dispatch } = useProduct();

  function handleDeleteProduct(product: ProductType) {
    dispatch({ type: "remove_from_cart", payload: product });
  }

  return (
    <>
      {state.productInCurt.length === 0 && <div>No products in the cart</div>}
      {state.productInCurt.map((product) => {
        return (
          <div
            className="flex items-center justify-start gap-2 bg-black text-white w-max mb-2"
            key={product.id}
          >
            <img src={product.image} alt={product.title} className="w-10" />
            <div className="">
              <h4 className="font-semibold tracking-widest">{product.title}</h4>
              <p className="text-base text-gray-600">$ {product.price}</p>
            </div>
            <button
              className="px-3 py-2 bg-gray-800 rounded-full text-xs"
              onClick={() => handleDeleteProduct(product)}
            >
              X
            </button>
          </div>
        );
      })}
      {state.productInCurt.length > 0 && (
        <p className="mt-4">Total: ${state.totalPrice}</p>
      )}
    </>
  );
}

export default CartItems;
