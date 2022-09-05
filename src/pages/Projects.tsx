import Slider from "components/Slider";
import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <main className="text-white mx-6 mt-8">
      <section>
        <h1 className="font-bold text-xl">
          Principais{" "}
          <strong className="font-bold text-orange">projetos.</strong>
        </h1>
        <div className="text-gray my-8">
          <p className="mb-4">
            Diversos desses projetos foram realizados com o intuíto de melhorar e aprender a utilizar diversas ferramentas.
          </p>
          <p>
            Para mais detalhes sobre um projeto em específico,{" "}
            <Link to="/" className="font-medium text-orange">clicar no post.</Link>
          </p>
        </div>
      </section>
      <Slider />
    </main>
  );
}