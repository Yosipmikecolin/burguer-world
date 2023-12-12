import "./Tops.css";
import MenuPortada from "../../assets/menu-portada.png";
import { listTop } from "../../utils/list-top";
import { useEffect, useRef, useState } from "react";
import { rangeMax, rangeMin } from "../../utils/ranges";
import { CgEyeAlt, CgShoppingCart } from "react-icons/cg";
import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useProduct } from "../../hooks/details-product";
import { Product } from "../../interface/products";
import { useListProduct } from "../../hooks/products-burguers";

interface Props {
  isOpenCart: boolean;
}

const Tops = ({ isOpenCart }: Props) => {
  const [itemSelect, setItemSelect] = useState(1);
  const ranges = useRef({ min: 0, max: 4 });
  const [loadImage, setLoadImage] = useState<{ [key: string]: boolean }>({});
  const [opened, { open, close }] = useDisclosure(false);
  const { product, setProduct } = useProduct();
  const { setListProduct } = useListProduct();
  const [classAnimate, setClassAnimate] = useState(
    "animate__animated animate__fadeIn"
  );

  const changeItem = (item: number) => {
    if (item !== itemSelect) {
      setItemSelect(item);
      setClassAnimate("animate__animated animate__fadeOut");
      const time = setTimeout(() => {
        ranges.current.min = rangeMin(item);
        ranges.current.max = rangeMax(item);
        setClassAnimate("animate__animated animate__fadeIn");
      }, 1000);

      return () => {
        clearTimeout(time);
      };
    }
  };

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
    <section className="container-tops">
      <div className="baner-black">
        <div className="title-portada">
          <h2>BurgerWorld</h2>
        </div>
        <img src={MenuPortada} />
      </div>

      <section className="content">
        <h1>Hamburguesa de res llanera</h1>
        <p>
          La hamburguesa mas querida por nuestros clientes, donde todos sus
          ingredientes son artesanales y del campo colombiano.
        </p>
        <div className="orden">
          <span>$30.0000</span>
          <button>Ordenar ahora</button>
        </div>
      </section>
      <section className="content-mobil">
        <h1>Hamburguesa de res llanera</h1>
        <p>
          La hamburguesa mas querida por nuestros clientes, donde todos sus
          ingredientes son artesanales y del campo colombiano.
        </p>
        <div className="orden">
          <span>$30.0000</span>
          <button>Ordenar ahora</button>
        </div>
      </section>
      <section className="cards-tops">
        {listTop.slice(ranges.current.min, ranges.current.max).map((item) => (
          <div className={classAnimate} key={item.id}>
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
                    <p>{item.title}</p>
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
                      onClick={() => setListProduct(item)}
                    >
                      <CgShoppingCart />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
        <div className="controls-slider">
          <div
            className={
              itemSelect === 1 ? "item-slider" : "item-slider-disabled"
            }
            onClick={() => changeItem(1)}
          />
          <div
            className={
              itemSelect === 2 ? "item-slider" : "item-slider-disabled"
            }
            onClick={() => changeItem(2)}
          />
          <div
            className={
              itemSelect === 3 ? "item-slider" : "item-slider-disabled"
            }
            onClick={() => changeItem(3)}
          />
        </div>
      </section>

      <section className="cards-tops-mobil">
        {listTop.slice(ranges.current.min, ranges.current.max).map((item) => (
          <div
            className={classAnimate}
            key={item.id}
            style={{ marginBottom: 20 }}
          >
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
                    <p>{item.title}</p>
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
                      onClick={() => setListProduct(item)}
                    >
                      <CgShoppingCart />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
        <div className="controls-slider">
          <div
            className={
              itemSelect === 1 ? "item-slider" : "item-slider-disabled"
            }
            onClick={() => changeItem(1)}
          />
          <div
            className={
              itemSelect === 2 ? "item-slider" : "item-slider-disabled"
            }
            onClick={() => changeItem(2)}
          />
          <div
            className={
              itemSelect === 3 ? "item-slider" : "item-slider-disabled"
            }
            onClick={() => changeItem(3)}
          />
        </div>
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
          color="#ffa500"
          style={{ marginTop: 30 }}
          onClick={() => product && setListProduct(product)}
        >
          Agregar al carrito
        </Button>
      </Modal>
    </section>
  );
};

export default Tops;
