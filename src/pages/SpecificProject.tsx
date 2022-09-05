import React from "react";
import { useParams } from "react-router-dom";
import projects from "projetos.json";
import gitHub from "assets/github logo white.png";
import earthGlobe from "assets/earth-globe-tool.svg";
import tsLogo from "assets/tsc png.png";
import reactLogo from "assets/react logo.png";
import tailwindLogo from "assets/tailwind logo.png";
import firebaseLogo from "assets/firebase logo.png";
import Slider from "components/Slider";

export default function SpecificProject() {
  const projectId = useParams();

  const searchId = Number(projectId.id);

  console.log(projectId.id);
  
  return (
    <main className="text-white mx-6 mt-8">
      <section className="mb-8">
        <h1 className="font-bold text-xl">{projects && projects[searchId].title}</h1>
        <p className="text-gray my-6 text-justify">{projects && projects[searchId].pText}</p>
        <div className="flex justify-between">
          <div>
            <h2 className="text-gray text-xl font-bold">Ferramentas</h2>
            <div className="flex mt-4">
              <img src={tsLogo} alt="" className="w-8 h-8 mr-2" />
              <img src={reactLogo} alt="" className="w-8 h-8 mr-2" />
              <img src={tailwindLogo} alt="" className="w-8 h-8 mr-2" />
              <img src={firebaseLogo} alt="" className="w-6 h-8" />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-gray text-xl font-bold">Links</h2>
            <div className="flex mt-4">
              <a href={projects && projects[searchId].reposity} target="_blank" rel="noreferrer">
                <img src={gitHub} alt="" className="w-8 h-8 mr-2" />
              </a>
              <a href={projects && projects[searchId].deploy} target="_blank" rel="noreferrer">
                <img src={earthGlobe} alt="" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Slider />
    </main>
  );
}
