import React, { createContext, useContext } from "react";

const ProductContext = createContext<unknown>(null);

function ProductProvider({ children }: { children: React.ReactNode }) {
  return (
    <ProductContext.Provider value={null}>{children}</ProductContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductContext);

  if (context === undefined)
    throw new Error("useProduct is used outside of ProductProvider");

  return context;
}

export { ProductProvider, useProduct };
