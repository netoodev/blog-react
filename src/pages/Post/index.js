// Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

// Images
import ImgProfile from 'profile/ny.jpg';
import ImgBanner from 'img/05.png';

const Post = () => {
    return (
        <>
            <Header/>

            <section className="container">
                <div className="row">
                    <div className="grid-2 p-0 disappear"></div>
                    <div className="grid-8 p-0 flex-center-column ">
                        <h6 className="uppercase color-primary text-center">Games</h6>
                        <h3 className="text-center">O que tem de novo no PS5?</h3>
                    
                        <div className="flex-center mt-3">
                            <div className="flex-start-row mx-2">
                                <div className="profile">
                                    <img src={ImgProfile} className="profile-img" alt=""/>
                                </div>
                                <div className="ml-1">
                                    <h6 className="color-primary">Násser Yousef Ali</h6>
                                    <h6 className="color-gray">Author</h6>
                                </div>
                            </div>
                            <p className="mx-2">Jul 20, 2024 - 8 min read</p>
                        </div>
                    </div>
                    <div className="grid-2 p-0 disappear"></div>
                </div>

                <div className="row">
                    <div className="grid-12 p-0">
                        <div className="img-post hidden">
                            <img src={ImgBanner} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="grid-12 p-0">
                        <h4>Esse aqui é o primeiro título</h4>
                        <p className="mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam deserunt sed temporibus voluptates vel exercitationem accusantium doloremque vitae nulla placeat culpa a, sapiente amet eveniet obcaecati non? Neque, doloribus sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aut sequi explicabo architecto ad, sapiente accusantium illo debitis inventore voluptates nostrum, voluptatem laudantium ex minus tempore omnis illum maxime id!</p>
                    </div>
                </div>

                <div className="row">
                    <div className="grid-3 p-0 disappear"></div>
                    <div className="grid-6 p-0">
                        <div className="card flex py-4">
                            <div className="profile-big mx-2">
                                <img src={ImgProfile} alt="" className="profile-img"/>
                            </div>
                            <div className="w-75 mx-2">
                                <h6 className="color-primary">Násser Yousef Ali</h6>
                                <h6 className="color-gray">Author</h6>
                                <p className="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis, quis veritatis ab quidem debitis voluptate nesciunt, nemo maxime sit quas eum, repellendus dolorum quam aperiam a ratione voluptatibus possimus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-3 p-0 disappear"></div>
                </div>
            </section>
            
            <Footer/>
        </>
    );
}

export default Post;