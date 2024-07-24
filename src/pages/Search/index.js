// Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

// Card
import Card from "pages/Home/Card";

// Parâmetros de URL
import { useParams } from "react-router-dom";

// Hooks
import { useState, useEffect } from "react";

// API
import api from "services/api";

const Search = () => {

    const {word_search} = useParams();
    
    const [word, setWord] = useState(word_search);
    const [search, setSearch] = useState([]);
    const [form, setForm] = useState([]);

    useEffect(() => {

        if(word) {
            api.get(`posts?q=${word}`)
            .then((r) => {
                setSearch(r.data);
            })
        }
        
    }, [word]);

    function handleSearch(e) {
        e.preventDefault();

        setWord(form.search)
    }

    function onChange(event){
        const {value, name} = event.target;
        setForm({...form, [name]:value})
        console.log(form);
    }

    
    return (
        <>
            <Header/>

            <section className="container">

                <h6 className="uppercase color-primary text-center">
                    {search.length} resultados
                </h6>

                <h4 className="text-center"> "{word}"</h4>
                
                <form onSubmit={handleSearch}>
                    <div className="row">
                        <div className="grid-2 disappear"></div>
                        <div className="grid-8 flex-center">
                            <input type="text" name="search" placeholder="Buscar..." onChange={onChange} />
                            <button className="btn ml-2">Buscar</button>
                        </div>
                        <div className="grid-2 disappear"></div>
                    </div>
                </form>
                
                <div className="row">


                {
                    search.map((item) => {
                    return <Card key={item.id} content={item} />
                    })
                }


                </div>
            </section>
            
            <Footer/>
        </>
    );
}

export default Search;