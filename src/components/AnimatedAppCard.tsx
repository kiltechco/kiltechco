import { motion } from 'framer-motion';
import { useState } from 'react';

interface App {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  color: string;
}

interface Props {
  app: App;
  index: number;
}

export default function AnimatedAppCard({ app, index }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl overflow-hidden cursor-pointer"
    >
      {/* Animated Gradient Background */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${app.color}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.15 : 0 }}
        transition={{ duration: 0.4 }}
      />
      
      <div className="relative z-10">
        {/* Icon/Emoji with bounce animation */}
        <motion.div 
          className="text-6xl mb-6"
          animate={{ 
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        >
          {app.image}
        </motion.div>

        {/* Title */}
        <motion.h3 
          className="text-2xl font-bold mb-4 group-hover:text-primary-400 transition-colors"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {app.title}
        </motion.h3>

        {/* Description */}
        <motion.p 
          className="text-gray-300 mb-6 leading-relaxed"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {app.description}
        </motion.p>

        {/* Tech Stack with stagger animation */}
        <div className="flex flex-wrap gap-2">
          {app.tech.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Animated Border */}
        <motion.div 
          className="absolute inset-0 border-2 rounded-2xl pointer-events-none"
          initial={{ borderColor: "rgba(59, 130, 246, 0)" }}
          animate={{ 
            borderColor: isHovered ? "rgba(59, 130, 246, 0.5)" : "rgba(59, 130, 246, 0)"
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

