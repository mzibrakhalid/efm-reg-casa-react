import React, { useState } from "react";
import { useSelector } from "react-redux";
import { listeContinents } from "./ResourcesJSON";

export default function Q6() {
  const [continent, setContinent] = useState("");
  const [population, setPopulation] = useState("");
  const paysParContinent = useSelector((st) =>
    st.filter(
      (el) =>
        (continent ? el.Continent == continent : true) &&
        (population ? el.Population > population : true)
    )
  );

  return (
    <>
      {/* <div>Q6</div> */}
      <input
        type="text"
        placeholder="population >"
        onChange={(ev) => setPopulation((c) => ev.target.value)}
      />
      <select onChange={(ev) => setContinent((c) => ev.target.value)}>
        {listeContinents.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
      <div className="row">
        {paysParContinent.map((element) => (
          <div key={element.Code} className="card" style={{ width: "18rem" }}>
            <img
              src={element.Image}
              className="card-img-top"
              alt={element.Name}
            />
            <div className="card-body">
              <h5 className="card-title">{element.Name}</h5>
              <p className="card-text">Superficie: {element.SurfaceArea} km²</p>
              <p className="card-text">Population: {element.Population}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
