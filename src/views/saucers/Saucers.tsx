import { useEffect, useState } from "react";
import { listSaucers } from "../../utils/list-saucers";
import { CgEyeAlt, CgShoppingCart } from "react-icons/cg";
import "./Saucers.css";
import { useDisclosure } from "@mantine/hooks";
import { useProduct } from "../../hooks/details-product";
import { Button, Modal } from "@mantine/core";
import { Product } from "../../interface/products";
import { useListProduct } from "../../hooks/products-burguers";
import IconCheck from "../../assets/icon-check.png";

interface Props {
  isOpenCart: boolean;
}

const Saucers = ({ isOpenCart }: Props) => {
  const [loadImage, setLoadImage] = useState<{ [key: string]: boolean }>({});
  const [opened, { open, close }] = useDisclosure(false);
  const { product, setProduct } = useProduct();
  const { products, setListProduct } = useListProduct();

  const loaderImage = (id: number) => {
    setLoadImage((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const openModal = (product: Product) => {
    setProduct(product);
    open();
  };

  useEffect(() => {
    if (isOpenCart) {
      close();
    }
  }, [isOpenCart]);

  return (
    <section className="container-saucers">
      <div className="baner-saucers">
        <h1>HAMBURGUESAS DELICIOSAS DEL CAMPO</h1>
        <h3>Todos nuestros tipos de hamburguesas</h3>
      </div>

      <section className="container-cards">
        {listSaucers.map((item) => (
          <div key={item.id}>
            <div className="card">
              <img
                src={item.src}
                width={150}
                onLoad={() => loaderImage(item.id)}
              />
              {!loadImage[item.id] && <div className="spiner-card" />}
              {loadImage[item.id] && (
                <>
                  <h2>$ {item.price}</h2>
                  <div className="description">
                    <p style={{ marginTop: 20 }}>{item.title}</p>
                    <span
                      style={{
                        color: "orange",
                        marginTop: 10,
                        display: "block",
                      }}
                    >
                      {item.g} G
                    </span>
                    <div className="icon-eyes" onClick={() => openModal(item)}>
                      <CgEyeAlt />
                    </div>

                    <div
                      className="icon-cart"
                      onClick={() =>
                        !products.some((i) => i.id === item.id) &&
                        setListProduct(item)
                      }
                    >
                      {products.some((i) => i.id === item.id) ? (
                        <img src={IconCheck} width={30} />
                      ) : (
                        <CgShoppingCart />
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </section>

      <Modal
        opened={opened}
        onClose={close}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <h1 className="title-modal">{product?.title}</h1>
        <h1 style={{ fontWeight: "bold", color: "#527853" }}>
          $ {product?.price}
        </h1>

        <div className="image-modal">
          <img src={product?.src} width={200} />
        </div>
        <h1 style={{ fontWeight: "bold", marginTop: 10, color: "orange" }}>
          {product?.g} G
        </h1>
        <p className="description-modal">{product?.description}</p>
        <ul>
          {product?.ingredients.map((i, index) => (
            <li
              key={index}
              style={{ fontWeight: "bold", marginLeft: 15, color: "#382e2d" }}
            >
              {i}
            </li>
          ))}
        </ul>
        <Button
          disabled={products.some((i) => i.id === product?.id)}
          color="#ffa500"
          style={{ marginTop: 30 }}
          onClick={() => product && setListProduct(product)}
        >
          {products.some((i) => i.id === product?.id)
            ? "Producto agregado al carrito"
            : "Agregar al carrito"}
        </Button>
      </Modal>
    </section>
  );
};

export default Saucers;
