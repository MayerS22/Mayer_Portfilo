'use client';
import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

// Lazy load heavy components
const LazyProjects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="text-white">Loading projects...</div></div>,
  ssr: false
});

const LazyExperience = dynamic(() => import('@/components/Experience'), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="text-white">Loading experience...</div></div>,
  ssr: false
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Memoize background elements to prevent unnecessary re-renders
  const backgroundElements = useMemo(() => (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <motion.div
        className="fixed top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  ), []);

  if (!isClient) {
    return (
      <main className="min-h-screen bg-black relative overflow-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-white text-xl">Loading...</div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Optimized background elements */}
      {backgroundElements}

      <Navigation />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <LazyProjects />
        <LazyExperience />
        <Contact />
      </div>
    </main>
  );
}
