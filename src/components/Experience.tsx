'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Building, GraduationCap, Award, Briefcase } from 'lucide-react';
import Image from 'next/image';


const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'QueenSoft',
      location: 'Egypt',
      period: 'July. 2025 – Present',
      description: 'Full Stack Developer building scalable web applications with modern technologies.',
      technologies: ['Next.js', 'Nest.js', 'PostgreSQL', 'TypeScript', 'React', 'Node.js', 'REST APIs'],
      type: 'work',
      image: '/images/QueenSoft.jpg',
      imageAlt: 'QueenSoft Logo'
    },
    {
      title: 'Administrative Assistant',
      company: 'Christian Medical Foundation (CMF)',
      location: 'Egypt',
      period: 'Aug. 2023 – Present',
      description: 'Supporting foundation operations through data management and event coordination.',
      technologies: ['Microsoft Office', 'Data Entry', 'Report Generation', 'Event Management', 'Process Optimization'],
      type: 'work',
      image: '/images/CMF.jpg',
      imageAlt: 'CMF Logo'
    },
    {
      title: 'Microsoft Student Partner (MSP)',
      company: 'Microsoft Tech Club at Ain Shams University',
      location: 'Egypt',
      period: 'Oct 2022 – Oct 2023',
      description: 'Led technical workshops and mentored students in Microsoft technologies. Organized hackathons and managed team of 15+ members.',
      technologies: ['Microsoft Azure', 'Power Platform', 'Power BI', 'GitHub', 'Leadership', 'Event Management', 'Student Mentoring', 'Technical Workshops'],
      type: 'work',
      image: '/images/MSP.jpg',
      imageAlt: 'Microsoft Logo'
    },
    {
      title: 'Database Administrator',
      company: 'Christian Medical Foundation (CMF)',
      location: 'Egypt',
      period: 'Sept 2022 – Feb 2023',
      description: 'Designed and implemented database system for committee management using Microsoft Access.',
      technologies: ['Microsoft Access', 'Database Design', 'SQL', 'Data Modeling', 'Process Automation'],
      type: 'work',
      image: '/images/CMF.jpg',
      imageAlt: 'CMF Logo'
    }
  ];

  const education = [
    {
      title: 'Bachelor of Computer and Information Science',
      institution: 'Ain Shams University',
      location: 'Egypt',
      period: 'Sept 2021 - July 2025',
      description: 'GPA: 3.005 - Software engineering, database systems, and modern development practices.',
      type: 'education',
      image: '/images/CS.jpg',
      imageAlt: 'Ain Shams University Logo'
    }
  ];

  const certifications = [
    {
      title: 'Android Internship',
      issuer: 'Banque Misr',
      date: 'Aug. 2024 – Sept. 2024',
      description: 'Professional internship in Android development.',
      type: 'certification',
      image: '/images/BM.jpg',
      imageAlt: 'Banque Misr Logo'
    },
    {
      title: 'Data Engineering Training',
      issuer: 'Potenia Ain Shams University',
      date: 'Aug. 2023 – Sept. 2023',
      description: 'Training in data engineering concepts.',
      type: 'certification',
      image: '/images/POTENTIA.jpg',
      imageAlt: 'Potenia Logo'
    },
    {
      title: 'Flutter Training',
      issuer: 'Support Ain Shams University',
      date: 'Aug. 2023 – Sept. 2023',
      description: 'Mobile app development with Flutter.',
      type: 'certification',
      image: '/images/Support.jpg',
      imageAlt: 'Support Logo'
    },
    {
      title: 'Software Engineering Training',
      issuer: 'ALX',
      date: 'Feb. 2023 – Apr. 2023',
      description: 'Intensive software engineering program.',
      type: 'certification',
      image: '/images/ALX.jpg',
      imageAlt: 'ALX Logo'
    }
  ];

  const courses = [
    {
      title: 'The Git & GitHub Bootcamp',
      issuer: 'Udemy',
      date: 'Aug 2025 – Sept 2025, 17 Hours',
      description: 'Learn how to use Git and GitHub to manage your code and collaborate with others.',
      type: 'course',
      image: '/images/Udemy.jpg',
      imageAlt: 'Udemy Logo'
    },
    {
      title: 'Nest.js: The Complete Developer\'s Guide',
      issuer: 'Udemy',
      date: 'jun 2025 – July 2025, 20 Hours',
      description: 'Learn how to build a web application from scratch using Nest.js, a powerful Node.js framework.',
      type: 'course',
      image: '/images/Udemy.jpg',
      imageAlt: 'Udemy Logo'
    },
    {
      title: 'Freelancer\'s Success Toolkit',
      issuer: 'E-Youth | ITIDA',
      date: 'Mar. 2025',
      description: 'Training program for freelancing success.',
      type: 'course',
      image: '/images/ITIDA.jpg',
      imageAlt: 'E-Youth Logo'
    },
    {
      title: 'Flutter Course',
      issuer: 'Udemy',
      date: 'Sept. 2023 – Jan. 2024, 53 Hours',
      description: 'Comprehensive Flutter development course covering mobile app development.',
      type: 'course',
      image: '/images/Udemy.jpg',
      imageAlt: 'Udemy Logo'
    },
    {
      title: 'Python 3 Ultimate Guide',
      issuer: 'Udemy',
      date: 'July. 2023 – Sept. 2023, 13 Hours',
      description: 'Complete Python programming course covering fundamentals and advanced concepts.',
      type: 'course',
      image: '/images/Udemy.jpg',
      imageAlt: 'Udemy Logo'
    }
  ];

  return (
    <section id="experience" ref={ref} className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Education & Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="text-blue-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="p-6 rounded-2xl glass hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <Image
                          src={edu.image}
                          alt={edu.imageAlt}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="fallback-icon absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">{edu.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                          <div className="flex items-center gap-1">
                            <Building size={14} />
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-400 mb-3">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <div className="flex items-center mb-8">
                <Briefcase className="text-blue-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-white">Work Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="p-6 rounded-2xl glass hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <Image
                          src={exp.image}
                          alt={exp.imageAlt}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="fallback-icon absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">{exp.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                          <div className="flex items-center gap-1">
                            <Building size={14} />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-400 mb-3">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.description}</p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Certifications & Courses */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            {/* Certifications */}
            <div>
              <div className="flex items-center mb-8">
                <Award className="text-blue-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-white">Certifications & Training</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="p-4 rounded-xl glass hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <Image
                          src={cert.image}
                          alt={cert.imageAlt}
                          width={40}
                          height={40}
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="fallback-icon absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                          <Award className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">{cert.title}</h4>
                        <p className="text-gray-400 text-xs mb-1">{cert.issuer}</p>
                        <p className="text-gray-500 text-xs mb-2">{cert.date}</p>
                        <p className="text-gray-300 text-xs leading-relaxed">{cert.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="text-blue-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-white">Courses & Learning</h3>
              </div>
              
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="p-4 rounded-xl glass hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <Image
                          src={course.image}
                          alt={course.imageAlt}
                          width={40}
                          height={40}
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="fallback-icon absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">{course.title}</h4>
                        <p className="text-gray-400 text-xs mb-1">{course.issuer}</p>
                        <p className="text-gray-500 text-xs mb-2">{course.date}</p>
                        <p className="text-gray-300 text-xs leading-relaxed">{course.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
