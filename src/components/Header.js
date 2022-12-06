import React from 'react'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Producto from './Producto'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
      <Router>
        <div className='container'>
          <h1><Link to="/" className="text-light">CRUD -- React, Redux, REST API & Axios</Link></h1>
        </div>
        <Link
          to="/producto/nuevo"
          className='btn btn-danger nuevo-post d-block d-md-inline-block'
        >
          Agregar Producto &#43;
        </Link>
      </Router>
    </nav>
  )
}

export default Header