'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function CyberWorldCreditsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl text-[#00f3ff] font-bold font-mono mb-2" style={{ textShadow: '0 0 30px rgba(0,243,255,0.8)' }}>
            ℹ️ CREDITS
          </h1>
          <p className="text-[#888] font-mono">Thank you to everyone who made this possible</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 bg-[rgba(0,243,255,0.05)] border border-[#00f3ff]/30 rounded-lg"
          >
            <h2 className="text-2xl text-[#00f3ff] font-bold font-mono mb-4">Development Team</h2>
            <div className="space-y-2 text-sm font-mono text-[#888]">
              <div>• Furulie LLC - Development & Design</div>
              <div>• Game Engine - Phaser.js</div>
              <div>• Framework - Next.js</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 bg-[rgba(0,255,65,0.05)] border border-[#00ff41]/30 rounded-lg"
          >
            <h2 className="text-2xl text-[#00ff41] font-bold font-mono mb-4">Technology Stack</h2>
            <div className="space-y-2 text-sm font-mono text-[#888]">
              <div>• Phaser.js - Game Engine</div>
              <div>• Next.js - Web Framework</div>
              <div>• React - UI Library</div>
              <div>• TypeScript - Type Safety</div>
              <div>• Socket.io - Multiplayer</div>
              <div>• Framer Motion - Animations</div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8">
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
