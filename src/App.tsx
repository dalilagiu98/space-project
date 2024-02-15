import  "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Articles from './component/Articles';
import Detail from "./component/Detail";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={  <Articles />}/>
      <Route path='/details/:articleId' element={<Detail />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
