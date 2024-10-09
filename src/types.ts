export interface iconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  color?: string;
  strokeWidth?: string | number;
}

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

export interface ProductState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productInCurt: ProductType[] | any[];
  totalPrice: number;
}

export interface ProductAction {
  type: string;
  payload?: unknown;
}

export interface ProductContextType {
  state: ProductState;
  dispatch: (action: ProductAction) => void;
}
