import { create } from "zustand";
import { Product } from "../interface/products";

interface Props {
  products: Product[];
  setListProduct: (products: Product) => void;
  setremoveUnitProduct: (products: Product) => void;
  removeAllProducts: () => void;
  removeProduct: (idProduct: number) => void;
}

export const useListProduct = create<Props>((set) => ({
  products: [],
  setListProduct: (newProduct) => {
    set((state) => {
      const searchProduct = state.products.some((i) => i.id === newProduct.id);
      if (searchProduct) {
        const editProduct = state.products.map((i) =>
          i.id === newProduct.id
            ? {
                ...i,
                unit: (i.unit || 1) + 1,
              }
            : i
        );
        return { products: editProduct };
      } else {
        return { products: [...state.products, { ...newProduct, unit: 1 }] };
      }
    });
  },
  setremoveUnitProduct: (newProduct) => {
    set((state) => {
      const searchProductIndex = state.products.findIndex(
        (i) => i.id === newProduct.id
      );

      if (searchProductIndex !== -1) {
        const editProduct = state.products.map((product, index) =>
          index === searchProductIndex
            ? {
                ...product,
                unit: Math.max((product.unit || 1) - 1, 0),
              }
            : product
        );

        const updatedProducts = editProduct.filter(
          (product) => product.unit! > 0
        );
        return { products: updatedProducts };
      } else {
        return { products: [...state.products] };
      }
    });
  },

  removeAllProducts: () => {
    set(() => {
      return { products: [] };
    });
  },

  removeProduct: (idProduct: number) => {
    set((state) => {
      const remove = state.products.filter((i) => i.id !== idProduct);
      return { products: remove };
    });
  },
}));
