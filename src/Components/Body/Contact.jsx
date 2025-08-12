import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 w-[80.94vw] mx-auto inter-font">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-18 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 px-8 rounded-xl my-20 text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-25 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="relative pl-7 border-l-4 h-fit border-indigo-100 py-5">
            {/* Point markers */}
            <div className="absolute -left-3 md:-left-3.5 top-5 md:w-6 w-5 h-5 md:h-6 bg-indigo-100 rounded-full border-4 border-gray-900"></div>
            <div className="absolute -left-3 md:-left-3.5 top-18 md:top-24 md:w-6 w-5 h-5 md:h-6 bg-indigo-100 rounded-full border-4 border-gray-900"></div>
            <div className="absolute -left-3 md:-left-3.5 top-29.5 md:top-43 md:w-6 w-5 h-5 md:h-6 bg-indigo-100 rounded-full border-4 border-gray-900"></div>

            {/* Info Items */}
            <div className="mb-6 md:mb-12 flex items-center gap-4">
              <FaEnvelope className="text-indigo-400 text-lg md:text-2xl" />
              <p className="md:text-lg line-clamp-1">thaqiulislamkafi@gmail.com</p>
            </div>
            <div className="mb-6 md:mb-12 flex items-center gap-4">
              <FaWhatsapp className="text-green-400 text-lg md:text-2xl" />
              <p className="md:text-lg">+880 1813694582</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-400 text-lg md:text-2xl" />
              <p className="md:text-lg">Chittagong, Bangladesh</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-lg font-medium w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
