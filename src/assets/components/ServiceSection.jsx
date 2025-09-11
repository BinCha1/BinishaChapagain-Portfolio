import { motion } from "framer-motion";
import { ArrowRight, Globe, Grid3X3, Zap } from "lucide-react";

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: Grid3X3,
      title: "Full Stack Application Development",
      description:
        "I specialize in building end-to-end applications, handling frontend, backend, and database integration. My solutions are robust, secure, and tailored to meet real-world business needs, combining the best of web development and AI technologies.",
    },
    {
      icon: Zap,
      title: "AI & Machine Learning Solutions",
      description:
        "I develop intelligent solutions with Python, NumPy, LangChain, Agents, LangGraph, Matplotlib, and Seaborn. From predictive models to data visualization, I turn complex data into actionable insights for smarter decision-making.",
    },
    {
      icon: Globe,
      title: "Web Development & Design",
      description:
        "I build responsive and modern web applications using Laravel, React.js, FastAPI, and Tailwind CSS. I focus on creating clean, scalable, and user-friendly interfaces that deliver seamless performance across all devices.",
    },
  ];

  return (
    <div className="py-12 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-16"
        >
          <div>
            <p className="text-gray-600 mb-2">— Services</p>
            <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-900">
              <span className="text-orange-400">Services</span> I Provide
            </h2>
          </div>
          {/* <button className="bg-green-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-green-800 transition-colors">
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </button> */}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="text-orange-400 font-medium flex items-center space-x-2 hover:space-x-3 transition-all">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServicesSection;
