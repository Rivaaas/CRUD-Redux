import Header from "./components/Header";
import Producto from "./components/Producto";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";
import PruebaProducto from "./components/PruebaProducto";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//REDUX
import { Provider } from 'react-redux'
import store from './store'





function App() {
  return (
    <>
      <div className="container mt-5">
        <Provider store={store}>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Producto />} />
              <Route path="/producto/nuevo" element={<NuevoProducto />} />
            </Routes>
          </Router>
        </Provider>
      </div>
    </>
  );
}

export default App;
