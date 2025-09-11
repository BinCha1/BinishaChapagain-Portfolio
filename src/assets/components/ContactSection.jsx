import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useRef } from "react";

const ContactSection = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Send to your own email
    emailjs
      .sendForm(
        "service_2tzmxwi", // Your service ID
        "template_wld1a1n", // Your email to self
        formRef.current,
        "9lzo0OS4ZFxWB-90p" // Your public key
      )
      .then((result) => {
        console.log("Email sent:", result.text);

        // After successful send, trigger auto-reply
        const form = formRef.current;
        const userName = form["user_name"].value;
        const userEmail = form["user_email"].value;
        const userMessage = form["message"].value;

        emailjs.send(
          "service_2tzmxwi", // Same service ID
          "template_pvw2f1f", // Your auto-reply template
          {
            to_name: userName,
            to_email: userEmail,
            message: userMessage,
          },
          "9lzo0OS4ZFxWB-90p"
        );

        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Email error:", error.text);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="py-12 px-6 md:px-12 bg-gray-50" id="contact">
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
              <span>contactwithbinisha@email.com</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-700">
              <Phone className="w-5 h-5 text-orange-400" />
              <span>+977 9802973937</span>
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
