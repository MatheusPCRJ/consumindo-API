import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import HeaderMain from '../../Components/HeaderMain/HeaderMain';
import More from '../../Images/more.svg';
import './Inicial.css';



function Feed(){

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        axios.get("https://api-rest-um-banco-de-dado-simples.vercel.app/remedios")
        .then((response) => {
            setPosts(response.data)
        })
        .catch(() => {
            console.log("Deu errado!")
        })
    })


    return(
        <div>
            <HeaderMain />

            <main>
                <div className="cards" >

                    {posts.map((post, key) => {
                        return (    
                            <div className="card" key={key}>
                                <header>
                                    <h2>{post.nome}</h2>
                                    <img src={More}></img>
                                </header>
                                <div className="line"></div>
                                <p>R${post.preco} a caixa.
                                </p>

                                <div className="btns">
                                    <div className="btn-edit">
                                        <Link to={{ pathname: `/edit/${post.id}` }}>
                                            <button>Editar</button>
                                        </Link>
                                    </div>

                                    <div className="btn-readmore">  
                                        <Link to="/lermais">
                                            <button>Ler mais</button>   
                                        </Link>                                
                                    </div>
                                        
                                    <div className="btn-delete">
                                        <button>Deletar</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </main>
        </div>
    )
}
export default Feed