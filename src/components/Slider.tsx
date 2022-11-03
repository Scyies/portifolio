import React, { useEffect, useState } from 'react';
import projects from 'projetos.json';
import { CaretLeft, CaretRight } from 'phosphor-react';
import classNames from 'classnames';
import { useNavigate, useParams } from 'react-router-dom';

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [specificIndex, setSpecificIndex] = useState<number>(0);

  const params = useParams();

  const idd = Number(params.id);

  const maxIndexDefault = projects.length;

  const maxIndexSpecific = projects[specificIndex].pImages.length;

  const maxSlider = !isNaN(idd) ? maxIndexSpecific : maxIndexDefault;

  const navigate = useNavigate();

  function nextImage() {
    if (currentIndex < maxSlider - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }
  function prevImage() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxSlider - 1);
    }
  }

  function getId(idd: number) {
    if (!isNaN(idd)) {
      setSpecificIndex(idd);
    }
  }

  useEffect(() => getId(idd), []);

  return (
    <section className='my-16 lg:max-w-[40vw]'>
      <div
        className='mb-8 top-0 z-0'
        onClick={() => navigate(`/projeto=${currentIndex}`)}
      >
        <div className='flex flex-row justify-center aspect-video mx-auto z-0 cursor-pointer'>
          {!isNaN(idd) ? (
            <img
              src={projects[specificIndex].pImages[currentIndex].img}
              alt=''
              className='z-0 object-cover h-full w-full lg:w-[40vw]'
            />
          ) : (
            <img
              src={projects[currentIndex].image}
              alt=''
              className='z-0 object-cover h-full w-full lg:w-[40vw]'
            />
          )}
        </div>
      </div>
      <div className='flex justify-around place-items-center mb-8'>
        <div className='text-orange cursor-pointer'>
          <CaretLeft size={30} weight='bold' onClick={prevImage} />
        </div>
        {!isNaN(idd)
          ? projects[specificIndex].pImages.map((project, index) => (
              <div
                key={index}
                className={classNames({
                  'text-orange': currentIndex === index,
                  'text-gray': currentIndex !== index,
                })}
              >
                ⬤
              </div>
            ))
          : projects.map((project, index) => (
              <div
                key={project.id}
                className={classNames({
                  'text-orange': currentIndex === index,
                  'text-gray': currentIndex !== index,
                })}
              >
                ⬤
              </div>
            ))}
        <div className='text-orange cursor-pointer'>
          <CaretRight size={30} weight='bold' onClick={nextImage} />
        </div>
      </div>
    </section>
  );
}
