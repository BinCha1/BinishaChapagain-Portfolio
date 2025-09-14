import { motion } from "framer-motion";
import { Brain, Code, Database, Languages, Wrench } from "lucide-react";
import { useState } from "react";

const SkillSection = () => {
  const categories = [
    {
      name: "LLMs & Applied AI",
      icon: Brain,
      skills: [
        { name: "LangChain", level: 90 },
        { name: "LangGraph", level: 80 },
        { name: "Agents", level: 85 },
      ],
    },
    {
      name: "Natural Language Processing",
      icon: Languages,
      skills: [
        { name: "Text Classification", level: 85 },
        { name: "NER", level: 75 },
        { name: "Transformers", level: 80 },
      ],
    },
    {
      name: "Backend Engineering",
      icon: Database,
      skills: [
        { name: "FastAPI", level: 95 },
        { name: "PostgreSQL + Alembic", level: 90 },
        { name: "Redis", level: 75 },
        { name: "Celery (Async Tasks)", level: 70 },
        { name: "Docker & Docker Compose", level: 60 },
        { name: "REST API Design", level: 85 },
      ],
    },
    {
      name: "Programming & Data",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Pandas", level: 75 },
      ],
    },
    {
      name: "Dev Tools & Platforms",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 85 },
        { name: "Postman", level: 80 },
        { name: "Docker", level: 70 },
      ],
    },
  ];

  const [active, setActive] = useState(2); // Default active category

  return (
    <div className="py-12 px-6 md:px-12  text-white bg-gray-50" id="skills">
      {/* Heading */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center justify-between mb-16 lg:px-16 px-2"
      >
        <div>
          <p className="text-gray-600 mb-2">— Skills</p>
          <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-900">
            <span className="text-orange-400">Technical</span> Expertise
          </h2>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Left Sidebar */}
        <div className="space-y-4">
          {categories.map((cat, index) => (
            <button
              key={cat.name}
              onClick={() => setActive(index)}
              className={`w-full flex items-center space-x-3 px-6 py-3 rounded-xl border transition-all ${
                active === index
                  ? "bg-orange-400 text-white"
                  : "border-orange-400 text-black hover:bg-orange-400/30"
              }`}
            >
              <cat.icon className="w-5 h-5" />
              <span className="font-medium">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Right Skills Display */}
        <div className="md:col-span-2 bg-white/5 p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-6 text-black">
            {categories[active].name}
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {categories[active].skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span className="text-black">{skill.name}</span>
                  <span className="text-orange-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-2 bg-orange-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-6">
            *Percentage represents my relative proficiency, not exact expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
