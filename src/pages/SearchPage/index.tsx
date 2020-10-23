import React, { useState } from "react";
import SimpleButton from "../../core/components/SimpleButton";
import "./styles.scss";

const SearchPage = () => {
  const [user, setUser] = useState("Usuário Github");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  return (
    <>
      <div className="card-search">
        <h3>Encontre um perfil Github</h3>
        <input
          type="text"
          value={user}
          className="search-input"
          onChange={handleOnChange}
          onFocus={handleFocus}
        />

        <div className="search-button">
          <SimpleButton text="Encontrar" />
        </div>
      </div>
      <div className="card-result">
      </div>
    </>
  );
};

export default SearchPage;
