import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="mx-6 md:mx-8 lg:mx-40 md:flex place-items-center justify-between">
      <div className="flex justify-center text-center my-4">
        <p className="text-white mr-1 font-bold text-xl md:text-3xl">
          Logo <strong className="text-orange font-bold">Protifólio</strong>
        </p>
      </div>
      <nav className="flex justify-center text-white lowercase text-md md:text-xl lg:text-3xl list-none">
        <Link to="/" 
          id="nav__hover" 
          className="mr-4 md:mr-8 lg:mr-12"
        >
          Home
        </Link>
        <Link
          to="/projetos"
          className="mr-4 md:mr-8 lg:mr-12"
          id="nav__hover"
        >
          Projetos
        </Link>
        <Link to="/contato" 
          className=""
          id="nav__hover"
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
