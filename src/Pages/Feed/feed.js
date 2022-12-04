import React from "react";
import { Link } from 'react-router-dom';

import HeaderMain from '../../Components/HeaderMain/HeaderMain';
import More from '../../Images/more.svg';
import './Feed.css';

function Feed(){
    return(
        <div>
            <HeaderMain />

            <main>
                <div className="cards">
                    <div className="card">
                        <header>
                            <h2>Curso consumindo uma Api</h2>
                            <img src={More}></img>
                        </header>
                        <div className="line"></div>
                        <p>Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla
                            bla Bla bla bla Bla bla blaBla bla blaBla bla blaBla bla bla
                        </p>

                        <div className="btns">
                            <div className="btn-edit">
                                <Link to="/edit">
                                    <button>Edit</button>
                                </Link>
                            </div>

                            <div className="btn-readmore">  
                                <Link to="/lermais">
                                    <button>Ler mais</button>   
                                </Link>                                
                            </div>
                                   
                            <div className="btn-delete">
                                <button>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Feed