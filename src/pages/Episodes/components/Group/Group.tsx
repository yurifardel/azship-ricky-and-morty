import React from "react";
import './Group.scss'
const Group = ({ name, callback, total }: any) => {  
  return (
    <div id="container" className="input-group mb-3">
      <select
        className="form-select"
        id={name}
        onChange={(e) => callback(e.target.value)}
      >
        <option value="1">Choose...</option>  
        {[...Array(total).keys()].map((itens, index)  => {
          return (
            <option value={itens} key={index}>
              {name} - {itens + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Group;
