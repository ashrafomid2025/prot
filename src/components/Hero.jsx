import {
  ArrowDown,
  Code,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Mouse,
  SquaresExclude,
  TwitterIcon,
  X,
} from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Ashraf Omid", "Frontend Developer", "UI/UX Designer"],
    loop: 0,
    typeSpeed: 110,
    deleteSpeed: 85,
  });

  return (
    <section>
      <div
        id="hero"
        className="relative min-h-screen mt-12 md:mt-6 flex flex-col items-center justify-center px-3"
      >
        <div className="container md:max-w-full max-w-4xl grid grid-cols-1 gap-5 md:grid-cols-3 text-center z-10">
          <div className="space-y-6 mx-auto px-4 md:col-span-2 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              <h1 className="opacity-0 animate-fade-in mr-2 bg-gradient-to-l from-primary/80 to-primary dark:via-gray-200 via-gray-300 bg-clip-text text-transparent">
                Salaam I'm
              </h1>
              <span className=" animate-fade-in-delay-1">{text}</span>
              <Cursor />
            </h1>
            <p className="text-base text-center">
              I'm a passionate web developer with over 3 years of hands-on
              experience crafting dynamic and responsive web applications. I
              specialize in front-end development using React and Next.js, and
              have a strong command of backend technologies, particularly PHP
              and Laravel.
            </p>
            <div className="opacity-0 animate-fade-in-delay-4 pt-2">
              <a href="#projects" className="cosmic-button">
                View my Work
              </a>
            </div>
          </div>

          <div className="space-y-6 py-6 flex-1 border rounded-xl md:col-span-1 md:flex hover:shadow-xl flex-col items-center  flex ">
            <div className="md:w-48 relative md:h-48 imgContainer rounded-lg">
              <img
                src="./projects/me.jpeg"
                className="w-full h-full cursor-none rounded-full object-cover"
              />
              <div className="absolute top-0 right-0 p-2 backdrop-blur-md rounded-lg animate-bounce">
                <Globe className="text-primary" />
              </div>
              <div className="absolute bottom-0 left-0 p-2 rounded-lg backdrop-blur-md animate-bounce">
                <Code className="text-primary" />
              </div>
            </div>

            <h1 className="font-play-right text-base">Mohammad Ashraf Omid</h1>
            <p className="flex items-center space-x-4 gap-2">
              <span>
                <GraduationCap className="text-primary" />
              </span>
              Bachelor of CS from Kabul University
            </p>
            <p className="flex items-center  gap-2">
              <SquaresExclude className="text-primary capitalize" />
              +3 Years experience in Web development
            </p>
            <span className="flex items-center space-x-4 gap-2">
              <MapPin className="text-primary" /> Kabul Afghanistan
            </span>
            <div className="flex space-x-4 items-center justify-between p-4">
              <a
                href="https://www.linkedin.com/in/m-ashraf-omid-91425b353/"
                target="_blank"
              >
                <Linkedin />
              </a>
              <a href="https://github.com/ashrafomid2025" target="_blank">
                <Github />
              </a>
              <a href="mailto:omidmashraf@gmail.com" target="_blank">
                <Mail />
              </a>
              <a href="https://wa.me/+93794842517" target="_blank">
                <img src="./whatsapp.png" className="h-7  w-7" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden bottom-3 md:bottom-5 left-1/2 transform -translate-x-1/2 md:flex flex-col items-center animate-bounce">
        <span className="text-lg text-muted-foreground mb-1">
          <Mouse size={28} />
        </span>
        {/* <ArrowDown className="h-5 w-5 text-primary" /> */}
      </div>
    </section>
  );
}
