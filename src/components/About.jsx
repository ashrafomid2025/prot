import { Briefcase, Code, User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground">
              With Over 3 years of experience in web development, I specialize
              in creating responsive, accessable and performant web application
              using modern technologies
            </p>
            <p className="text-muted-foreground">
              With two years of hands-on experience in web development, I’ve
              built diverse projects and shared my knowledge by teaching and
              mentoring aspiring developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center ">
              <a href="#contacts" className="cosmic-button">
                Get in touch
              </a>
              <a
                href="#contact"
                className="py-2 px-6 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="gradient-border p-3 card-hover">
              <div className="flex rounded-2xl p-3 gap-4 bg-primary/10 items-center">
                <div className="p-2 rounded-full">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg ">Web Delopment</h4>
                  <p className="text-muted-foreground">
                    Creating responsive web application with modern framworks
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-3 card-hover">
              <div className="flex rounded-2xl p-3 gap-4 bg-primary/10 items-center">
                <div className="p-2 rounded-full">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg ">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing inuitive user interfaces and seamless user
                    experiences
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-3 card-hover">
              <div className="flex rounded-2xl p-3 gap-4 bg-primary/10 items-center">
                <div className="p-2 rounded-full">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg ">Team Building</h4>
                  <p className="text-muted-foreground">
                    Working with many teams to ensure we got the skill to work
                    with other developers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
