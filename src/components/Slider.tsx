import React, { useState } from "react";
import projects from "projetos.json";
import { CaretLeft, CaretRight } from "phosphor-react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = projects.length;

  const navigate = useNavigate();

  function nextImage() {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }
  function prevImage() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex - 1);
    }
  }

  return (
    <section className="my-16 lg:max-w-[40vw]">
      <div className="mb-8 top-0 z-0" 
        onClick={() => navigate(`/projeto=${currentIndex}`)}
      >
        <div className="flex flex-row justify-center aspect-video mx-auto z-0">
          {projects && (
            <img
              src={projects[currentIndex].image}
              alt=""
              className="z-0 object-fill h-full w-full lg:w-[40vw]"
            />
          )}
        </div>
      </div>
      <div className="flex justify-around place-items-center mb-8">
        <div className="text-orange cursor-pointer">
          <CaretLeft size={30} weight="bold" onClick={prevImage} />
        </div>
        {projects && projects.map((project, index) => (
          <div
            key={project.id}
            className={classNames({
              "text-orange": currentIndex === index,
              "text-gray": currentIndex !== index,
            })}
          >
            ⬤
          </div>
        ))}
        <div className="text-orange cursor-pointer">
          <CaretRight size={30} weight="bold" onClick={nextImage} />
        </div>
      </div>
    </section>
  );
}
