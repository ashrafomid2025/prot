import { ArrowRight, ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Quiz Application",
      description:
        "The quiz application is designed to fetch 10 questions from an API and evaluate responses based on the correct answers provided.",
      imgUrl: "./projects/1.png",
      tags: ["TailwindCss", "Javascript", "HTML", "CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Resturant Web App",
      description:
        "Experience effortless dining reservations with our innovative restaurant app—book your table online in just a few quick clicks.",
      imgUrl: "./projects/2.png",
      tags: ["TailwindCSS", "Next", "Javascript"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Doctoryab",
      description:
        "Doctoryab is a user-friendly web and mobile app that makes it easy for customers to book appointments with doctors online—anytime, anywhere",
      imgUrl: "./projects/3.jpg",
      tags: ["TailwindCss", "Vue.js", "Firebase", "Flutter"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];
  return (
    <section id="projects" className="py-2 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-1 mx-auto">
          Here are some of my recent projects. Each project was crafted with
          attention to details, performance and user experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg p-4 overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden ">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
              </div>
              <div className="p-1">
                <div className="flex flex-wrap gap-2 mb-4 ">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 font-medium rounded-full bg-primary/20 text-seconday-foreground border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1 ">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 ">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3 ">
                  <a
                    target="_blank"
                    href={project.demoUrl}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                  >
                    {" "}
                    <ExternalLink size={20} />{" "}
                  </a>
                  <a
                    target="_blank"
                    href={project.githubUrl}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.github.com/ashrafomid2025"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
