import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";
import { useRef, useState } from "react";

const ContactSection = () => {
  const formRef = useRef();

  // State to manage our custom popup notification
  const [notification, setNotification] = useState({
    show: false,
    type: "success", // "success" or "error"
    message: "",
  });

  // Helper function to trigger the popup
  const showPopup = (type, message) => {
    setNotification({ show: true, type, message });
    // Automatically hide after 4 seconds
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    const formData = new FormData(form);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");
    const messageContent = formData.get("message");

    try {
      // 1. Send email to YOU
      await emailjs.sendForm(
        "service_2tzmxwi",
        "template_wld1a1n",
        form,
        "9lzo0OS4ZFxWB-90p",
      );

      // 2. Auto-reply to USER
      await emailjs.send(
        "service_2tzmxwi",
        "template_pvw2f1f",
        {
          to_name: userName,
          to_email: userEmail,
          message: messageContent,
        },
        "9lzo0OS4ZFxWB-90p",
      );

      // Trigger success popup
      showPopup(
        "success",
        "Message sent successfully! I will get back to you soon.",
      );
      form.reset();
    } catch (error) {
      console.error("Email error:", error);
      // Trigger error popup
      showPopup("error", "Failed to send message. Please try again later.");
    }
  };

  return (
    <div
      className="py-12 px-6 md:px-12 from-orange-400 to-orange-500 relative"
      id="contacts"
    >
      {/* --- FLOATING POPUP NOTIFICATION --- */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 bg-white shadow-2xl rounded-xl p-4 border border-gray-100 max-w-sm w-[90vw] md:w-auto"
          >
            {notification.type === "success" ? (
              <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-6 h-6 text-rose-500 flex-shrink-0" />
            )}

            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">
                {notification.type === "success" ? "Success!" : "Error"}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                {notification.message}
              </p>
            </div>

            <button
              onClick={() =>
                setNotification((prev) => ({ ...prev, show: false }))
              }
              className="text-gray-400 hover:text-gray-600 transition p-1 rounded-lg hover:bg-gray-50"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left - Heading + Info */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-2">— Contact</p>
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-900 mb-6">
            Let’s <span className="text-orange-400">Work Together</span>
          </h2>
          <p className="text-gray-600 mb-10">
            Have a project in mind or just want to say hi? Feel free to reach
            out. I’m always open to discussing new opportunities,
            collaborations, or just sharing ideas.
          </p>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-gray-700">
              <Mail className="w-5 h-5 text-orange-400" />
              <a href="mailto:contactwithbinisha@gmail.com">
                <span>contactwithbinisha@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4 text-gray-700">
              <Phone className="w-5 h-5 text-orange-400" />
              <a href="tel:+9779802973937">
                {" "}
                <span>9802973937</span>
              </a>
            </div>
            <div className="flex items-center space-x-4 text-gray-700">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span>Chitwan, Nepal</span>
            </div>
            <div className="flex space-x-6 mt-4">
              <a
                href="https://www.linkedin.com/in/binisha-chapagain-b83872341/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/BinCha1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white shadow-md rounded-2xl p-8"
        >
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Write your message..."
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-lg font-medium transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
