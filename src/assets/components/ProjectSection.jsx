import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

// Project Section Component
const ProjectSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack online shopping site with secure payment integration and responsive UI.",
      image: "https://source.unsplash.com/600x400/?ecommerce,website",
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://ecommerce-demo.com",
    },
    {
      title: "School Management System",
      description:
        "Admin panel for managing students, teachers, classes, and exams in a centralized platform.",
      image: "https://source.unsplash.com/600x400/?school,management",
      github: "https://github.com/yourusername/school-system",
      demo: "#",
    },
    {
      title: "AI Chatbot",
      description:
        "A chatbot powered by NLP and deep learning models to provide intelligent responses.",
      image: "https://source.unsplash.com/600x400/?ai,chatbot",
      github: "https://github.com/yourusername/ai-chatbot",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio designed with React.js and Tailwind CSS for clean and modern UI.",
      image: "https://source.unsplash.com/600x400/?portfolio,website",
      github: "https://github.com/yourusername/portfolio",
      demo: "#",
    },
    {
      title: "Book Recommendation System",
      description:
        "ML-powered recommendation engine using collaborative filtering and visualization.",
      image: "https://source.unsplash.com/600x400/?books,library",
      github: "https://github.com/yourusername/book-recommendation",
      demo: "#",
    },
    {
      title: "Barber Shop Website",
      description:
        "Booking platform for haircuts and grooming with an admin dashboard.",
      image: "https://source.unsplash.com/600x400/?barber,shop",
      github: "https://github.com/yourusername/barber-shop",
      demo: "#",
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "Interactive dashboard for analytics built with React and Chart libraries.",
      image: "https://source.unsplash.com/600x400/?dashboard,data",
      github: "https://github.com/yourusername/data-dashboard",
      demo: "#",
    },
    {
      title: "Kiddo Bazar",
      description:
        "An online store for kids’ products and toys with cart and payment system.",
      image: "https://source.unsplash.com/600x400/?kids,toys",
      github: "https://github.com/yourusername/kiddo-bazar",
      demo: "#",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3); // show 3 more each time
  };

  return (
    <div className="py-12 px-6 md:px-12 bg-gray-50" id="projects">
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
            <p className="text-gray-600 mb-2">— Projects</p>
            <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-900">
              <span className="text-orange-400">Projects</span> I’ve Built
            </h2>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col"
            >
              {/* Project Image */}
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6">{project.description}</p>

              {/* Buttons */}
              <div className="mt-auto flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-orange-400 hover:text-orange-500 transition"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < projects.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleViewMore}
              className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-medium transition"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
