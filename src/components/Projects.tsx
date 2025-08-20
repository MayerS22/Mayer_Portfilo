'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "AutoInsight - Business Intelligence Platform",
      description: "A+ Graduation project: Advanced data analysis and machine learning platform designed to help businesses navigate challenges during layoffs and restructuring. Features predictive analytics, workforce forecasting, and real-time decision-making tools.",
      image: "/images/AutoInsight.png",
      technologies: ["React", "Vite", "Tailwind CSS", "Redux", "Python", "Machine Learning", "Data Analysis", "Forecasting Models", "Interactive Dashboards", "Real-time Analytics"],
      liveUrl: "#",
      githubUrl: "https://github.com/MayerS22/AutoInsight",
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "Taskify - Task Management App",
      description: "Smart, simple, and stylish task management application for daily organization, deadline reminders, and personal productivity. Built with TypeScript and modern web technologies.",
      image: "/images/Taskify.png",
      technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "SQLite", "Authentication", "Real-time Updates"],
      liveUrl: "#",
      githubUrl: "https://github.com/MayerS22/Taskify",
      category: "Full-Stack"
    },
    {
      id: 3,
      title: "Speedo Transfer Mobile Application",
      description: "Completed secure money transfer application for Banque Misr. Features include user authentication, fund transfers, transaction history, and real-time notifications. Built with Jetpack Compose, Kotlin, and MVVM architecture.",
      image: "/images/Speedo.png",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Android", "Firebase", "REST APIs", "Material Design", "Biometric Auth"],
      liveUrl: "#",
      githubUrl: "https://github.com/MayerS22/speedoo",
      category: "Mobile"
    },
    {
      id: 4,
      title: "E-Commerce Mobile Application",
      description: "Mobile e-commerce app with user authentication and real-time product data. Built with Flutter and Firebase.",
      image: "/images/ecommerce-app.jpg",
      technologies: ["Flutter", "Firebase", "Dart", "State Management", "Cloud Firestore", "Authentication", "Payment Integration", "Push Notifications"],
      liveUrl: "#",
      githubUrl: "https://github.com/MayerS22/E-commerce-Mobile-App",
      category: "Mobile"
    }
  ];

  const categories = ["All", "Full-Stack", "Mobile", "Frontend", "Backend", "AI/ML"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" ref={ref} className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills and passion for creating innovative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative bg-gray-800/50 rounded-2xl overflow-hidden glass hover:bg-gray-700/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to a gradient background if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                
                {/* Fallback gradient background */}
                <div 
                  className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <span className="text-4xl opacity-50">📱</span>
                </div>
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4"
                >
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-400 font-medium">{project.category}</span>
                  <motion.div
                    animate={{ scale: hoveredProject === project.id ? 1.1 : 1 }}
                    className="text-2xl"
                  >
                    👁️
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === project.id ? 0.1 : 0 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in working together? Let&apos;s discuss your next project!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
