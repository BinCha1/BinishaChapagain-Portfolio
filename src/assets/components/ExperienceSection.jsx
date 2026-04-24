import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "AI/ML Intern",
      company: "Inspiring Lab Pvt. Ltd.",
      location: "Nepal",
      duration: "Nov 2025 – Feb 2026",
      icon: Briefcase,
      achievements: [
        "Built an end-to-end AI blog generation pipeline using RAG and SEO analysis",
        "Worked with LangGraph & Google ADK for agent orchestration",
        "Developed scalable backend systems using FastAPI + PostgreSQL",
        "Implemented vector search using Elasticsearch",
        "Integrated SerpAPI for real-time data retrieval",
        "Used Redis & Celery for async processing and memory handling",
        "Built an AI-powered sales chatbot with contextual understanding",
      ],
    },
  ];

  return (
    <div className="py-12 px-6 md:px-12 bg-white" id="experience">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-16"
        >
          <div>
            <p className="text-gray-600 mb-2">— Experience</p>
            <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-900">
              <span className="text-orange-400">Professional</span> Journey
            </h2>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12 border-l-2 border-orange-400"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-4 -top-2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center md:-left-6 md:w-12 md:h-12">
                <exp.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>

              {/* Content Card */}
              <div className="bg-gray-50 p-6 md:p-8 rounded-2xl hover:shadow-lg transition-all">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-orange-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-orange-400" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-orange-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <p className="text-gray-700 font-semibold mb-4">
                    Key Achievements:
                  </p>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <span className="text-orange-400 font-bold mt-1">
                          •
                        </span>
                        <span className="text-gray-700 leading-relaxed">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
