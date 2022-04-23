import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "./Card.scss";

const ContainerCard = ({ children }: any) => {
  return <div className="children">{children}</div>;
};

const Card = ({ results }: any) => {
  const { loading } = useContext(Context);

  return loading ? (
    <h1>Carregando...</h1>
  ) : (
    <ContainerCard>
      {results.map((itens: any, index: React.Key) => {
        return (
          <div key={index} className="card ">
            <img className="img" src={itens.image} alt="" />
            <div className="details fs-5 fw-bold mb-4">
              <h1>{itens.name}</h1>
              <h3>{itens.status}</h3>
              <h3>{itens.species}</h3>
              <h3>{itens.gender}</h3>
            </div>
          </div>
        );
      })}
    </ContainerCard>
  );
};

export default Card;
