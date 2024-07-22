// Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

// useParams
import { useParams } from "react-router-dom";

// Hooks
import { useState, useEffect } from "react";

// API
import api from "services/api";

const Post = () => {

    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);

    const { idPost } = useParams();

    useEffect(() => {
        
        if(idPost){
            api.get("posts/" + idPost)
            .then((response) => {
                setPost(response.data);

                api.get("user/" + response.data.id_user)
                .then((response) => {
                    setUser(response.data);
                })
            });
        }   

    }, []);
    
    return (
        <>
            <Header/>

            <section className="container">
                <div className="row">
                    <div className="grid-2 p-0 disappear"></div>
                    <div className="grid-8 p-0 flex-center-column ">
                        <h6 className="uppercase color-primary text-center">{post.category}</h6>
                        <h3 className="text-center">{post.title}</h3>
                    
                        <div className="flex-center mt-3">
                            <div className="flex-start-row mx-2">
                                <div className="profile">
                                    <img src={user.ImageProfile} className="profile-img" alt=""/>
                                </div>
                                <div className="ml-1">
                                    <h6 className="color-primary">{user.name}</h6>
                                    <h6 className="color-gray">{user.user}</h6>
                                </div>
                            </div>
                            <p className="mx-2">{post.date} - {post.duration} min read</p>
                        </div>
                    </div>
                    <div className="grid-2 p-0 disappear"></div>
                </div>

                <div className="row">
                    <div className="grid-12 p-0">
                        <div className="img-post hidden">
                            <img src={post.imageUrl} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="grid-12 p-0">
                        <h4>{post.title}</h4>
                        <p className="mt-1">{post.content}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="grid-3 p-0 disappear"></div>
                    <div className="grid-6 p-0">
                        <div className="card flex py-4">
                            <div className="profile-big mx-2">
                                <img src={user.ImageProfile} alt="" className="profile-img"/>
                            </div>
                            <div className="w-75 mx-2">
                                <h6 className="color-primary">{user.name}</h6>
                                <h6 className="color-gray">{user.user}</h6>
                                <p className="mt-1">{user.description}</p>
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