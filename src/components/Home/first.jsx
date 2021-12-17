/*12:24 [React] #04 Entendendo Estado (STATE), Render e Hooks (useState & useEffect) c/ React.JS*/

import React, { useState } from 'react';
import './style.css';

import Carros from '../Carros';

const Home = () => {

    const [filmes, setFilmes] = useState([])
    const [filme, setFilme] = useState({
        marca: null,
        ano: null,
        modelo: null,        
        camb: null,
        comb: null,
        cor: null,
    });
    const cadastrar = () => {
        setFilmes([filme, ...filmes]);
    };
    return (
        <>
            <div className="container">

                <br />
                <h1 className="lc">Incluir Veículos</h1>

                <div className="container2">

                    <div className="marca_I"><label>Marca{' '}</label>
                    <input id="marca_Mar" onChange={(e) => { setFilme({ ...filme, marca: e.target.value })}} type="text" className="form-control" placeholder="Marca do veículo"></input>
                    </div>

                    <div className="ano_I"><label>Ano{' '}</label>
                        <select onChange={(e) => { setFilme({ ...filme, ano: e.target.value })}}>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                        </select>
                    </div>                   
                   
                    <div className="modelo_I"><label>Modelo{' '}</label><input id="modelo_Mod" onChange={(e) => { setFilme({ ...filme, modelo: e.target.value })}}
                        type="namber" ></input>
                    </div>

                    <div className="camb_I"><label>Cambio{' '}</label>
                    <select onChange={(e) => { setFilme({ ...filme, camb: e.target.value })}}>
                            <option>Autom.</option>
                            <option>Manual</option>
                           
                            
                        </select>
                    
                    </div>

                    <div className="comb_I"><label>Comb.{' '}</label>
                    <select onChange={(e) => { setFilme({ ...filme, comb: e.target.value })}}>
                            <option>Gasol.</option>
                            <option>Etanol</option>
                            <option>Diesel</option>
                            <option>Flex</option>
                            
                        </select>
                    
                    </div>

                    <div className="cor_I"><label>Cor{' '}</label><input id="cor_Cor" onChange={(e) => { setFilme({ ...filme, cor: e.target.value })}}
                        type="namber" ></input>
                    </div>                   

                </div>
            </div>
            <br />
            <button onClick={cadastrar}
                className="btn2">Incluir</button>
            <br />
            <h1 className="estoque">Estoque de Veículos</h1>



            <table className="table table-striped">
                <thead className="thead">
                    <tr>
                        <th className="mar">Marca</th>{' '}
                        <th className="ano">Ano</th>
                        <th className="mod">Modelo</th>                         
                        <th className="comb">Cambio</th>
                        <th className="comb">Comb.</th>
                        <th className="cor">Cor</th>
                        <th className="aco" >Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {filmes.map((marca) => (
                        <Carros marca={marca} />
                    ))}

                </tbody>
            </table>

        </>
    )
}
export default Home;