import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { useParams } from "react-router-dom";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';





function Lermais() {



    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://json-server-inky-nine.vercel.app/tribal/1")
            .then((response) => {
                setPosts(response.data)
            })
            .catch(() => {
                console.log("Deu errado!")
            })
    })


    return (

        <main>


            <div className="cards" >

                
                        <div className="card">

                            <heade>
                                <h2>{posts.title}</h2>
                            </heade>
                            <div className="line"></div>
                            <p>{posts.preço}</p>

                        </div>
                 

            </div>


        </main>

    )






}
export default Lermais










// function Lermais() {

//     const { id } = useParams()

//     const { register, handleSubmit, formState: { errors }, reset } = useForm({
//         resolver: yupResolver()
//     })

//     useEffect(() => {
//         axios.get(`https://json-server-inky-nine.vercel.app/tribal/${id}`)
//             .then((response) => {
//                 reset(response.data)
//             })

//     }, [])


//     return (
//         <div>
//             <Header />

//             <main>


//                 <div className="cards" >


//                     <div className="card">

//                         <heade>
//                             <input className="labelteste" type="text" name="title" {...register("title")}></input>
//                         </heade>
//                         <div className="line"></div>
//                         <p name="preço" {...register("preço")}></p>

//                     </div>

//                 </div>


//             </main>
//         </div>
//     )
// }
// export default Lermais