import { motion } from 'framer-motion';
import AnimatedAppCard from './AnimatedAppCard';

const apps = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern, scalable online shopping experience with real-time inventory and seamless checkout.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "🛒",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Real-time data visualization and insights platform for business intelligence.",
    tech: ["Next.js", "D3.js", "MongoDB", "AWS"],
    image: "📊",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking with AI-powered workout recommendations.",
    tech: ["React Native", "Firebase", "TensorFlow", "Redux"],
    image: "💪",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "SaaS CRM System",
    description: "Complete customer relationship management with automation and integrations.",
    tech: ["Vue.js", "Python", "Redis", "Docker"],
    image: "🎯",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "AI Content Generator",
    description: "Machine learning powered content creation and optimization tool.",
    tech: ["Python", "OpenAI", "FastAPI", "React"],
    image: "🤖",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Real-Time Chat Platform",
    description: "Secure, scalable messaging platform with video calls and file sharing.",
    tech: ["WebRTC", "Socket.io", "Node.js", "MongoDB"],
    image: "💬",
    color: "from-teal-500 to-cyan-500"
  }
];

export default function AnimatedAppShowcase() {
  return (
    <section id="apps" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-primary-400">Portfolio</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Showcasing innovative applications built with cutting-edge technology
          </motion.p>
        </motion.div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <AnimatedAppCard key={app.id} app={app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

