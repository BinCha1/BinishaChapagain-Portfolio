import { motion } from "framer-motion";
import { Download } from "lucide-react";
import binisha from "../../../public/binisha.jpg";
import BinishaCV from "../../../public/BinishaCV.pdf";

// Hero Section Component
const HeroSection = () => {
  return (
    <div
      className="relative px-4 sm:px-6 md:px-12 pb-12 sm:pb-20 lg:mt-32 mt-22"
      id="home"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 relative z-10"
          >
            {/* Hello Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-flex items-center space-x-2 bg-orange-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border-2 border-dashed border-orange-300"
            >
              <span className="text-orange-600 font-medium text-sm sm:text-base">
                Hello There!
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                I'm <span className="text-orange-400">Binisha Chapagain</span>,
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Full Stack Developer
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Based in Nepal.
              </h3>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-600 text-base sm:text-lg max-w-md sm:max-w-lg leading-relaxed"
            >
              Full-Stack Developer & AI/ML enthusiast passionate about building
              smart and scalable solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Download CV Button */}
              <div className="flex justify-center md:justify-start mt-6">
                <a href={BinishaCV} download>
                  <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full flex items-center space-x-2 transition-all transform hover:scale-105">
                    <Download className="w-5 h-5" />
                    <span className="font-medium">Download CV</span>
                  </button>
                </a>
              </div>
              {/* <button className="bg-white hover:bg-gray-50 text-green-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-green-200 flex items-center justify-center space-x-2 transition-all hover:scale-105">
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">
                  Hire Me
                </span>
              </button> */}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:ml-auto mt-10 lg:mt-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
              {/* Profile Circle */}
              <div className="w-full h-full bg-orange-400 rounded-full relative">
                {/* Inner Circle for Image */}
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <img
                      src={binisha}
                      alt="Binisha"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
