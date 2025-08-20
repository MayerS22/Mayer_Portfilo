'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      gradient: "from-pink-500 to-purple-600",
      skills: [
        "React", "HTML5", "CSS3", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Redux"
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      gradient: "from-blue-500 to-cyan-600",
      skills: [
        "Node.js", "Python", "C++", "Express.js", "Firebase", "Nest.js", "REST APIs", "GraphQL"
      ]
    },
    {
      title: "Database & Cloud",
      icon: "☁️",
      gradient: "from-green-500 to-emerald-600",
      skills: [
        "SQL", "Power BI", "Data Engineering", "Database Design", "Reporting", "PostgreSQL", "MongoDB", "Cloud Services"
      ]
    }
  ];

  return (
    <section id="skills" ref={ref} className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/15 to-emerald-600/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card with vibrant border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative p-8 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 hover:border-white/50 transition-all duration-300 shadow-2xl">
                {/* Category header with icon */}
                <div className="flex items-center justify-center mb-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mr-4 shadow-lg border border-white/40 backdrop-blur-sm`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.05 
                      }}
                      whileHover={{ 
                        scale: 1.08, 
                        y: -4,
                        boxShadow: "0 15px 35px rgba(255, 255, 255, 0.2)"
                      }}
                      className="p-3 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-300 text-center border border-white/30 hover:border-white/50 backdrop-blur-sm shadow-lg"
                    >
                      <span className="text-white font-semibold text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Additional <span className="gradient-text">Technologies</span>
            </h3>
            <p className="text-gray-200 text-lg">
              Tools and technologies that enhance my development workflow
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Flutter", "Android", "Kotlin", "Jetpack Compose", "Git", "Agile",
              "Testing", "System Design", "Problem Solving", "Unit Testing", "Integration Testing", "E2E Testing",
              "Performance Testing", "Code Quality", "REST APIs", "Material Design", "Biometric Auth", "Firebase"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: "0 12px 30px rgba(255, 255, 255, 0.25)"
                }}
                className="p-4 rounded-xl bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 transition-all duration-300 text-center border border-white/30 hover:border-white/50 backdrop-blur-sm group shadow-lg"
              >
                <span className="text-white font-semibold text-sm group-hover:text-white transition-colors duration-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Approach */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Development <span className="gradient-text">Approach</span>
            </h3>
            <p className="text-gray-200 text-lg">
              My philosophy for creating exceptional software solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Problem-First",
                description: "Understanding the core problem before diving into solutions",
                icon: "🎯",
                gradient: "from-red-500 to-orange-600"
              },
              {
                title: "Performance-Driven",
                description: "Optimizing for speed, accessibility, and user experience",
                icon: "⚡",
                gradient: "from-yellow-500 to-orange-600"
              },
              {
                title: "User-Centric",
                description: "Creating intuitive experiences that users love",
                icon: "👥",
                gradient: "from-blue-500 to-purple-600"
              }
            ].map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative p-8 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 hover:border-white/50 transition-all duration-300 text-center shadow-2xl">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${highlight.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-white/40 backdrop-blur-sm`}>
                    <span className="text-3xl">{highlight.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{highlight.title}</h4>
                  <p className="text-gray-200 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
