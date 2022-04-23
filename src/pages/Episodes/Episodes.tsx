/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../components";
import { Context } from "../../context/Context";
import Group from "./components/Group/Group";

import "./Episodes.scss";

const Episodes: React.FC = () => {
  const { data } = useContext(Context);

  let [episodes, setEpisodes] = useState<any>([]);
  let { name, air_date, episode } = episodes;
  let [id, setID] = useState(1);
  let [results, setResults] = useState<any>([]);

  const getData = async () => {
    if (!data) {
      return;
    }

    let gpl = data.episodes.results[id];

    setEpisodes(gpl);

    let res = await episodes.characters.map((details: {}) => {
      return details;
    });

    setResults(res);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Episode:{" "}
          <span id="title" className=" text-primary">
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className="text-center">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
        <h5 className="text-center">
          Number ep: {episode === "" ? "Unknown" : episode}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Ep</h4>
          <Group name="Episode" callback={setID} total={20} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
