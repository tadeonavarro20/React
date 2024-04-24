import NavBar from "./components/Navbar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"


import './App.css'

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo = "Bienvenido a Trendy Threads tu tienda de ropa favorita"/>

    </div>
  )
}

export default App
