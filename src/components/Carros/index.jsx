import React from 'react';

import './style.css'

const Carros = ({marca}) => {
    


    const mostrarNome = () => {
        

    }

    return (
        <tr className="table table-striped">
            
            <td>{marca.marca}</td>
            <td>{marca.ano}</td>            
            <td>{marca.modelo}</td>          
            <td>{marca.camb}</td>          
            <td>{marca.comb}</td>          
            <td>{marca.cor}</td>
           
            
            <td>
                <button className="btn" onClick={mostrarNome}>Informações</button>{' '}
                <button className="bta" onClick={Carros}>Excluir</button>
            </td>
        </tr>
    
);

};
export default Carros;