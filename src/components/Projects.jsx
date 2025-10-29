import { ArrowRight, ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Exchange Rate and Currency Converter",
      description:
        "Experience seamless Afghani currency conversion with real-time, reliable market data.",
      imgUrl: "./projects/5.png",
      tags: ["Next Js", "Framer Motion", "Rest Api"],
      demoUrl: "https://my-sarafi2025.vercel.app/",
      githubUrl: "https://github.com/ashrafomid2025/sarafi",
    },
    {
      id: 1,
      title: "Blog Web",
      description:
        "Blog applications lets you post everything you want in your own virtual space, in your own website. You can get all the latest news and post it inside your own website",
      imgUrl: "./projects/1.png",
      tags: ["Next Js", "Framer Motion", "mark down"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Dental Clinic Web App",
      description:
        "Dental Clinic web App to ease appointment booking, posting blogs and getting any information you need about the doctor",
      imgUrl: "./projects/2.png",
      tags: ["Next Js", "React", "Typescript", "Framer Motion"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Doctoryab",
      description:
        "Doctoryab is a user-friendly web and mobile app that makes it easy for customers to book appointments with doctors online—anytime, anywhere",
      imgUrl: "./projects/3.jpg",
      tags: ["Vue.js", "Firebase", "Flutter"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "QR Code Generator",
      description:
        "QR Code Generator helps to save any link you want, just paste the url in the application and get the QR Code, you can save it as svg or png",
      imgUrl: "./projects/4.png",
      tags: ["Next Js", "React", "Framer Motion"],
      demoUrl: "https://barcodeproducer.vercel.app/",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Construction Company Web Application",
      description:
        "A construction company app is a specialized Web application designed to streamline operations in the construction industry, bridging the gap between field workers",
      imgUrl: "./projects/6.png",
      tags: ["React", "Framer Motion", "Email JS", "Tailwind CSS"],
      demoUrl: "https://construct2025.vercel.app/",
      githubUrl:
        "https://github.com/ashrafomid2025/sharifi-constraction-company",
    },
  ];
  return (
    <section id="projects" className="py-2 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured{" "}
          <span className="bg-gradient-to-l  from-primary/80 to-primary via-stone-200 bg-clip-text text-transparent">
            {" "}
            Projects
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-1 mx-auto">
          Here are some of my recent projects. Each project was crafted with
          attention to details, performance and user experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg p-4 mt-4 overflow-hidden shadow-lg card-hover"
            >
              <div className="h-44  overflow-hidden ">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110 "
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
