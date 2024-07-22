// Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

// Images
import ImgProfile from 'profile/ny.jpg';

const Profile = () => {
    return (
        <>
            <Header/>

            <section className="container">
                <div className="row">
                    <div className="grid-6">
                        <div className="flex-start-row">
                            <div className="profile-big">
                                <img src={ImgProfile} className="profile-img" alt=""/>
                            </div>
                            <div className="ml-3">
                                <h3>Násser Yousef Ali</h3>
                                <h6 className="color-gray">@nasseruousef</h6>
                            </div>
                        </div>
                        <p className="mt-3">
                            Olá! Seja bem-vindo ao blog. Compartilhe conhecimento.
                        </p>
                    </div>
                    <div className="grid-6 flex-center">
                        <a href="#" className="btn">Meus Dados</a>
                        <a href="#" className="btn ml-3">Adicionar post</a>
                    </div>
                </div>
            </section>

            <section class="container">
                <h3>Adicionar post</h3>
                <p class="mt-1">Preencha os campos abaixo para adicionar um novo post ao blog.</p>

                <form>
                    <div class="row">
                        <div class="grid-3 p-0">
                        <label for="date"><h6>Data</h6></label> 
                        <input type="date" id="date" name="date" class="mt-1"/>
                        </div>
                        <div class="grid-3 p-0">
                            <label for="category"><h6>Categoria</h6></label> 
                            <select id="category" name="category" class="mt-1" >
                                <option selected disabled>Selecione a categoria</option>
                                <option value="Tecnologia">Tecnologia</option>
                                <option value="Games">Games</option>
                                <option value="Cinema">Cinema</option>
                                <option value="Fotografia">Fotografia</option>
                            </select>
                        </div>
                        <div class="grid-6 p-0">
                            <label for="date"><h6>Título</h6></label> 
                            <input type="text" id="title" name="title" class="mt-1"/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="grid-9 p-0">
                            <label for="resume"><h6>Resumo do post</h6></label> 
                            <input type="text" id="resume" name="resume" class="mt-1"/>
                        </div>
                        <div class="grid-3 p-0">
                            <label for="duration"><h6>Duração</h6></label> 
                            <select id="duration" name="duration" class="mt-1" >
                                <option selected disabled>Selecione a duração</option>
                                <option value="5">5 min</option>
                                <option value="7">7 min</option>
                                <option value="10">10 min</option>
                                <option value="15">15 min</option>
                            </select>
                        </div>
                    </div>

                    <div class="row">
                        <div class="grid-12">
                            <label for="description"><h6>Descrição</h6></label>
                            <textarea class="mt-1 w-100" name="description" id="description" rows="10"></textarea>
                        </div>
                    </div>

                    <div class="row flex-end-row">
                        <button class="btn mr-2">Adicionar</button>
                    </div>
                    
                </form>
            </section>
            
            <Footer/>
        </>
    );
}

export default Profile;