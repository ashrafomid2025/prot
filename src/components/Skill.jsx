import { Key } from "lucide-react";
import SKillDataProvider from "./SkillDataProvider";

export default function Skill() {
  const Skill_data = [
    {
      skill_name: "Html 5",
      Image: "skills/html.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Css",
      Image: "skills/css.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Java Script",
      Image: "skills/js.png",
      width: 65,
      height: 65,
    },
    {
      skill_name: "Tailwind Css",
      Image: "skills/tailwind.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "React",
      Image: "skills/react.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Git",
      Image: "skills/git.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "React Spring",
      Image: "skills/reactSpring.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "React Query",
      Image: "skills/reactquery.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Type Script",
      Image: "skills/ts.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Next js 13",
      Image: "skills/next.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Framer Motion",
      Image: "skills/framer.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "MySQL",
      Image: "skills/mysql.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Firebase",
      Image: "skills/Firebase.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Prisma",
      Image: "skills/prisma.webp",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Redux",
      Image: "skills/redux.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "MySQL",
      Image: "skills/figma.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Laravel",
      Image: "skills/laravel.png",
      width: 80,
      height: 80,
    },
  ];
  return (
    <div
      id="skills"
      className="max-w-6xl mx-auto  flex flex-col items-center justify-center gap-3 h-full overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-2.5">
        {" "}
        My <span className="text-primary">Skills</span>
      </h2>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SKillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
