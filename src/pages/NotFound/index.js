// Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

// Image
import Logo from "svg/blog-logo2.svg";

// Link
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <Header/>

            <section className="container">
                <div className="grid-4 p-0 disappear"></div>
                <div className="grid-4 p-0">
                    <div className="flex-center">
                        <img src={Logo} className="icon-l" alt=""/>
                    </div>
                    <h1 className="h0 color-gradient text-center mt-3">404</h1>
                    <div className="flex-center-column">
                        <h5 className="text-center">Página não encontrada!</h5>
                        <p className="text-center mt-1">A página que você tá procurando não existe ou foi removida. Clique para voltar para o site.
                        </p>
                        <Link to='/' className="btn mt-3 w-100 text-center">Voltar p/ home</Link>
                    </div>
                </div>
                <div className="grid-4 p-0 disappear"></div>
            </section>
            
            <Footer/>
        </>
    );
}

export default NotFound;