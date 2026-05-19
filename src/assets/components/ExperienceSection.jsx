import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AI/ML Intern",
    company: "Inspiring Lab Pvt. Ltd.",
    location: "Nepal",
    duration: "Nov 2025 – Feb 2026",
    achievements: [
      "Developed an end-to-end AI blog generation pipeline using RAG architecture and SEO analysis.",
      "Built backend APIs using FastAPI with PostgreSQL for scalable data management.",
      "Implemented semantic and keyword search using Elasticsearch to improve content retrieval.",
      "Integrated WooCommerce webhooks to capture product create, update, and delete events.",
      "Processed webhook payloads via ngrok and synchronized product data into Elasticsearch.",
      "Enabled an AI-powered sales chatbot to search and understand product information contextually.",
      "Used Redis and Celery for asynchronous task processing and background job management.",
    ],
    tech: [
      "FastAPI",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "Celery",
      "WooCommerce",
      "LangGraph",
      "SerpAPI",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <div className="py-12 px-6 md:px-12 bg-gray-50" id="experience">
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
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-orange-200 md:left-6" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center shadow-sm z-10 md:w-12 md:h-12">
                  <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>

                {/* Content Card */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
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
                      <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 mb-6" />

                  {/* Achievements */}
                  <div className="mb-6">
                    <p className="text-gray-700 font-semibold mb-4">
                      Key Achievements
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
                          <span className="text-orange-400 font-bold mt-1 shrink-0">
                            •
                          </span>
                          <span className="text-gray-700 leading-relaxed">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-100 mb-6" />

                  {/* Tech Stack */}
                  <div>
                    <p className="text-gray-700 font-semibold mb-4">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-sm font-medium bg-orange-50 text-orange-600 border border-orange-100 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
