import { Link, useLocation } from "react-router-dom";
import { BiBasket } from "react-icons/bi";
import IconMenu from "../../assets/icon-menu.png";
import "./Header.css";
import { useEffect, useState } from "react";
import { useListProduct } from "../../hooks/products-burguers";
import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setOpenCart }: Props) => {
  const [openMenuMobil, setOpenMenuMobil] = useState(false);
  const { pathname } = useLocation();
  const [opened, { open, close }] = useDisclosure(false);
  const {
    products,
    setListProduct,
    setremoveUnitProduct,
    removeAllProducts,
    removeProduct,
  } = useListProduct();
  const [loading, setLoading] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 325) {
      setOpenMenuMobil(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (opened) {
      setOpenCart(true);
    } else {
      setOpenCart(false);
    }
  }, [opened]);

  const totalPay = () => {
    let total = 0;
    const result1 = products.map((item) => {
      return {
        ...item,
        total: +item.price * (item.unit || 1),
      };
    });

    for (let index = 0; index < result1.length; index++) {
      total += result1[index].total;
    }
    return total
      .toFixed(3)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const cantProducts = () => {
    let cant: string[] = [];
    for (let index = 0; index < products.length; index++) {
      const id = products[index].id + "";
      if (!cant.includes(id)) {
        cant = [...cant, id];
      }
    }

    return cant.length;
  };

  const handlePay = () => {
    setLoading(true);
    const time = setTimeout(() => {
      setLoading(false);
      close();
      removeAllProducts();
      toast(
        "Muchas gracias por tu compra, tu pedido se despachará dentro de 40 minutos."
      );
    }, 1500);

    return () => clearTimeout(time);
  };

  return (
    <nav>
      <Toaster
        toastOptions={{
          duration: 4000,
          style: {
            background: "orange",
            color: "#fff",
          },
        }}
      />
      <ul>
        <li>
          <Link to="/" style={{ color: pathname === "/" ? "red" : "black" }}>
            Tops
          </Link>
        </li>
        <li>
          <Link
            to="/saucers"
            style={{ color: pathname === "/saucers" ? "red" : "black" }}
          >
            Ménu
          </Link>
        </li>
        <li>
          <Link
            to="/ingredients"
            style={{ color: pathname === "/ingredients" ? "red" : "black" }}
          >
            Nosotros
          </Link>
        </li>

        <li
          style={{
            fontSize: 30,
            position: "relative",
            top: 5,
            cursor: "pointer",
          }}
          onClick={open}
        >
          {products.length > 0 && (
            <div className="items">{products.length}</div>
          )}
          <BiBasket />
        </li>

        <li
          style={{
            fontSize: 20,
            position: "relative",
            top: 5,
            cursor: "pointer",
          }}
        >
          <img
            src={IconMenu}
            width={30}
            onClick={() => setOpenMenuMobil(true)}
          />
        </li>
      </ul>

      <div className={openMenuMobil ? "menu-mobil-open" : "menu-mobil-close"}>
        <span className="close-menu" onClick={() => setOpenMenuMobil(false)}>
          X
        </span>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => setOpenMenuMobil(false)}
              style={{ color: pathname === "/" ? "red" : "white" }}
            >
              Tops
            </Link>
          </li>
          <li>
            <Link
              to="/saucers"
              onClick={() => setOpenMenuMobil(false)}
              style={{ color: pathname === "/saucers" ? "red" : "white" }}
            >
              Ménu
            </Link>
          </li>
          <li>
            <Link
              to="/ingredients"
              onClick={() => setOpenMenuMobil(false)}
              style={{ color: pathname === "/ingredients" ? "red" : "white" }}
            >
              Nosotros
            </Link>
          </li>
        </ul>
      </div>

      <Modal
        opened={opened}
        onClose={close}
        centered
        title={<h1 style={{ fontSize: 25, fontWeight: "bold" }}>Carrito</h1>}
        size={products.length < 4 ? "xs" : "xl"}
      >
        <section
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {products.length ? (
            products.map((item) => (
              <div className="item-cart" key={item.id}>
                <div
                  className="close-cart"
                  onClick={() => removeProduct(item.id)}
                >
                  X
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  <span style={{ color: "white", fontSize: 40 }}>
                    {item.unit}
                  </span>
                  <img src={item.src} width={100} />
                  <div className="item-cart-info">
                    <span>{item.title}</span>
                  </div>
                </div>
                <span
                  style={{
                    color: "orange",
                    fontSize: 20,
                    textAlign: "center",
                    display: "block",
                  }}
                >
                  ${item.price}
                </span>
                <div
                  style={{
                    marginTop: 15,
                    display: "flex",
                    gap: 10,
                    justifyContent: "center",
                  }}
                >
                  <Button
                    size="xs"
                    color="orange"
                    onClick={() => setremoveUnitProduct(item)}
                  >
                    -
                  </Button>
                  <Button
                    size="xs"
                    color="orange"
                    onClick={() => setListProduct(item)}
                  >
                    +
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <span>Sin productos :(</span>
          )}
        </section>
        {products.length > 0 && (
          <div style={{ marginTop: 20 }}>
            <span>Productos ({cantProducts()})</span>
            <br />
            <span style={{ fontWeight: "bold", color: "orange", fontSize: 30 }}>
              TOTAL: ${totalPay()}
            </span>
            <Button color="orange" size="lg" w={"100%"} onClick={handlePay}>
              {loading ? <div className="spiner-cart" /> : "Pagar compra"}
            </Button>
          </div>
        )}
      </Modal>
    </nav>
  );
};

export default Header;
