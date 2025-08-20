'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mayerfrieg@outlook.com',
      link: 'mailto:mayerfrieg@outlook.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+201288244283',
      link: 'tel:+201288244283'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Egypt',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/MayerS22',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/mayer-frieg-7a0368226/',
      label: 'LinkedIn'
    }
  ];

  return (
    <section id="contact" ref={ref} className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let&apos;s discuss your next project or just say hello. I&apos;m always open to new opportunities!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Contact Info Cards */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Contact Information</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="flex flex-col items-center gap-4 p-6 rounded-xl glass hover:bg-gray-700/50 transition-all duration-300 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg">{info.title}</h4>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Follow Me</h3>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 relative z-20"
                  >
                    <social.icon size={28} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="relative z-5">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Quick Actions</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-md mx-auto">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/documents/Mayer Soliman.pdf';
                    link.download = 'Mayer Soliman.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 relative z-10"
                >
                  Download Resume
                </motion.button>
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('mailto:mayerfrieg@outlook.com')}
                  className="p-4 bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700 transition-all duration-300 relative z-10"
                >
                  Send Email
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
