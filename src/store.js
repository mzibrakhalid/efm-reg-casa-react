import {applyMiddleware, createStore} from "redux";
import axios from 'axios';
 
import thunk from "redux-thunk";
import  {InitialState, PaysParAnneeIndependence}  from "./ResourcesJSON";
export const AjouterVille=(p)=>{return {type:"AjouterVille",payload:p}}
export const ModifierPopulation=(p)=>{return {type:"ModifierPopulation",payload:p}}
export const AjouterPays=(p)=>{return {type:"AjouterPays",payload:p}}

export const AjouterPays_Async=()=>{
    return (dispatch,state)=>{
        axios.get("https://restcountries.com/v3.1/all")
        .then(res=> {
            res.data.forEach(elem=>{ 
                const IndepPays=PaysParAnneeIndependence.filter(p=>p.country==elem.name.common)[0];
                const Pays={"Code":elem.cca2,"Name":elem.name.common
                ,"Continent":elem.region,"SurfaceArea":elem.area
                ,"Image":elem.flags.png,"Population":elem.population
                ,"IndepYear":IndepPays ? IndepPays.independence:'',
                "Villes":[]}
                dispatch(AjouterPays(Pays))
            })
        } )

    }
}


export const rdcr=(state=InitialState,action)=>{
    if(action.type=="AjouterVille") {
        
       return state.map(el=> el.Code===action.payload.Code?
            {...el
                ,Villes:[...el.Villes,action.payload.Ville]
            }: el);
        }
    else if(action.type=="ModifierPopulation")  {
    
  return  state.map(el=>el.Code===action.payload.Code?
        {...el,Population:action.payload.Population}:el );

    }

    else if(action.type=="AjouterPays")  {
        return [...state,action.payload];
    }
    
    else return state;
}

export const PaysStore=createStore(rdcr,applyMiddleware(thunk));
