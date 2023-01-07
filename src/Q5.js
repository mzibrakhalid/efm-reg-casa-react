import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AjouterVille, ModifierPopulation, PaysStore } from "./store";

export default function Q5() {
  const [PaysChoisi, setPaysChoisi] = useState("");
  const [ville, setVille] = useState("");
  const listePays = useSelector((state) =>
    state.map((country) => {
      return { Code: country.Code, Name: country.Name };
    })
  );

  return (
    <>
      <select onChange={(ev) => setPaysChoisi((st) => ev.target.value)}>
        {listePays.map((e) => (
          <option value={e.Code}>{e.Name}</option>
        ))}
      </select>
      <br />
      <input
        name="Name"
        placeholder="Name"
        onChange={(ev) => setVille({ ...ville, Name: ev.target.value })}
      />
      <br />
      <input
        name="District"
        placeholder="District"
        onChange={(ev) => setVille({ ...ville, District: ev.target.value })}
      />
      <br />
      <input
        name="Population"
        placeholder="Population"
        onChange={(ev) => setVille({ ...ville, Population: ev.target.value })}
      />
      <br />
      Capital
      <input
        type="checkbox"
        name="Capital"
        placeholder="Capital"
        onChange={(ev) => setVille({ ...ville, Capital: ev.target.checked })}
      />
      <br />
      {/* {JSON.stringify(ville)} */}
      <button
        className="btn btn-primary"
        onClick={() => {
          PaysStore.dispatch(AjouterVille({ Code: PaysChoisi, Ville: ville }));
        }}
      >
        Ajouter Ville
      </button>
      <button
        className="btn btn-info"
        onClick={() => {
          PaysStore.dispatch(
            ModifierPopulation({
              Code: PaysChoisi,
              Population: ville.Population,
            })
          );
        }}
      >
        Modifier Population
      </button>
    </>
  );
}
