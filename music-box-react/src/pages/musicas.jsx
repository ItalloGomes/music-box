import React from "react";
import ItemMusica from "../components/itemMusica";
import Menu from "../components/menu";

function Musicas() {
    return (
        <>
        <Menu/>

        <div class="container">
            <div class="filter">
                <button class="btn">Adicionar</button>
            </div>
        </div>

        <div class="container">
            <div class="music-boxes">

                <ItemMusica
                    artista="Linkin Park"
                    musica="In the end"
                    genero="Rock do bão"
                    ano='0'
                    id='1'
                />
                <ItemMusica
                    artista="Guns and Roses"
                    musica="Paradise City"
                    genero="Rockão"
                    ano='1'
                    id='2'
                />
                <ItemMusica/>

            </div>
        </div>
        </>
    );
}

export default Musicas;