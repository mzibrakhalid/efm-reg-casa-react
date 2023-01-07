import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Q3 from './Q3';
import Q5 from './Q5';
import Q6 from './Q6';
import Q4 from './Q4';
import Menu from './Menu';
import { Provider } from 'react-redux';
import { PaysStore } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
<Provider store={PaysStore}>
    <Menu />

  <Routes>
  <Route path="/" element={<Q3/>} ></Route>
  <Route path="/Q3" element={<Q3/>} ></Route>
  <Route path="/Q3/:annee" element={<Q3/>} ></Route>
  <Route path="/Q4" element={<Q4/>} ></Route>
  <Route path="/Q5" element={<Q5/>} ></Route>
  <Route path="/Q6" element={<Q6/>} ></Route>
 
</Routes>
</Provider>
</BrowserRouter>

  </>
);