import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AjouterPays_Async, AjouterVille, ModifierPopulation, PaysStore } from './store'

export default function Q3() {
    const {annee}=useParams();
    const select=useSelector(state=> annee?
            state.filter(el=>el.IndepYear==annee):state);
  return (<>
    {/* <div>Q3</div> */}
    {annee && "Année Indépendance:"+ annee}
   <div className="row">
{select.map(element=> <div key={element.Code} className="card" style={{"width": "18rem"}}>
  <img src={element.Image} className="card-img-top" alt={element.Name}/>
  <div className="card-body">
    <h5 className="card-title">{element.Name}</h5>
    <p className="card-text">Superficie: {element.SurfaceArea} km²</p>
    <p className="card-text">Population: {element.Population}</p>   
  </div>
</div>
 )}</div>

<button onClick={()=>PaysStore.dispatch(AjouterPays_Async())}>Charger liste Pays</button>

  </>)
}
