'use client';

import { BaseWindow } from './BaseWindow';
import { useRouter } from 'next/navigation';
import { useAppState } from '@/hooks/useAppState';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Server, Network, Shield, Target, ShoppingCart, Activity, BarChart3, Zap, Globe, Trophy, Star, Flame, Coins, Gem, Clock, TrendingUp, Gamepad2, Award } from 'lucide-react';

export function CyberWorldWindow(props: Omit<React.ComponentProps<typeof BaseWindow>, 'title' | 'children'> & { config?: any }) {
  const router = useRouter();
  const { startGame } = useAppState();
  const { config = {} } = props;
  const viewMode = config?.view || 'launcher';
  const [liveStats, setLiveStats] = useState({
    onlinePlayers: 1247,
    activeQuests: 89,
    completedToday: 124,
    totalBattles: 12478,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        onlinePlayers: prev.onlinePlayers + Math.floor(Math.random() * 10 - 5),
        activeQuests: prev.activeQuests + (Math.random() > 0.9 ? 1 : Math.random() < 0.1 ? -1 : 0),
        completedToday: prev.completedToday + (Math.random() > 0.95 ? 1 : 0),
        totalBattles: prev.totalBattles + Math.floor(Math.random() * 5),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePlay = () => {
    startGame();
    router.push('/cyberworld/play');
  };

  return (
    <BaseWindow {...props} title="CyberWorld Launcher" width={900} height={700}>
      <div className="h-full flex flex-col bg-[#0a0a0a] font-mono">
        {/* Quick Stats Header */}
        <div className="grid grid-cols-4 gap-4 p-4 border-b border-[#00d4ff]/30">
          <div className="text-center p-3 bg-[rgba(0,255,65,0.1)] border border-[#00ff41]/30 rounded">
            <div className="text-2xl text-[#00ff41] font-bold">12</div>
            <div className="text-xs text-[#888]">Level</div>
          </div>
          <div className="text-center p-3 bg-[rgba(0,212,255,0.1)] border border-[#00d4ff]/30 rounded">
            <div className="text-2xl text-[#00d4ff] font-bold">1,250</div>
            <div className="text-xs text-[#888]">Bits</div>
          </div>
          <div className="text-center p-3 bg-[rgba(255,0,255,0.1)] border border-[#ff00ff]/30 rounded">
            <div className="text-2xl text-[#ff00ff] font-bold">45</div>
            <div className="text-xs text-[#888]">Credits</div>
          </div>
          <div className="text-center p-3 bg-[rgba(255,165,0,0.1)] border border-[#ffaa00]/30 rounded">
            <div className="text-2xl text-[#ffaa00] font-bold">28</div>
            <div className="text-xs text-[#888]">Quests</div>
          </div>
        </div>

        {/* Live Stats Banner */}
        <div className="p-3 bg-[rgba(0,243,255,0.05)] border-b border-[#00f3ff]/20">
          <div className="flex items-center justify-center gap-6 text-xs font-mono">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse"></div>
              <span className="text-[#888]">Online:</span>
              <span className="text-[#00ff41] font-bold">{liveStats.onlinePlayers.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-[#ffaa00]" />
              <span className="text-[#888]">Active Quests:</span>
              <span className="text-[#ffaa00] font-bold">{liveStats.activeQuests}</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#ffff00]" />
              <span className="text-[#888]">Completed Today:</span>
              <span className="text-[#ffff00] font-bold">{liveStats.completedToday}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#ff00ff]" />
              <span className="text-[#888]">Total Battles:</span>
              <span className="text-[#ff00ff] font-bold">{liveStats.totalBattles.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto">
            {/* Title Section */}
            <div className="text-center mb-8">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl text-[#00d4ff] mb-4 font-bold font-mono" 
                style={{ textShadow: '0 0 20px rgba(0,212,255,0.8), 0 0 40px rgba(0,212,255,0.4)' }}
              >
                💾 CYBERWORLD MMO
              </motion.h2>
              <p className="text-[#aaaaaa] mb-2 text-sm font-mono">
                Browser-based MMO combining social gameplay with cybersecurity-themed turn-based combat
              </p>
              <p className="text-[#00f3ff] text-xs font-mono mb-4">
                20+ NPCs • 15+ Buildings • Massive Plaza • Real-time Multiplayer • 28+ Quests • Turn-based Combat • Achievement System
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: '20+ Detailed NPCs', desc: 'Speech bubbles & interactions', icon: Users, color: '#00f3ff' },
                { label: '15+ Buildings', desc: 'Neon signs & detailed facades', icon: Server, color: '#00ff41' },
                { label: 'Real-time MP', desc: 'Live multiplayer experience', icon: Network, color: '#ff00ff' },
                { label: 'Combat System', desc: 'Turn-based tactical combat', icon: Shield, color: '#ffaa00' },
                { label: '28+ Quests', desc: 'Complete quest system', icon: Target, color: '#ffff00' },
                { label: 'Market Stalls', desc: 'Vendors with animated items', icon: ShoppingCart, color: '#00d4ff' },
                { label: 'Flying Drones', desc: 'Animated data drones', icon: Activity, color: '#ff5500' },
                { label: '120+ Particles', desc: 'Ambient effects & glows', icon: Zap, color: '#ff00ff' },
                { label: 'Achievements', desc: '8+ achievements to unlock', icon: Award, color: '#00ff41' },
              ].map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-3 bg-[rgba(0,243,255,0.05)] border border-[#00f3ff]/20 rounded hover:border-[#00f3ff]/40 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <FeatureIcon className={`w-4 h-4 text-[${feature.color}]`} style={{ color: feature.color }} />
                      <div className={`text-xs font-bold font-mono`} style={{ color: feature.color }}>
                        {feature.label}
                      </div>
                    </div>
                    <div className="text-xs text-[#888] font-mono group-hover:text-[#aaa] transition-colors">
                      {feature.desc}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Detailed Stats Section */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="p-4 bg-[rgba(0,212,255,0.05)] border border-[#00d4ff]/20 rounded"
              >
                <div className="text-[#00d4ff] font-bold font-mono mb-3 text-sm flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4" /> Game Mechanics
                </div>
                <ul className="space-y-2 text-xs text-[#888] font-mono">
                  <li className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-[#ffaa00]" />
                    <span>Turn-based combat with abilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="w-3 h-3 text-[#ff00ff]" />
                    <span>Quest system with progression</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Gem className="w-3 h-3 text-[#00ff41]" />
                    <span>Inventory & item management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Network className="w-3 h-3 text-[#00d4ff]" />
                    <span>Real-time chat system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-3 h-3 text-[#ff00ff]" />
                    <span>Emoji wheel & expressions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="w-3 h-3 text-[#00ff41]" />
                    <span>Character progression</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Trophy className="w-3 h-3 text-[#ffff00]" />
                    <span>Achievement tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BarChart3 className="w-3 h-3 text-[#00f3ff]" />
                    <span>Leaderboard rankings</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="p-4 bg-[rgba(0,255,65,0.05)] border border-[#00ff41]/20 rounded"
              >
                <div className="text-[#00ff41] font-bold font-mono mb-3 text-sm flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Visual Features
                </div>
                <ul className="space-y-2 text-xs text-[#888] font-mono">
                  <li className="flex items-center gap-2">
                    <Users className="w-3 h-3 text-[#00ff41]" />
                    <span>Enhanced player avatars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Activity className="w-3 h-3 text-[#00d4ff]" />
                    <span>Central animated fountain</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Server className="w-3 h-3 text-[#ff00ff]" />
                    <span>Environmental signs & posters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShoppingCart className="w-3 h-3 text-[#ffaa00]" />
                    <span>Street details (lights, bikes)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-3 h-3 text-[#ffff00]" />
                    <span>Multiple glow layers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-[#00f3ff]" />
                    <span>Concept art matching graphics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Activity className="w-3 h-3 text-[#ff00ff]" />
                    <span>Animated neon signs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShoppingCart className="w-3 h-3 text-[#00ff41]" />
                    <span>Detailed market stalls</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <motion.button
                onClick={handlePlay}
                className="px-8 py-4 bg-transparent border-2 border-[#00ff41] text-[#00ff41] font-mono text-lg cursor-pointer transition-all hover:bg-[rgba(0,255,65,0.2)] hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Gamepad2 className="w-5 h-5" /> ▶ PLAY GAME
              </motion.button>
              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  onClick={() => router.push('/cyberworld/dashboard')}
                  className="px-6 py-3 bg-transparent border-2 border-[#00d4ff] text-[#00d4ff] font-mono text-sm cursor-pointer transition-all hover:bg-[rgba(0,212,255,0.2)] flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BarChart3 className="w-4 h-4" /> DASHBOARD
                </motion.button>
                <motion.button
                  onClick={() => router.push('/cyberworld/settings')}
                  className="px-6 py-3 bg-transparent border-2 border-[#00d4ff] text-[#00d4ff] font-mono text-sm cursor-pointer transition-all hover:bg-[rgba(0,212,255,0.2)] flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Award className="w-4 h-4" /> SETTINGS
                </motion.button>
                <motion.button
                  onClick={() => router.push('/cyberworld/patches')}
                  className="px-6 py-3 bg-transparent border-2 border-[#ff00ff] text-[#ff00ff] font-mono text-sm cursor-pointer transition-all hover:bg-[rgba(255,0,255,0.2)] flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Star className="w-4 h-4" /> PATCH NOTES
                </motion.button>
                <motion.button
                  onClick={() => router.push('/cyberworld/credits')}
                  className="px-6 py-3 bg-transparent border-2 border-[#ffff00] text-[#ffff00] font-mono text-sm cursor-pointer transition-all hover:bg-[rgba(255,255,0,0.2)] flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Trophy className="w-4 h-4" /> CREDITS
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseWindow>
  );
}
