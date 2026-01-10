'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Code, Palette, Music, Globe, Database, Zap, Users, Heart, ExternalLink, Github, Package } from 'lucide-react';

export default function CyberWorldCreditsPage() {
  const router = useRouter();

  const developmentTeam = [
    { role: 'Lead Developer', name: 'Furulie LLC', description: 'Full-stack development, game architecture, and system design' },
    { role: 'Game Design', name: 'Furulie LLC', description: 'Game mechanics, quest design, and user experience' },
    { role: 'Visual Design', name: 'Furulie LLC', description: 'UI/UX design, concept art, and visual effects' },
    { role: 'Backend Development', name: 'Furulie LLC', description: 'Server architecture, multiplayer systems, and API design' },
  ];

  const technologyStack = [
    { name: 'Phaser.js', version: '3.70+', description: 'Isometric rendering and scene management', category: 'Game Engine', link: 'https://phaser.io' },
    { name: 'Next.js', version: '14.2+', description: 'React framework for production', category: 'Framework', link: 'https://nextjs.org' },
    { name: 'React', version: '18.3+', description: 'UI library for building interfaces', category: 'UI Library', link: 'https://react.dev' },
    { name: 'TypeScript', version: '5.3+', description: 'Type safety and developer experience', category: 'Language', link: 'https://www.typescriptlang.org' },
    { name: 'Socket.io', version: '4.7+', description: 'Real-time client-server communication', category: 'Multiplayer', link: 'https://socket.io' },
    { name: 'Framer Motion', version: '11.0+', description: 'Production-ready motion library', category: 'Animations', link: 'https://www.framer.com/motion' },
    { name: 'Vite', version: '5.0+', description: 'Next generation frontend tooling', category: 'Build Tool', link: 'https://vitejs.dev' },
    { name: 'Express.js', version: '4.18+', description: 'Fast web framework for Node.js', category: 'Server', link: 'https://expressjs.com' },
    { name: 'Node.js', version: '18+', description: 'JavaScript runtime', category: 'Runtime', link: 'https://nodejs.org' },
  ];

  const visualDesign = [
    { aspect: 'UI/UX Design', description: 'Comprehensive interface design with cyberpunk aesthetics' },
    { aspect: 'Concept Art', description: 'Detailed concept images matching game environments' },
    { aspect: 'Visual Effects', description: 'Neon glows, particles, data streams, and holographic displays' },
    { aspect: 'Animations', description: 'Smooth animations for characters, NPCs, and environmental elements' },
    { aspect: 'Isometric Rendering', description: 'Advanced isometric graphics engine with depth and lighting' },
  ];

  const audioCredits = [
    { item: 'Background Music', description: 'Cyberpunk-themed ambient music and soundtracks' },
    { item: 'Sound Effects', description: 'Combat sounds, UI feedback, and environmental audio' },
    { item: 'Audio Engine', description: 'Phaser.js audio system integration' },
  ];

  const specialThanks = [
    { name: 'Phaser.js Community', reason: 'Excellent documentation and community support' },
    { name: 'Next.js Team', reason: 'Amazing framework and developer experience' },
    { name: 'Open Source Community', reason: 'Countless libraries and tools that made this possible' },
    { name: 'Beta Testers', reason: 'Valuable feedback and bug reports' },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl text-[#00f3ff] font-bold font-mono mb-2" style={{ textShadow: '0 0 30px rgba(0,243,255,0.8)' }}>
            ℹ️ CREDITS
          </h1>
          <p className="text-[#888] font-mono">Thank you to everyone who made this possible</p>
        </div>

        {/* Development Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 bg-[rgba(0,243,255,0.05)] border border-[#00f3ff]/30 rounded-lg"
        >
          <h2 className="text-2xl text-[#00f3ff] font-bold font-mono mb-4 flex items-center gap-2">
            <Code className="w-6 h-6" /> Development Team
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {developmentTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-[rgba(0,243,255,0.05)] border border-[#00f3ff]/20 rounded"
              >
                <div className="text-[#00f3ff] font-bold font-mono mb-1">{member.role}</div>
                <div className="text-white font-mono mb-2">{member.name}</div>
                <div className="text-xs text-[#888] font-mono">{member.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 p-6 bg-[rgba(0,255,65,0.05)] border border-[#00ff41]/30 rounded-lg"
        >
          <h2 className="text-2xl text-[#00ff41] font-bold font-mono mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6" /> Technology Stack
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {technologyStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="p-4 bg-[rgba(0,255,65,0.05)] border border-[#00ff41]/20 rounded hover:border-[#00ff41]/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#00ff41]" />
                    <div>
                      <div className="text-[#00ff41] font-bold font-mono text-sm">{tech.name}</div>
                      <div className="text-xs text-[#888] font-mono">{tech.version}</div>
                    </div>
                  </div>
                  <a
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4 text-[#00ff41]" />
                  </a>
                </div>
                <div className="text-xs text-[#888] font-mono mb-1">{tech.category}</div>
                <div className="text-xs text-[#aaa] font-mono">{tech.description}</div>
                <a
                  href={`https://www.npmjs.com/package/${tech.name.toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs text-[#00ff41] font-mono hover:underline"
                >
                  <Package className="w-3 h-3" /> View on npm
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8 p-6 bg-[rgba(255,0,255,0.05)] border border-[#ff00ff]/30 rounded-lg"
        >
          <h2 className="text-2xl text-[#ff00ff] font-bold font-mono mb-4 flex items-center gap-2">
            <Palette className="w-6 h-6" /> Visual Design
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {visualDesign.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-4 bg-[rgba(255,0,255,0.05)] border border-[#ff00ff]/20 rounded"
              >
                <div className="text-[#ff00ff] font-bold font-mono mb-1">{item.aspect}</div>
                <div className="text-sm text-[#888] font-mono">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Audio Credits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8 p-6 bg-[rgba(255,170,0,0.05)] border border-[#ffaa00]/30 rounded-lg"
        >
          <h2 className="text-2xl text-[#ffaa00] font-bold font-mono mb-4 flex items-center gap-2">
            <Music className="w-6 h-6" /> Audio
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {audioCredits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="p-4 bg-[rgba(255,170,0,0.05)] border border-[#ffaa00]/20 rounded"
              >
                <div className="text-[#ffaa00] font-bold font-mono mb-2">{item.item}</div>
                <div className="text-sm text-[#888] font-mono">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Thanks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-8 p-6 bg-[rgba(255,255,0,0.05)] border border-[#ffff00]/30 rounded-lg"
        >
          <h2 className="text-2xl text-[#ffff00] font-bold font-mono mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6" /> Special Thanks
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {specialThanks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="p-4 bg-[rgba(255,255,0,0.05)] border border-[#ffff00]/20 rounded"
              >
                <div className="text-[#ffff00] font-bold font-mono mb-1">{item.name}</div>
                <div className="text-sm text-[#888] font-mono">{item.reason}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center p-6 border-t border-[#00f3ff]/30"
        >
          <p className="text-[#888] font-mono text-sm mb-4">
            CyberWorld MMO - A complete cybersecurity-themed multiplayer experience
          </p>
          <p className="text-[#00f3ff] font-mono text-xs">
            Made with ❤️ by Furulie LLC • Powered by cutting-edge web technologies
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/cyberworld/play')}
            className="px-8 py-4 bg-transparent border-2 border-[#00ff41] text-[#00ff41] font-mono hover:bg-[rgba(0,255,65,0.2)] transition-all rounded"
          >
            ▶ PLAY GAME
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/desktop')}
            className="px-8 py-4 bg-transparent border-2 border-[#888] text-[#888] font-mono hover:bg-[rgba(136,136,136,0.2)] transition-all rounded"
          >
            ← BACK TO DESKTOP
          </motion.button>
        </div>
      </div>
    </div>
  );
}
