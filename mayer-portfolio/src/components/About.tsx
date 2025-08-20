'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Users, Zap, Target } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Code, value: "1+", label: "Years Experience" },
    { icon: Users, value: "30+", label: "Projects Completed" },
    { icon: Zap, value: "100%", label: "Client Satisfaction" },
    { icon: Target, value: "24/7", label: "Support Available" },
  ];

  return (
    <section id="about" ref={ref} className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate Full-Stack Developer with expertise in modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Turning Ideas Into Digital Reality
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I am a passionate Full-Stack Developer who thrives on continuous learning and creative problem-solving. 
                I specialize in building complete web applications from frontend to backend, ensuring seamless user experiences 
                and robust server-side solutions. My approach combines technical expertise with a focus on user-centered design.
              </p>
              
              <p>
                I specialize in building modern, scalable full-stack web applications. From responsive frontend interfaces 
                to robust backend systems, I create complete solutions that deliver exceptional user experiences and powerful functionality.
                My expertise spans across web development, mobile applications, and cloud infrastructure.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community. I believe in continuous learning and 
                staying ahead of industry trends.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-lg glass"
                >
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative p-8 rounded-2xl glass">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20"
              />
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Full-Stack Development</h4>
                    <p className="text-gray-400">End-to-end solutions</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Modern React & Next.js Applications",
                    "Backend APIs with Node.js & Python",
                    "Database Design & Cloud Infrastructure",
                    "UI/UX Design Implementation",
                    "Performance Optimization & Testing"
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-20"
              />
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -left-8 w-12 h-12 bg-blue-500/20 rounded-full"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 w-8 h-8 bg-purple-500/20 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
