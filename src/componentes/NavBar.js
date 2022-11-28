import React from "react";
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
    <>
    <nav>
        <NavLink to='/'>
        <h1 className="title">AGMtecno</h1>
        </NavLink>
        <div className="desplegable">
            <button className="boton-links">Categorias</button>
            <div className="contenido-menu">
                <NavLink to="/">Todos</NavLink>
                <NavLink to="/productos/celular">Celulares</NavLink>
                <NavLink to="/productos/laptop">Laptops</NavLink>
            </div>
        </div>
        <NavLink to="/cart">
        <CartWidget />
        </NavLink>
    </nav>
    </>
    )
}

export default NavBar

