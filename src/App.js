import Header from "./components/Header";
import Producto from "./components/Producto";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";


//REDUX
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <Router>
          <Provider store={store}>
            <Routes>
              <Route exact path="/" element={<Producto />} />
              <Route exact path="/producto/nuevo" element={<NuevoProducto />} />
              <Route exact path="/producto/editar/:id" element={<EditarProducto />} />
            </Routes>
          </Provider>
        </Router>
      </div>
    </>
  );
}

export default App;
