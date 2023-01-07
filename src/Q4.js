import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Q4() {
    const listeDates=useSelector(st=>st.map(e=>e.IndepYear).filter(el=>el));
    const listeDatesUniques=[];
    listeDates.forEach(element => {
      if(listeDatesUniques.indexOf(element)==-1) 
            listeDatesUniques.push(element);
    });
    listeDatesUniques.sort();
  return (<>
    {/* <div>Q4</div> */}
    <ul class="list-group">
{listeDatesUniques.map(el=> <li class="list-group-item">
     <Link to={"/Q3/"+el}>{el}</Link>
     </li>
     )}
</ul>
</>)
}
