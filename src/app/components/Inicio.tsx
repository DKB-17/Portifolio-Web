import Image from "next/image"
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="Inicio" className="min-h-screen flex items-center justify-center bg-primary text-quaternary pt-20 ">
      <div className="container mx-auto px-6 py-24 md:flex md:items-center gap-20">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Diego Brito</h1>
          <h2 className="text-2xl md:text-3xl mb-6">Desenvolvedor FullStack</h2>
          <h3 className="text-lg md:text-2xl mb-6">Cientista da Computação</h3>
          <p className="text-lg mb-8">Seu negócio online, personalizado e profissional: sites responsivos e seguros, feitos sob medida para o seu secesso.</p>
          <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a
                href="https://github.com/DKB-17"
                className="p-3 rounded-full bg-quaternary hover:bg-tertiary transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="GitHub Perfil"
              >
                <FiGithub className="w-6 h-6 text-secondary dark:text-quaternary" />
              </a>
              <a
                href="https://www.linkedin.com/in/diegobritosilva/"
                className="p-3 rounded-full bg-quaternary hover:bg-tertiary transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="LinkedIn Perfil"
              >
                <FiLinkedin  className="w-6 h-6 text-secondary dark:text-quaternary" />
              </a>
              <a
                href="https://www.instagram.com/diz_britx/"
                className="p-3 rounded-full bg-quaternary hover:bg-tertiary transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Instagram Perfil"
              >
                <FiInstagram  className="w-6 h-6 text-secondary dark:text-quaternary" />
              </a>
            </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <Image
            src="/2.jpeg"
            alt="Diego Brito"
            width={400}
            height={400}
            className="rounded-lg mx-auto object-cover h-1/2"
            priority
          />
        </div>
      </div>
    </section>
  )
}

