import React, { createContext, useContext, useReducer } from "react";
import { ProductType } from "../Hooks/useFetchProducts";

interface ProductState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productInCurt: ProductType[] | any[];
}

interface ProductAction {
  type: string;
  payload: unknown;
}

const initialState: ProductState = {
  productInCurt: [],
};

function reducer(state: ProductState, action: ProductAction) {
  switch (action.type) {
    case "add_to_cart":
      return {
        ...state,
        productInCurt: [...state.productInCurt, action.payload],
      };
    case "remove_from_cart":
      return {
        ...state,
        productInCurt: state.productInCurt.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      throw new Error("Invalid action type");
  }
}

const ProductContext = createContext<unknown>(null);

function ProductProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer<
    React.Reducer<ProductState, ProductAction>
  >(reducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductContext);

  if (context === undefined)
    throw new Error("useProduct is used outside of ProductProvider");

  return context;
}

export { ProductProvider, useProduct };
