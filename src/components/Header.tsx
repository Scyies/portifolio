import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="mx-6">
      <div className="flex justify-center text-center my-4">
        <p className="text-white mr-1 font-bold text-xl">
          Logo 
          <p className="text-orange">Protifólio</p>
        </p>
      </div>
      <nav className="flex justify-center text-white lowercase text-md list-none">
        <Link to="/" className="mr-4 pb-4 hover:border-b-2 border-orange">Home</Link>
        <Link to="/projetos" className="mr-4 pb-4 hover:border-b-2 border-orange">Projetos</Link>
        <Link to="/" className="pb-4 hover:border-b-2 border-orange">Contato</Link>
      </nav>
    </header>
  );
}
