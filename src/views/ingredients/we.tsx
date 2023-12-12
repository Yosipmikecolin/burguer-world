import "./we.css";
import Post1 from "../../assets/post-1.jpg";
import Post2 from "../../assets/post-2.jpg";
import Post3 from "../../assets/post-3.jpg";
import Post4 from "../../assets/post-4.jpg";
import Post5 from "../../assets/post-5.jpg";
import Post6 from "../../assets/post-6.jpg";
import { useState } from "react";

const We = () => {

  const [loading, setLoading] = useState<any>({
    imagen1:true
  });

  const loaderImage=(imagen:string) => {
    setLoading({[imagen]:false})
  }

  return (
    <section className="container-we">
      <section className="history">
        {loading.imagen1 &&
        <div className="spinner-we">
          <div className="spiner-cart"/>
        </div>
        }
        <div className="imagen">
          <img src={Post1} alt="Viaje Inicial" onLoad={() => loaderImage("imagen1")}/>
        </div>
        <div className="content">
          <h2>Bienvenido a BurgerWorld: Donde los Sabores se Encuentran</h2>
          <p>
            En el corazón de la bulliciosa ciudad, se encuentra un rincón único
            donde los amantes de las hamburguesas descubren un paraíso
            gastronómico: BurgerWorld. Nuestra historia comenzó hace décadas,
            cuando dos apasionados chefs viajaron por el mundo en busca de los
            sabores más auténticos para crear una experiencia culinaria que
            llevara a los comensales en un viaje alrededor del globo.
          </p>
        </div>
      </section>

      <section className="content-1" style={{ marginTop: 50 }}>
      {loading.imagen2 &&
        <div className="spinner-we">
          <div className="spiner-cart"/>
        </div>
        }
        <div>
          <h2>El Viaje Inicial: Encendiendo la Inspiración</h2>
          <p>
            Todo comenzó con Charlie y Isabella, dos almas aventureras que
            compartían una pasión por la comida y la exploración. Después de
            años de perfeccionar sus habilidades culinarias en las cocinas de
            París, Tokio y Nueva York, decidieron que era hora de crear algo
            único. La idea de BurgerWorld nació durante una noche lluviosa en
            una pequeña calle de París, cuando compartieron la visión de llevar
            los sabores del mundo a la humilde hamburguesa.
          </p>
        </div>

        <div className="imagen-content" style={{ marginTop: 40 }}>
          <img src={Post2} alt="Viaje Inicial" onLoad={() => loaderImage("imagen2")}/>
        </div>
      </section>

      <section className="content-2" style={{ marginTop: 50 }}>
      {loading.imagen3 &&
        <div className="spinner-we">
          <div className="spiner-cart"/>
        </div>
        }
        <div className="imagen-content" style={{ marginTop: 40 }}>
          <img src={Post3} alt="Viaje Inicial" onLoad={() => loaderImage("imagen3")}/>
        </div>
        <div>
          <h2>
            La Búsqueda de los Ingredientes Perfectos: De Calles a Mercados
          </h2>
          <p>
            Armaron sus mochilas y se aventuraron en un viaje épico. Recorrieron
            mercados exóticos, callejones estrechos y cocinas tradicionales,
            absorbiendo la riqueza de culturas culinarias que alimentarían la
            esencia de BurgerWorld. Desde las especias aromáticas de Marrakech
            hasta la carne jugosa de las pampas argentinas, cada ingrediente fue
            seleccionado con amor y cuidado para brindar una experiencia única a
            cada cliente.
          </p>
        </div>
      </section>

      <section className="content-1" style={{ marginTop: 50 }}>
      {loading.imagen4 &&
        <div className="spinner-we">
          <div className="spiner-cart"/>
        </div>
        }
        <div>
          <h2>El Menú: Un Viaje de Sabores</h2>
          <p>
            El menú de BurgerWorld es un testimonio de la diversidad cultural
            que inspiró cada hamburguesa. Desde la "Tokyo Teriyaki" con su
            deliciosa mezcla de sabores orientales, hasta la "Patagonian Grill"
            que evoca los aromas de los asados argentinos, cada hamburguesa es
            una obra maestra única que transporta a los comensales a lugares
            lejanos.
          </p>
        </div>

        <div className="imagen-content" style={{ marginTop: 40 }}>
          <img src={Post4} alt="Viaje Inicial" onLoad={() => loaderImage("imagen4")}/>
        </div>
      </section>

      <section className="content-2" style={{ marginTop: 50 }}>
      {loading.imagen5 &&
        <div className="spinner-we">
          <div className="spiner-cart"/>
        </div>
        }
        <div className="imagen-content" style={{ marginTop: 40 }}>
          <img src={Post5} alt="Viaje Inicial" onLoad={() => loaderImage("imagen5")}/>
        </div>
        <div>
          <h2>Nuestra Comunidad: Más que un Restaurante</h2>
          <p>
            En BurgerWorld, no solo servimos hamburguesas; creamos una comunidad
            de amantes de la buena comida. Nuestro equipo está compuesto por
            personas apasionadas que comparten el deseo de hacer de cada comida
            una experiencia inolvidable. Nos enorgullece ser parte de esta
            ciudad y ofrecer un lugar donde amigos y familias puedan disfrutar
            juntos de una comida excepcional.
          </p>
        </div>
      </section>

      <section className="content-1" style={{ marginTop: 50 }}>
      {loading.imagen6 &&
        <div className="spinner-we">
          <div className="spiner-cart"/>
        </div>
        }
        <div>
          <h2>El Futuro: Expandiendo el Viaje de Sabores</h2>
          <p>
            A medida que avanzamos, seguimos explorando nuevos sabores y
            destinos para llevar a nuestros clientes en un viaje continuo.
            Estamos comprometidos a mantener viva la llama de la creatividad
            culinaria y a seguir siendo el destino preferido para aquellos que
            buscan aventuras gastronómicas. En BurgerWorld, cada hamburguesa
            cuenta una historia, y cada bocado es un viaje. Únete a nosotros
            mientras continuamos explorando los rincones más sabrosos del mundo,
            un sabor a la vez. ¡Bienvenido a BurgerWorld, donde los sabores se
            encuentran y los sueños gastronómicos se hacen realidad!
          </p>
        </div>

        <div className="imagen-content" style={{ marginTop: 40 }}>
          <img src={Post6} alt="Viaje Inicial" onLoad={() => loaderImage("imagen6")}/>
        </div>
      </section>
    </section>
  );
};

export default We;
