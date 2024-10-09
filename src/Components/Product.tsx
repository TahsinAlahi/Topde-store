import { useState } from "react";
import { HeartIcon } from "../../public/icons/Icons";
import StarRating from "./StarRating";
import { ProductType } from "../types";

function Product({ product }: { product: ProductType }) {
  const [isHovered, setIsHovered] = useState(false);
  // TODO: add to provider later
  const [cart, setCart] = useState<ProductType[]>([]);

  function handleAddToCart() {
    console.log(cart);
    setCart((products: ProductType[]) => [...products, product]);
  }

  const imageCardClass = isHovered
    ? "translate-y-0 opacity-100 "
    : "translate-y-1/2 opacity-0 ";

  return (
    <div
      className="w-full aspect-square px-6 pb-8 grid grid-rows-2 gap-7 cursor-pointer shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full relative bg-transparent w-full ">
        <div className="w-full h-full relative">
          <img
            src={product.image}
            alt={product.title}
            className="h-full min-w-14 mx-auto"
          />
          <div className={`image-card ${imageCardClass}`}>
            <div className="flex items-center gap-1 px-2 py-1  bg-black rounded-lg">
              <span className="">Quick look</span>
              <HeartIcon className="p-1" strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 mt-6">
        <h3 className="text-center">{product.title}</h3>
        <StarRating rating={product.rating.rate} />
        <div className="flex items-center justify-between w-3/4  mt-2">
          <div
            className="bg-yellow-400 px-4 py-1  rounded-sm shadow-md"
            onClick={handleAddToCart}
          >
            Add To Cart
          </div>
          <div>${product.price}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
