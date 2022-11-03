import Slider from 'components/Slider';
import React from 'react';

export default function Projects() {
  return (
    <main className='text-white mx-6 md:mx-8 mt-8 lg:mx-40 lg:flex lg:justify-between lg:place-items-center'>
      <section className='mb-12 md:mx-20 lg:mx-0 lg:w-[30vw] my-16'>
        <h1 className='font-bold text-xl md:text-4xl'>
          Principais{' '}
          <strong className='font-bold text-orange'>projetos.</strong>
        </h1>
        <div className='text-gray my-8 md:text-2xl'>
          <p className='mb-4'>
            Diversos desses projetos foram realizados com o intuíto de melhorar
            e aprender a utilizar diversas ferramentas.
          </p>
          <p>
            Para mais detalhes sobre um projeto em específico,{' '}
            <span className='font-medium text-orange'>clicar no post.</span>
          </p>
        </div>
      </section>
      <Slider />
    </main>
  );
}
