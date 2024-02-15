import  "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Articles from './component/Articles';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={  <Articles />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
