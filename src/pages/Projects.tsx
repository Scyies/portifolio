import React from "react";

export default function Projects() {
  return (
    <main className="text-white mx-6">
      <section>
        <h1 className="font-bold text-xl">
          Principais{" "}
          <strong className="font-bold text-orange">projetos.</strong>
        </h1>
        <div className="text-gray my-8">
          <p className="mb-4">
            Desenvolvido no quarto desafio front-end da Alura, o objetivo era
            fazer um site de adoção de animais, responsivo e funcional.
          </p>
          <p>
            Para mais detalhes sobre um projeto em específico,{" "}
            <strong className="font-medium text-orange">clicar no post.</strong>
          </p>
        </div>
      </section>
    </main>
  );
}
