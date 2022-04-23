import React, { useContext, useEffect, useState } from "react";
import { Card, Search } from "../../components";
import { Context } from "../../context/Context";
import "./Home.scss";

const Home: React.FC = () => {
  const { data } = useContext(Context);
  let [results, setResults] = useState<any>([]);
  let [search, setSearch] = useState<string>("");

  const getCharacters = () => {
    if (!data) {
      return;
    }

    const info = data.characters.results.map((itens: any) => {
      const { name, status, species, gender, image } = itens;

      return {
        name,
        status,
        species,
        gender,
        image,
      };
    });
    setResults(info);
  };

  useEffect(() => {
    getCharacters();
  }, [data]);

  return (
    <>
      <div className="App">
        <h1 className="text-center mb-3">Characters</h1>
        <Search setSearch={setSearch} />
      </div>
      <div id="container">
        <Card results={results} />
      </div>
    </>
  );
};

export default Home;
