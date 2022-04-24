import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../components";
import { Context } from "../../context/Context";
import Group from "./components/Group/Group";

import "./Episodes.scss";

const Episodes: React.FC = () => {
  const { data } = useContext(Context);

  const [episodes, setEpisodes] = useState<any>([]);
  const { name, air_date, episode } = episodes;

  const [id, setID] = useState<number>(1);
  const [results, setResults] = useState<{}>([]);

  useEffect(() => {
    (async function () {
      const gpl = data.episodes.results[id];
      setEpisodes(gpl);

      if (!episode) {
        return;
      }

      const res = await episodes.characters.map((details: {}): object => {
        return details;
      });

      setResults(res);
    })();
  }, [id]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          {" "}
          <span id="title" className=" text-primary">
            {id === 1 ? null : name}
          </span>
        </h1>
        <h5 className="text-center">{id === 1 ? null : air_date}</h5>
        <h5 className="text-center">{id === 1 ? null : episode}</h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
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
