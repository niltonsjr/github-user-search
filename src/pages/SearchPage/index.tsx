import React, { useState } from "react";
import SimpleButton from "../../core/components/SimpleButton";
import { GithubUser } from "../../core/types/GithubUser";
import { makeRequest } from "../../core/utils/request";
import ImageLoader from "./components/ImageLoader/ImageLoader";
import InfoLoader from "./components/InfoLoader/InfoLoader";
import dayjs from 'dayjs';
import "./styles.scss";

const SearchPage = () => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [githubUser, setGithubUser] = useState<GithubUser>();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (user !== "") {
      setUser(user);
      setIsClicked(true);

      setIsLoading(true);

      makeRequest({ url: `/${user}` }).then((response) =>
        setGithubUser(response.data))
        .finally(() => {
          setIsLoading(false);
        }
      );      
    }
  };

  return (
    <div className="search-page">
      <form onSubmit={handleSubmit}>
        <div className="card-search">
          <h3>Encontre um perfil Github</h3>
          <input
            type="text"
            value={user}
            placeholder="Usuário Github"
            className="search-input"
            onChange={handleOnChange}
            onFocus={handleFocus}
          />
          <div className="search-button">
            <SimpleButton text="Encontrar" />
          </div>
        </div>
      </form>

      {isClicked && user !== "" && (
        <div className="card-result">
          {isLoading ? (
            <>
              <div className="info-image-and-button">
                <div className="user-image">
                  <ImageLoader />
                </div>
              </div>
              <InfoLoader />
            </>
          ) : (
            <>
              <div className="info-image-and-button">
                <img
                  src={githubUser?.avatar_url}
                  alt={githubUser?.name}
                  className="user-image"
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={githubUser ? githubUser.html_url : ""}
                >
                  <SimpleButton text="Ver perfil" />
                </a>
              </div>

              <div>
                <div className="user-info-top">
                  <h6>Repositorios públicos: {githubUser?.public_repos}</h6>
                  <h6>Seguidores: {githubUser?.followers}</h6>
                  <h6>Seguindo: {githubUser?.following}</h6>
                </div>

                <div className="user-info">
                  <h2>Informações</h2>
                  <div className="info-box">
                    <h4>Empresa:</h4> {githubUser?.company}
                  </div>
                  <div className="info-box">
                    <h4>Website/Blog:</h4>{" "}
                    <a
                      href={githubUser?.blog}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {githubUser?.blog}
                    </a>
                  </div>
                  <div className="info-box">
                    <h4>Localidade:</h4> {githubUser?.location}
                  </div>
                  <div className="info-box">
                    <h4>Membro desde:</h4> {dayjs(githubUser?.created_at).format('DD/MM/YYYY')}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;