import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../Components/Header/Header";
import { useForm } from 'react-hook-form';
import './Post.css';


function Post(){

    const { register, handleSubmit, formState: { erros }} = useForm()

    const addPost = x => console.log(x);

    return(
        <div>
            <Header />

            <main>
                <div className="card-post">
                    <h1>Criar postagem</h1>
                    <div className="line-post"></div>
                    
                    <div className="card-body-post">

                        <form onSubmit={handleSubmit(addPost)}>
                            <div className="fields">
                                <label>Título</label>
                                <input type="text" name="title" {...register("title")} />

                                <label>Descrição</label>
                                <input type="text" name="description" {...register("description")} />

                                <label>Conteúdo</label>
                                <textarea type="text" name="content" {...register("content")} ></textarea>

                                <div className="btn-post">
                                    <button type="submit">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </main>

            
        </div>
    )
}
export default Post