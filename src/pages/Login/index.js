// Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

const Login = () => {
  return (
    <>
      <Header />

      <section className="container">
        <div className="row">
          <div className="grid-4 disappear"></div>
          <div className="grid-4">
            <div className="flex-center">
              <img src="svg/blog-logo2.svg" className="icon-l" alt="" />
            </div>
            <h6 className="text-center mt-2">Olá, faça o login para continuar.</h6>
            <input
              type="text"
              name="user"
              className="mt-1"
              placeholder="Digite seu usuário"
            />
            <input
              type="password"
              name="password"
              className="mt-1"
              placeholder="Digite sua senha"
            />
            <div className="card-danger mt-1">
              <p className="color-red m-2">Olá, isso é uma mensagem de erro.</p>
            </div>
            <div className="card-success mt-1">
              <p className="color-green m-2">
                Olá, isso é uma mensagem de sucesso.
              </p>
            </div>
            <div className="card-warning mt-1">
              <p className="color-yellow m-2">Olá, isso é uma mensagem de aviso.</p>
            </div>
            <div className="card-info mt-1">
              <p className="color-primary m-2">
                Olá, isso é uma mensagem de informação.
              </p>
            </div>
            <button className="btn mt-3 w-100">Entrar</button>
          </div>
          <div className="grid-4 disappear"></div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
