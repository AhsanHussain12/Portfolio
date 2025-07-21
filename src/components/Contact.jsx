import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactCard = ({ icon: Icon, title, content, link, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="text-blue-400">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <a
            href={link}
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            {content}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
  
    const { name, email, subject, message } = form;
  
    try {
      await emailjs.send(
        'service_s2zuc4f',
        'template_4zdj7o7', 
        {
          from_name: name.trim(),
          from_email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
        },
        '7MliETTdfK6cFog-7' 
      );
  
      setStatus({ type: 'success', msg: 'Message sent successfully!' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err); // helpful for debugging
      setStatus({ type: 'error', msg: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium mb-2 block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {" "}Amazing Together
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or
            opportunities. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ContactCard
            icon={FaEnvelope}
            title="Email"
            content="ahsan123hussain@gmail.com"
            link="mailto:ahsan123hussain@gmail.com"
            delay={0.2}
          />
          <ContactCard
            icon={FaPhone}
            title="Phone"
            content="+92-3212474392"
            link="tel:+923212474392"
            delay={0.3}
          />
          <ContactCard
            icon={FaMapMarkerAlt}
            title="Location"
            content="Karachi, Pakistan"
            link="#"
            delay={0.4}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-800 p-8 rounded-lg max-w-3xl mx-auto"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
            {status && (
              <div className={`text-center mt-4 font-semibold ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {status.msg}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 