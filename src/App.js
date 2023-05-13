import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/Sidebar/Sidebar";
import CompSearch from "./components/CompSearch/CompSearch";
import Home from './components/home/home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';


function App() {
  return (
    <BrowserRouter>
      <div class="myContainer">
        <div className="sidebar">
          <SideBar />
        </div>
        <div class="header">
          <CompSearch />
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}
export default App;
/*
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import NrAlbumu from './components/NrAlbumu';
import NrGrupy from './components/NrGrupy';
import ImieNazwisko from './components/ImieNazwisko';
import Counter from './components/counter';


function App() {
  return (
    <div className="App">
      <div className="HelloWorld">
        <HelloWorld name ="Hello Wrold"/>
      </div>
      <div className="ImieNazwisko">
        <ImieNazwisko fullname ="Arkadiusz Gnieciak"/>
      </div>
      <div className='NrGrupy'>
        <NrGrupy group="INMN4_PA1.1"/>
      </div>
      <div className='NrAlbumu'>
        <NrAlbumu album ="GD28353"/>
      </div>
      <div className='Counter'>
        <Counter />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edytuj <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
