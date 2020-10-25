import React, { useState } from "react";
import SimpleButton from "../../core/components/SimpleButton";
import "./styles.scss";

const SearchPage = () => {
  const [user, setUser] = useState('Usuário Github');
  const [inputColor, setInputColor] = useState('#bfbfbf');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
    setInputColor('#000000');
  };

  return (
    <div className="search-page">
      <div className="card-search">
        <h3>Encontre um perfil Github</h3>
        <input
          type="text"
          value={user}
          className="search-input"
          style={{color:inputColor}}
          onChange={handleOnChange}
          onFocus={handleFocus}
        />
        <div className="search-button">
          <SimpleButton text="Encontrar" />
        </div>
      </div>

      <div className="card-result">
        <div className="info-image-and-button">
          <img
            src="https://avatars0.githubusercontent.com/u/4527815?v=4"
            alt="user"
            className="user-image"
          />
          <SimpleButton text="Ver perfil" />
        </div>

        <div className="user-info-text">
          <div className="user-info-top">
            <h6>Repositorios públicos: 62</h6>
            <h6>Seguidores: 127</h6>
            <h6>Seguindo: 416</h6>
          </div>

          <div className="user-info">
            <h2>Informações</h2>
            <div className="info-box">
              <h4>Empresa:</h4> @ZupIT
            </div>
            <div className="info-box">
              <h4>Website/Blog:</h4> https://thewashington.dev
            </div>
            <div className="info-box">
              <h4>Localidade:</h4> @Uberlândia
            </div>
            <div className="info-box">
              <h4>Membro desde:</h4> 19/10/2013
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
