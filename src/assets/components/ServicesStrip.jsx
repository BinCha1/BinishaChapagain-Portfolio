import { motion } from "framer-motion";
import { BarChart3, Code, Cpu, Monitor, Zap } from "lucide-react";
import React from "react";

const ServicesStrip = () => {
  const services = [
    { icon: Code, name: "Web Development" },
    { icon: Monitor, name: "Data Analysis" },
    { icon: BarChart3, name: "Machine Learning" },
    { icon: Cpu, name: "Deep Learning" },
    { icon: Zap, name: "AI Agents" },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="bg-orange-400 py-4 sm:py-4 md:py-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <React.Fragment key={service.name}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 sm:space-x-3 text-white cursor-pointer min-w-fit"
              >
                <service.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="font-medium text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
                  {service.name}
                </span>
              </motion.div>
              {index < services.length - 1 && (
                <div className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl hidden xs:block sm:block">
                  ||
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesStrip;
