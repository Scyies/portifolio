import React from "react";
import Button from "components/Button";
import downArrow from "assets/Down-Arrow.png";
import skills from "assets/skills.png";
import { Paperclip } from "phosphor-react";
import projetos from "projetos.json";

export default function Home() {
  function handleClick() {
    console.log("sim");
  }

  return (
    <main className="text-white mx-6">
      <section className="flex flex-col text-white mt-4 min-h-[calc(100vh-112px)] justify-around">
        <div>
          <h1 className="font-bold text-xl">
            Olá, sou <strong className="text-orange">Sérgio E. Valerio</strong>,
            desenvolvedor Front-End
          </h1>
          <p className="text-gray text-md my-4 font-medium">
            Atualmente morando no Brasil, criando sites
            <strong className="text-orange ml-1 font-medium">
              interativos
            </strong>{" "}
            e novas experiencias digitais.
          </p>
        </div>
        <div>
          <Button onClick={handleClick}>Vamos Conversar!</Button>
          <div className="flex my-12 w-full justify-center">
            <img src={downArrow} alt="" />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div>
          <h2 className="font-bold text-white text-xl">
            <strong className="text-orange font-bold">Habilidades</strong> e
            ferramentas
          </h2>
          <p className="text-gray my-4 font-medium">
            Para maiores{" "}
            <strong className="font-medium text-orange">detalhes</strong>,
            sinta-se a vontade para olhar os projetos realizados com tais
            habilidades.
          </p>
        </div>
        <div className="flex justify-center my-4">
          <img src={skills} alt="" />
        </div>
      </section>

      <section className="mt-12 font-medium">
        <p className="">Sou bacharel em direito que mudou de área.</p>
        <div className="bg-orange h-[1px] w-[70%] my-4"></div>
        <p>
          Estou sempre em busca de aplicar novas tecnologias e desenvolver novas
          soluções web!
        </p>
        <div className="bg-orange h-[1px] w-[70%] my-4"></div>
        <p>
          Venho procurando me especializar cada vez mais, nunca deixando do
          desejo de evoluir!
        </p>
        <div className="bg-orange h-[1px] w-[70%] my-4"></div>
        <Button>
          Curriculo <Paperclip size={25} />
        </Button>
      </section>

      <section className="bg-gray flex flex-col justify-center my-6 -mx-6">
        <div className="text-center p-6">
          <h3 className="font-bold text-xl">
            Aqui estão alguns de meus projetos
          </h3>
          <div className="flex justify-center text-xl">
            <Button>Ver mais!</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-4">
          {projetos.map((projeto) => (
            <img
              key={projeto.id}
              src={projeto.image}
              className="object-cover h-full w-full"
            />
          ))}
        </div>
      </section>

      <section className="min-h-[70vh] flex flex-col justify-center">
        <h3 className="font-bold text-xl text-center">
          Vamos conversar sobre o seu projeto?
        </h3>
        <div className="flex justify-center text-xl mt-4">
          <Button>Contato</Button>
        </div>
      </section>
    </main>
  );
}
