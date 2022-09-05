import React from "react";
import Button from "components/Button";
import downArrow from "assets/Down-Arrow.png";
import skills from "assets/skills.png";
import { Paperclip } from "phosphor-react";
import projetos from "projetos.json";
import { Link } from "react-router-dom";
import laptopEarth from "assets/Notebook Earth.png";
import profileIcon from "assets/Profile Icon.png";

export default function Home() {
  function handleClick() {
    console.log("sim");
  }

  return (
    <main className="text-white mx-6 md:mx-8 lg:mx-40">
      <section className="flex flex-col lg:mx-20 text-white mt-4 min-h-[calc(100vh-112px)] justify-around">
        <div className="lg:max-w-2xl">
          <div className="bg-orange h-1 md:h-2 w-8 md:w-20 mb-2"></div>
          <h1 className="font-bold text-xl md:text-5xl lg:my-8">
            <span className="flex">Olá,</span> Sou{" "}
            <span className="text-orange">Sérgio E. Valerio</span>,
            Desenvolvedor Front-End
          </h1>
          <p className="text-gray text-md md:text-2xl my-4 lg:my-8 font-medium">
            Atualmente morando no Brasil, criando sites
            <span className="text-orange ml-1 font-medium">interativos</span> e
            novas experiencias digitais.
          </p>
          <Link to="/contato" className="md:text-2xl lg:text-3xl">
            <Button onClick={handleClick}>Vamos Conversar!</Button>
          </Link>
        </div>
        <div>
          <div className="flex my-12 w-full justify-center">
            <img src={downArrow} alt="" />
          </div>
        </div>
      </section>

      <section className="mt-12 flex flex-col md:flex-row justify-between">
        <div className="lg:flex flex-col lg:max-w-[40vw]">
          <h2 className="font-bold text-white text-xl md:text-3xl">
            <span className="text-orange font-bold">Habilidades</span> e
            ferramentas
          </h2>
          <p className="text-gray my-4 font-medium md:text-xl">
            Para maiores{" "}
            <span className="font-medium text-orange">detalhes</span>, sinta-se
            a vontade para olhar os projetos realizados com tais habilidades.
          </p>
        </div>
        <div className="flex justify-center md:justify-between my-4 md:-ml-6 overflow-hidden">
          <img src={skills} alt="" className="md:mr-20" />
        </div>
      </section>

      <section className="my-16 font-medium md:text-xl md:flex md:justify-around lg:place-items-center lg:justify-between">
        <img
          src={laptopEarth}
          alt=""
          className="hidden lg:flex lg:min-w-[40vw] lg:h-full lg:-ml-40 lg:mr-8 self-center"
        />
        <div className="flex lg:max-w-[50vw]">
          <div className="flex-col place-items-center mr-4 hidden md:flex">
            <img src={profileIcon} alt="" className="md:h-20 md:w-20" />
            <a
              className=""
              href="https://drive.google.com/file/d/1UmDeq6SF3mVhE5MNuztozbkZd11fKssV/view"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                Curriculo <Paperclip size={25} />
              </Button>
            </a>
          </div>
          <div className="flex flex-col min-w-[30vw]">
            <p className="">Sou bacharel em direito que mudou de área.</p>
            <div className="bg-orange h-[1px] w-[70%] my-4"></div>
            <p>
              Estou sempre em busca de aplicar novas tecnologias e desenvolver
              novas soluções web!
            </p>
            <div className="bg-orange h-[1px] w-[70%] my-4"></div>
            <p>
              Venho procurando me especializar cada vez mais, nunca deixando do
              desejo de evoluir!
            </p>
            <div className="bg-orange h-[1px] w-[70%] my-4"></div>
          </div>
        </div>
        <a
          className="md:hidden"
          href="https://drive.google.com/file/d/1UmDeq6SF3mVhE5MNuztozbkZd11fKssV/view"
          target="_blank"
          rel="noreferrer"
        >
          <Button>
            Curriculo <Paperclip size={25} />
          </Button>
        </a>
      </section>

      <section className="bg-gray flex flex-col md:flex-row justify-center my-6 -mx-6 md:-mx-8 lg:-mx-40">
        <div className="flex flex-col md:flex-row justify-center lg:mx-40">
          <div className="text-center p-6 lg:pl-0 md:text-left md:p-12 lg:flex lg:flex-col lg:justify-center">
            <h3 className="font-bold text-xl md:text-2xl lg:text-3xl">
              Aqui estão alguns de meus projetos
            </h3>
            <Link
              to="/projetos"
              className="inline-block justify-center md:justify-start text-xl md:text-2xl lg:self-center"
            >
              <Button>Ver mais!</Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 mt-4 md:mt-0 md:max-w-[50%]">
            {projetos.map((projeto: { id: React.Key | null | undefined; image: string | undefined; }) => (
              <img
                key={projeto.id}
                src={projeto.image}
                className="object-cover h-full w-full"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-[70vh] flex flex-col lg:flex-row lg:place-items-center justify-center">
        <h3 className="font-bold text-xl md:text-5xl text-center lg:max-w-lg lg:mr-20 lg:text-left">
          Vamos conversar sobre o seu projeto?
        </h3>
        <Link
          to="/contato"
          className="flex justify-center text-xl md:text-3xl mt-4"
        >
          <Button>Contato</Button>
        </Link>
      </section>
    </main>
  );
}
