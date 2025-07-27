import { useState } from "react";
import { cn } from "@/lib/util.js";

function Skills() {
  const skills = [
    { name: "HTML/CSS", level: 96, category: "frontend" },
    { name: "Javascript", level: 85, category: "frontend" },
    { name: "Typescript", level: 89, category: "frontend" },
    { name: "TailwindCSS", level: 98, category: "frontend" },
    { name: "React", level: 80, category: "frontend" },
    { name: "Bootstrap", level: 90, category: "frontend" },

    { name: "PHP", level: 90, category: "backend" },
    { name: "MYSQL", level: 95, category: "backend" },
    { name: "Laravel", level: 60, category: "backend" },
    { name: "Git/Github", level: 84, category: "tools" },
    { name: "Figma", level: 90, category: "tools" },
    { name: "Docker", level: 90, category: "tools" },
  ];
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = ["all", "frontend", "backend", "tools"];
  const filtedSkills = skills.filter((skill) => {
    return activeCategory === "all" || skill.category === activeCategory;
  });
  return (
    <section id="skills" className="py-24 px-4 bg-seconday">
      <div className="container mx-auto mx-w-5xl mb-12 text-center font-bold">
        <h2 className="text-3xl md:text-4xl mb-2.5">
          {" "}
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              key={key}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtedSkills.map((skill, key) => (
            <div
              key={key}
              className="p-6 bg-card rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
