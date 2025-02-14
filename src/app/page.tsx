import Header from "./components/Header"
import Inicio from "./components/Inicio"
import Servicos from "./components/Servicos"
import Skills from "./components/Skills"
import About from "./components/About"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"

export default function Home() {
  return (
     <>
          <Header />
          <main>
            <Inicio />
            <Servicos />
            <Skills />
            <About />
            <ContactForm />
          </main>
          <Footer />
        </>
  );
}
