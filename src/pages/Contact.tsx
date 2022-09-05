import React from "react";
import gitHub from "assets/github logo white.png";
import insta from "assets/logo insta white.png";
import linkedinLogo from "assets/linkedin logo white.png";
import Input from "../components/Input";
import Button from "components/Button";

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <main className="text-white mx-6">
      <section className="my-8">
        <div>
          <h1 className="font-bold text-xl text-center">Entre em contato!</h1>
          <p className="text-gray my-4">
            Você pode entrar em contato por{" "}
            <strong className="font-medium text-orange">email</strong> ou uma de
            minhas <strong className="font-medium text-orange"> redes sociais.</strong>
          </p>
        </div>
        <div className="flex justify-center my-8">
          <img src={linkedinLogo} alt="" className="w-8 h-8 mr-8" />
          <img src={gitHub} alt="" className="w-8 h-8 mr-8" />
          <img src={insta} alt="" className="w-8 h-8" />
        </div>
      </section>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="h-full w-full">
          <label htmlFor="nome" className="font-bold">Nome</label>
          <Input id="nome" autoComplete="off" />
        </div>
        <div className="h-full w-full mt-4">
          <label htmlFor="email" className="font-bold">Email</label>
          <Input id="email" type="email" autoComplete="off" />
        </div>
        <div className="h-full w-full mt-4">
          <label htmlFor="mensagem" className="font-bold">Mensagem</label>
          <textarea 
            name="mensagem" 
            id="mensagem" 
            cols={30} 
            rows={5}
            className="px-3 py-2 my-2 bg-gray outline-none border border-white w-full"
          >
          </textarea>
        </div>
        <div className="flex justify-center">
          <Button type="submit">Enviar mensagem</Button>
        </div>
      </form>
    </main>
  );
}
