// Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

// Logo
import logo from "svg/blog.svg";

const About = () => {
  return (
    <>
      <Header />

      <section className="container">
        <div className="row">
          <div className="grid-6">
            <h1 className="h0">
              blog<span>.</span>
            </h1>
            <p className="mt-1">
              O Blog é um projeto desenvolvido em React.js para o curso FrontPUSH. Clique abaixo para saber de mais informações.
            </p>
            <a href="#" className="btn mt-4">
              Saber mais
            </a>
          </div>
          <div className="grid-6">
            <img src={logo} alt="Logo blog" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
