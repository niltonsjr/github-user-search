import React from "react";
import "./styles.scss";

const Home = () => (
  <>
    <div>
      <h6 className="home-title">
        Desafio do Capítulo 3, <br /> Bootcamp DevSuperior
      </h6>
    </div>
    <div>
      <p className="home-text">
        Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br /> 
        Favor observar as instruções passadas no capítulo sobre a elaboração <br />
        deste projeto. <br /> 
        Este design foi adaptado a partir de Ant Design System for
        Figma, de <br /> 
        Mateusz Wierzbicki: <a href="mailto:antforfigma@gmail.com">antforfigma@gmail.com</a>
      </p>      
    </div>
    <button className="home-button">Começar</button>
  </>
);

export default Home;
