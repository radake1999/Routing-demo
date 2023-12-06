//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigationbar } from './components/Navigationbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';



function App() {
  return (
   <BrowserRouter>
    <Navigationbar></Navigationbar>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
