import starIcon from "svg/icon-star.svg";

// Components
import Hero from "./Hero";
import Banner from "./Banner";
import Card from "./Card";
import Main from "./Main";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="container">
        <div className="row">
          <div className="grid-5">
            <img src={starIcon} className="icon-l" alt="Ícone de Destaque" />

            <h3 className="mt-2">
              Os melhores e mais bem votados posts do mês.
            </h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              urna pharetra ut ac, pellentesque. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ornare urna pharetra ut ac,
              pellentesque.{" "}
            </p>
          </div>
          <div className="grid-7">


            <Main />
            <Main />


          </div>
        </div>
      </section>





      <div className="bg-section">
        <section className="container">
          <h3 className="ml-2 mb-3">Mais vistos</h3>
          <div className="row">


            <Card/>
            <Card/>
            <Card/>


          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
