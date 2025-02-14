
interface cardServicos {
  title: string,
  description: string
}

const services:cardServicos[] = [
  {
    title: "Desenvolvimento API",
    description:
      "Desenvolvimento de APIs RESTful em PHP com Laravel. Soluções escaláveis, seguras e personalizadas para atender às suas necessidades específicas.",
  },
  {
    title: "Criação Landing Pages",
    description:
      "Criação de landing pages personalizadas. Design responsivo, integração com ferramentas de marketing e análise de dados.",
  },
  {
    title: "Soluções com E-commerce",
    description:
      "Criação de uma loja virtual completa, desde o design até a gestão de produtos. Integração com diversos sistemas e ferramentas.",
  },
  {
    title: "Modelagem de produtos 3D",
    description:
      "Modelagem 3D de alta precisão com SolidWorks. Criação de  modelos para prototipagem, simulação e fabricação.",
  },
  {
    title: "Elaboração de Layout de Obras",
    description:
      "Visualize seus projetos antes da execução. Criação de layouts de obras precisos e otimizados com AutoCAD.",
  },
  {
    title: "Manutenção de Web Sites",
    description:
      "Visualize seus projetos antes da execução. Criação de layouts de obras precisos e otimizados com AutoCAD.",
  },
]

export default function Servicos() {

  return (
    <section id="Servicos" className="py-20 bg-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Meus Servicos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden translate-y-10 transition-all duration-500 ease-out"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                <p className="text-secondary">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

