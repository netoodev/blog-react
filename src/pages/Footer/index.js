/* eslint-disable jsx-a11y/anchor-is-valid */
import logoFacebook from "svg/icon-facebook.svg";
import logoInstagram from "svg/icon-instagram.svg";
import logoTwitter from "svg/icon-twitter.svg";
import logoYoutube from "svg/icon-youtube.svg";

import logo from "svg/blog-logo2.svg";

const Footer = () => {
    return(
        <footer>
            <section className="container"> 
                <div className="flex-center">
                    <img src={logo} className="icon-l" alt=""/>
                </div>
                <div className="row bb-black py-4">
                    <div className="grid-3 p-0">
                        <h4>Posts</h4>
                        <ul className="footer-menu">
                            <li className="mt-2"><a href="#"><p>Mais vistos</p></a></li>
                            <li className="mt-2"><a href="#"><p>Mais comentados</p></a></li>
                            <li className="mt-2"><a href="#"><p>Mais populares</p></a></li>
                            <li className="mt-2"><a href="#"><p>Mais recentes</p></a></li>
                        </ul>
                    </div>
                    <div className="grid-3 p-0">
                        <h4>Categorias</h4>
                        <ul className="footer-menu">
                            <li className="mt-2"><a href="#"><p>Tecnologia</p></a></li>
                            <li className="mt-2"><a href="#"><p>Games</p></a></li>
                            <li className="mt-2"><a href="#"><p>Fotografia</p></a></li>
                            <li className="mt-2"><a href="#"><p>Cinema</p></a></li>
                        </ul>
                    </div>
                    <div className="grid-6 p-0">
                        <h4>Quer ser avisado dos novos posts do blog?</h4>
                        <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. </p>
                        <div className="flex">
                            <input type="email" name="email" id="email" placeholder="Digite seu e-mail aqui"/>
                            <button className="btn ml-2">Cadastrar</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="grid-9 p-0">
                        <p>2024 | Todos os direitos reservados.</p>
                    </div>
                    <div className="grid-3 p-0 flex">
                        <ul className="footer-menu flex-start-row">
                            <li className="mx-1"><a href="#" style={{display: 'inline-block'}} className="flex-center"><img src={logoFacebook} alt="" className="icon-s"/></a></li>
                        </ul>
                        <ul className="footer-menu flex-start-row">
                            <li className="mx-1"><a href="#" style={{display: 'inline-block'}} className="flex-center"><img src={logoInstagram} alt="" className="icon-s"/></a></li>
                        </ul>
                        <ul className="footer-menu flex-start-row">
                            <li className="mx-1"><a href="#" style={{display: 'inline-block'}} className="flex-center"><img src={logoYoutube} alt="" className="icon-s"/></a></li>
                        </ul>
                        <ul className="footer-menu flex-start-row">
                            <li className="mx-1"><a href="#" style={{display: 'inline-block'}} className="flex-center"><img src={logoTwitter} alt="" className="icon-s"/></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;