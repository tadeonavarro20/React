import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route path="/" element={ <ItemListContainer saludo="Bienvenidos a Trendy Threads" /> } />
      <Route path="/category/:idCategory" element={ <ItemListContainer saludo="Bienvenidos a Trendy Threads" /> } />
      <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
