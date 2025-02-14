"use client"
import { JSX, useEffect } from "react"

interface NavItemInterface {
  url: string;
  label: string;
}


const itemsMenu: NavItemInterface[] = [
  {
    url: "/#Inicio",
    label: "Inicio"
  },{
    url: "/#Servicos",
    label: "Servicos"
  },{
    url: "/#Habilidades",
    label: "Habilidade"
  },{
    url: "/#Sobre",
    label: "Sobre"
  },{
    url: "/#Contato",
    label: "Contato"
  },
]

export default function Header():JSX.Element {
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement | null;
      if (target && target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]') as NodeListOf<HTMLAnchorElement>
    links.forEach((link) => link.addEventListener("click", smoothScroll))

    return () => {
      links.forEach((link) => link.removeEventListener("click", smoothScroll))
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary bg-opacity-90 text-quaternary">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {itemsMenu.map((item, index) => (
            <li key={index}>
            <a href={item.url} className="hover:text-tertiary font-bold transition-colors">
              {item.label}
            </a>
          </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

