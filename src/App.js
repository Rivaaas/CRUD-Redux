import Header from "./components/Header";
import Producto from "./components/Producto";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";


function App() {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <Router>
          <Routes>
            <Route exact path="/" element={<Producto/>} />
            <Route exact path="/producto/nuevo" element={<NuevoProducto/>} />
            <Route exact path="/producto/editar/:id" element={<EditarProducto />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
