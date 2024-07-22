import starIcon from "svg/icon-star.svg";

// Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

// Components
import Hero from "./Hero";
import Banner from "./Banner";
import Card from "./Card";
import Main from "./Main";

// API
import api from "services/api";

// Hooks
import { useState, useEffect } from "react";

const Home = () => {

  // Variáveis de estado
  const [main, setMain] = useState([]);
  const [mostSeen, setMostSeen] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {

    api.get('posts?star=5&_limit=2&_order=desc')
    .then((response) => {
      setMain(response.data);
    });

    api.get('posts?id=8')
    .then((response) => {
      setBanner(response.data);
    });

    api.get('posts?_limit=3')
    .then((response) => {
      setMostSeen(response.data);
    });

  }, []);

  
  return (
    <>
      <Header/>
      <Hero />

      <section className="container">
        <div className="row">
          <div className="grid-5">
            <img src={starIcon} className="icon-l" alt="Ícone de Destaque" />

            <h3 className="mt-2">
              Os melhores e mais bem votados posts.
            </h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              urna pharetra ut ac, pellentesque. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ornare urna pharetra ut ac,
              pellentesque.{" "}
            </p>
          </div>
          <div className="grid-7">

            {
              main.map((item) => {
                return <Main key={item.id} content={item} />
              })
            }


          </div>
        </div>
      </section>





      <div className="bg-section">
        <section className="container">
          <h3 className="ml-2 mb-3">Mais vistos</h3>
          <div className="row">


          {
            mostSeen.map((item) => {
              return <Card key={item.id} content={item} />
            })
          }


          </div>
        </section>
      </div>

      {
        banner.map((item) => {
          return <Banner key={item.id} content={item} />
        })
      }

      <Footer/>
    </>
  );
};

export default Home;
