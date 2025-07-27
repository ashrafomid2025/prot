import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section>
      <div
        id="hero"
        className="relative h-screen flex flex-col  items-center justify-center px-4"
      >
        <div className="container md:max-w-[90%] max-w-4xl md:flex md:justify-between md:items-center space-x-8 block mx-auto text-center z-10 ">
          <div className="space-y-6  md:w-[70%] lg:w-[69%]">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                Mohammad Ashraf
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                Omid
              </span>
            </h1>
            <p>
              I'm a passionate web developer with over 2 years of hands-on
              experience crafting dynamic and responsive web applications. I
              specialize in front-end development using React and Next.js, and
              have a strong command of backend technologies, particularly PHP
              and Laravel.
            </p>
            <div className="opacity-0 animate-fade-in-delay-4 pt-2">
              <a href="#project" className="cosmic-button">
                View my Work
              </a>
            </div>
          </div>

          <div className="space-y-6 py-6 lg:w-[40%] md:mt-10 lg:mt-0 md:w-[20%] md:block hidden">
            <div className="md:w-[180px] md:h-[180px] imgContainer rounded-full ">
              <img
                src="../../src/assets/me.jpg"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 traform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-small text-muted-foreground mb-2">scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
    // about
  );
}
