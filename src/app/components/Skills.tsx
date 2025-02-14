import Image from "next/image"

const skills = [
  { name: "HTML5", logo: "/html5.svg" },
  { name: "CSS3", logo: "/css3.svg" },
  { name: "JavaScript", logo: "/javascript.svg" },
  { name: "React", logo: "/react.svg" },
  { name: "Node.js", logo: "/nodejs.svg" },
  { name: "Python", logo: "/python.svg" },
  { name: "UI/UX Design", logo: "/uix.svg" },
  { name: "Adobe Creative Suite", logo: "/adobe.svg" },
  { name: "Tailwind CSS", logo: "/tailwindcss.svg" },
  { name: "Next.js", logo: "/nextjs.svg" },
  { name: "Git", logo: "/git.svg" },
  { name: "GitHub", logo: "/github.svg" },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-secondary text-quaternary dark:bg-dark-secondary dark:text-light-quaternary"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 relative mb-4">
                <Image src={skill.logo || "/placeholder.svg"} alt={skill.name} fill className="object-contain" />
              </div>
              <span className="text-center font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

