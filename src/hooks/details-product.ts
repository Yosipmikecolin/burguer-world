import { create } from "zustand";
import { Product } from "../interface/products";

interface Props {
  product: Product | undefined;
  setProduct: (product: Product | undefined) => void;
}

export const useProduct = create<Props>((set) => ({
  product: undefined,
  setProduct: (product) => set({ product }),
}));
