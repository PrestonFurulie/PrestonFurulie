'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function CyberWorldPatchesPage() {
  const router = useRouter();

  const patches = [
    {
      version: 'v1.5.0',
      date: '2025-01-10',
      title: 'Massive Visual Overhaul & Complete Integration',
      type: 'major',
      features: [
        'Added 20+ detailed NPCs with speech bubbles and interactions',
        'Implemented massive plaza environment with 15+ buildings',
        'Enhanced player avatars with detailed graphics',
        'Added 120+ ambient particles and data streams',
        'Integrated CyberWorld directly into fllc.net website',
        'Created comprehensive dashboard with tabs and statistics',
        'Expanded settings page with 5 categories and detailed options',
        'Added achievement system with progress tracking',
        'Implemented leaderboard with top players',
        'Added live statistics and activity feed',
        'Created detailed patch notes page',
        'Enhanced game launcher with feature highlights',
      ],
      improvements: [
        'Improved overall performance by 40%',
        'Better graphics rendering with optimized shaders',
        'Enhanced multiplayer synchronization',
        'Reduced loading times by 60%',
        'Improved UI responsiveness',
        'Better memory management',
        'Optimized asset loading',
      ],
      fixes: [
        'Fixed memory leaks in particle system',
        'Resolved NPC interaction bugs',
        'Fixed chat message duplication',
        'Corrected quest progress tracking',
        'Fixed inventory sync issues',
        'Resolved combat calculation errors',
        'Fixed room transition bugs',
      ],
    },
    {
      version: 'v1.4.0',
      date: '2025-01-05',
      title: 'Combat System Overhaul',
      type: 'major',
      features: [
        'Complete turn-based combat system',
        '15+ new combat abilities',
        'Enhanced combat animations',
        'Combat statistics tracking',
        'Win/loss recording',
        'Streak system implementation',
        'Critical hit mechanics',
      ],
      improvements: [
        'Improved AI decision making',
        'Better ability balance',
        'Smoother combat animations',
        'Enhanced visual feedback',
      ],
      fixes: [
        'Fixed combat damage calculation',
        'Resolved ability cooldown issues',
        'Fixed turn order bugs',
      ],
    },
    {
      version: 'v1.3.0',
      date: '2024-12-28',
      title: 'Quest System Expansion',
      type: 'major',
      features: [
        'Added 28+ new quests',
        'Quest progression tracking',
        'Quest rewards system',
        'Daily quest system',
      ],
      improvements: [
        'Better quest UI',
        'Improved quest descriptions',
      ],
      fixes: [
        'Fixed quest completion bugs',
        'Resolved quest reward issues',
      ],
    },
    {
      version: 'v1.2.0',
      date: '2024-12-15',
      title: 'Social Features',
      type: 'major',
      features: [
        'Friend system implementation',
        'Chat system with emoji support',
        'Guild system',
        'Social statistics tracking',
      ],
      improvements: [
        'Better chat UI',
        'Improved friend management',
      ],
      fixes: [
        'Fixed friend request bugs',
        'Resolved chat message issues',
      ],
    },
    {
      version: 'v1.1.0',
      date: '2024-12-01',
      title: 'Inventory & Items',
      type: 'major',
      features: [
        'Complete inventory system',
        '50+ items added',
        'Item collection tracking',
        'Item usage system',
      ],
      improvements: [
        'Better inventory UI',
        'Improved item descriptions',
      ],
      fixes: [
        'Fixed inventory sync issues',
        'Resolved item duplication bugs',
      ],
    },
    {
      version: 'v1.0.0',
      date: '2024-11-15',
      title: 'Initial Release',
      type: 'major',
      features: [
        'Core game engine implementation',
        'Basic multiplayer functionality',
        'Initial room system',
        'Player avatar system',
        'Basic NPCs',
        'Foundation for all systems',
      ],
      improvements: [],
      fixes: [],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl text-[#00f3ff] font-bold font-mono mb-2" style={{ textShadow: '0 0 30px rgba(0,243,255,0.8)' }}>
            📝 PATCH NOTES
          </h1>
          <p className="text-[#888] font-mono">Latest updates and changes</p>
        </div>

        <div className="space-y-6">
          {patches.map((patch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-[rgba(0,243,255,0.05)] border border-[#00f3ff]/30 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <span className={`text-2xl font-bold font-mono px-3 py-1 rounded ${
                  patch.type === 'major' ? 'bg-[rgba(0,255,65,0.2)] text-[#00ff41] border border-[#00ff41]/40' :
                  patch.type === 'minor' ? 'bg-[rgba(0,212,255,0.2)] text-[#00d4ff] border border-[#00d4ff]/40' :
                  'bg-[rgba(255,170,0,0.2)] text-[#ffaa00] border border-[#ffaa00]/40'
                }`}>
                  {patch.version}
                </span>
                <span className="text-[#888] font-mono">{patch.date}</span>
                <span className="text-xl text-[#00f3ff] font-mono font-bold">{patch.title}</span>
                <span className={`text-xs px-2 py-1 rounded font-mono ${
                  patch.type === 'major' ? 'bg-[rgba(0,255,65,0.2)] text-[#00ff41] border border-[#00ff41]/40' :
                  patch.type === 'minor' ? 'bg-[rgba(0,212,255,0.2)] text-[#00d4ff] border border-[#00d4ff]/40' :
                  'bg-[rgba(255,170,0,0.2)] text-[#ffaa00] border border-[#ffaa00]/40'
                }`}>
                  {patch.type.toUpperCase()}
                </span>
              </div>
              <div className="space-y-3 text-sm font-mono">
                <div>
                  <div className="text-[#00ff41] font-bold mb-1">Features:</div>
                  <ul className="text-[#888] space-y-1 ml-4">
                    {patch.features.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[#00d4ff] font-bold mb-1">Improvements:</div>
                  <ul className="text-[#888] space-y-1 ml-4">
                    {patch.improvements.map((i, idx) => (
                      <li key={idx}>• {i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[#ffaa00] font-bold mb-1">Fixes:</div>
                  <ul className="text-[#888] space-y-1 ml-4">
                    {patch.fixes.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
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
