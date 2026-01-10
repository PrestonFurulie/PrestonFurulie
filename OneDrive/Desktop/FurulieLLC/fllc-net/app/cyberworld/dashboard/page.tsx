'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Award, TrendingUp, Target, Users, Zap, Shield, Trophy, Star, Clock, Flame, Swords, Heart, Coins, Gem, Calendar, BarChart3, Activity, Globe, TrendingDown, CheckCircle } from 'lucide-react';

export default function CyberWorldDashboardPage() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<'overview' | 'combat' | 'social' | 'achievements' | 'leaderboard'>('overview');
  const [liveStats, setLiveStats] = useState({
    onlinePlayers: 1247,
    activeQuests: 89,
    completedToday: 12,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        onlinePlayers: prev.onlinePlayers + Math.floor(Math.random() * 10 - 5),
        activeQuests: prev.activeQuests + (Math.random() > 0.9 ? 1 : Math.random() < 0.1 ? -1 : 0),
        completedToday: prev.completedToday + (Math.random() > 0.95 ? 1 : 0),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = {
    level: 12,
    experience: 5420,
    experienceToNext: 7800,
    bits: 1250,
    credits: 45,
    quests: 28,
    completedQuests: 24,
    activeQuests: 4,
    wins: 47,
    losses: 12,
    winRate: 79.7,
    currentStreak: 5,
    bestStreak: 12,
    totalDamage: 15420,
    criticalHits: 89,
    perfectWins: 23,
    totalPlaytime: 1247,
    joinDate: '2024-01-15',
    friends: 23,
    guild: 'Elite Security',
    guildRank: 'Officer',
    reputation: 85,
    topSkill: 'Combat',
  };

  const achievements = [
    { id: 1, name: 'First Steps', desc: 'Complete your first quest', progress: 100, max: 100, icon: '🎯', color: '#00ff41', unlocked: true, date: '2024-01-15' },
    { id: 2, name: 'Combat Master', desc: 'Win 50 battles', progress: 47, max: 50, icon: '⚔️', color: '#00d4ff', unlocked: false, date: null },
    { id: 3, name: 'Social Butterfly', desc: 'Make 10 friends', progress: 7, max: 10, icon: '👥', color: '#ff00ff', unlocked: false, date: null },
    { id: 4, name: 'Quest Champion', desc: 'Complete 25 quests', progress: 24, max: 25, icon: '⭐', color: '#ffaa00', unlocked: false, date: null },
    { id: 5, name: 'Streak Master', desc: 'Win 10 battles in a row', progress: 5, max: 10, icon: '🔥', color: '#ff5500', unlocked: false, date: null },
    { id: 6, name: 'Perfect Fighter', desc: 'Win 30 perfect battles', progress: 23, max: 30, icon: '💎', color: '#ffff00', unlocked: false, date: null },
    { id: 7, name: 'Explorer', desc: 'Visit all rooms', progress: 12, max: 15, icon: '🗺️', color: '#00f3ff', unlocked: false, date: null },
    { id: 8, name: 'Collector', desc: 'Obtain 100 items', progress: 67, max: 100, icon: '📦', color: '#ff00ff', unlocked: false, date: null },
  ];

  const leaderboard = [
    { rank: 1, name: 'CyberElite', level: 45, wins: 287, winRate: 94.2, streak: 18, guild: 'Elite Security' },
    { rank: 2, name: 'DataHunter', level: 42, wins: 256, winRate: 91.5, streak: 15, guild: 'Nightwatch' },
    { rank: 3, name: 'NetWarden', level: 40, wins: 234, winRate: 89.8, streak: 12, guild: 'Elite Security' },
    { rank: 4, name: 'CodeMaster', level: 38, wins: 221, winRate: 87.3, streak: 9, guild: 'Guardians' },
    { rank: 5, name: 'BitDefender', level: 36, wins: 198, winRate: 85.6, streak: 11, guild: 'Nightwatch' },
  ];

  const recentActivity = [
    { type: 'quest', message: 'Completed "First Steps" quest', time: '2 hours ago', icon: '✅', color: '#00ff41' },
    { type: 'combat', message: 'Won battle against "MalwareBot"', time: '3 hours ago', icon: '⚔️', color: '#00d4ff' },
    { type: 'level', message: 'Reached Level 12', time: '5 hours ago', icon: '⭐', color: '#ffaa00' },
    { type: 'achievement', message: 'Unlocked "First Steps" achievement', time: '6 hours ago', icon: '🏆', color: '#ffff00' },
    { type: 'social', message: 'Added friend "CodeNinja"', time: '1 day ago', icon: '👥', color: '#ff00ff' },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl text-[#00f3ff] font-bold font-mono mb-2" style={{ textShadow: '0 0 30px rgba(0,243,255,0.8)' }}>
            💾 CYBERWORLD DASHBOARD
          </h1>
          <p className="text-[#888] font-mono">Comprehensive game statistics and achievements</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-[rgba(0,255,65,0.1)] border border-[#00ff41]/30 rounded-lg"
          >
            <div className="text-3xl text-[#00ff41] font-bold mb-1">{stats.level}</div>
            <div className="text-sm text-[#888] font-mono">Level</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-[rgba(0,212,255,0.1)] border border-[#00d4ff]/30 rounded-lg"
          >
            <div className="text-3xl text-[#00d4ff] font-bold mb-1">{stats.bits.toLocaleString()}</div>
            <div className="text-sm text-[#888] font-mono">Bits</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-[rgba(255,0,255,0.1)] border border-[#ff00ff]/30 rounded-lg"
          >
            <div className="text-3xl text-[#ff00ff] font-bold mb-1">{stats.credits}</div>
            <div className="text-sm text-[#888] font-mono">Credits</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-[rgba(255,170,0,0.1)] border border-[#ffaa00]/30 rounded-lg"
          >
            <div className="text-3xl text-[#ffaa00] font-bold mb-1">{stats.quests}</div>
            <div className="text-sm text-[#888] font-mono">Quests</div>
          </motion.div>
        </div>

        {/* Combat Stats */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 bg-[rgba(0,243,255,0.05)] border border-[#00f3ff]/30 rounded-lg"
          >
            <h2 className="text-2xl text-[#00f3ff] font-bold font-mono mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6" /> Combat Statistics
            </h2>
            <div className="space-y-3 text-sm font-mono">
              <div className="flex justify-between">
                <span className="text-[#888]">Wins:</span>
                <span className="text-[#00ff41]">{stats.wins}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Losses:</span>
                <span className="text-[#ff0000]">{stats.losses}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Win Rate:</span>
                <span className="text-[#00d4ff]">{stats.winRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Current Streak:</span>
                <span className="text-[#ffaa00]">{stats.currentStreak}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Best Streak:</span>
                <span className="text-[#ffff00]">{stats.bestStreak}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Total Damage:</span>
                <span className="text-[#ff00ff]">{stats.totalDamage.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Critical Hits:</span>
                <span className="text-[#ff00ff]">{stats.criticalHits}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Perfect Wins:</span>
                <span className="text-[#00ff41]">{stats.perfectWins}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 bg-[rgba(0,255,65,0.05)] border border-[#00ff41]/30 rounded-lg"
          >
            <h2 className="text-2xl text-[#00ff41] font-bold font-mono mb-4 flex items-center gap-2">
              <Award className="w-6 h-6" /> Achievements
            </h2>
            <div className="space-y-2 text-sm font-mono">
              <div className="p-2 bg-[rgba(0,255,65,0.1)] border border-[#00ff41]/30 rounded">
                <div className="text-[#00ff41] font-bold">First Steps</div>
                <div className="text-[#888] text-xs">Complete your first quest</div>
                <div className="mt-1 w-full bg-[rgba(0,255,65,0.2)] rounded-full h-1">
                  <div className="bg-[#00ff41] h-1 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="p-2 bg-[rgba(0,212,255,0.1)] border border-[#00d4ff]/30 rounded">
                <div className="text-[#00d4ff] font-bold">Combat Master</div>
                <div className="text-[#888] text-xs">Win 50 battles</div>
                <div className="mt-1 w-full bg-[rgba(0,212,255,0.2)] rounded-full h-1">
                  <div className="bg-[#00d4ff] h-1 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
              <div className="p-2 bg-[rgba(255,0,255,0.1)] border border-[#ff00ff]/30 rounded">
                <div className="text-[#ff00ff] font-bold">Social Butterfly</div>
                <div className="text-[#888] text-xs">Make 10 friends</div>
                <div className="mt-1 w-full bg-[rgba(255,0,255,0.2)] rounded-full h-1">
                  <div className="bg-[#ff00ff] h-1 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-[#00f3ff]/30">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'combat', label: 'Combat', icon: Swords },
            { id: 'social', label: 'Social', icon: Users },
            { id: 'achievements', label: 'Achievements', icon: Trophy },
            { id: 'leaderboard', label: 'Leaderboard', icon: TrendingUp },
          ].map((tab) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`px-6 py-3 font-mono text-sm border-b-2 transition-all flex items-center gap-2 ${
                  selectedTab === tab.id
                    ? 'border-[#00f3ff] text-[#00f3ff]'
                    : 'border-transparent text-[#888] hover:text-[#aaa]'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {selectedTab === 'overview' && (
          <div className="space-y-6">
            {/* Experience Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-[rgba(0,243,255,0.05)] border border-[#00f3ff]/30 rounded-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-xl text-[#00f3ff] font-bold font-mono">Level {stats.level}</div>
                <div className="text-sm text-[#888] font-mono">
                  {stats.experience.toLocaleString()} / {stats.experienceToNext.toLocaleString()} XP
                </div>
              </div>
              <div className="w-full bg-[rgba(0,243,255,0.2)] rounded-full h-4 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00f3ff] via-[#00ff41] to-[#ff00ff] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(stats.experience / stats.experienceToNext) * 100}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  style={{ boxShadow: '0 0 20px rgba(0,243,255,0.8)' }}
                />
              </div>
              <div className="mt-2 text-xs text-[#888] font-mono">
                {((stats.experience / stats.experienceToNext) * 100).toFixed(1)}% to Level {stats.level + 1}
              </div>
            </motion.div>

            {/* Live Stats */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="p-4 bg-[rgba(0,212,255,0.1)] border border-[#00d4ff]/30 rounded-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-[#00d4ff]" />
                  <div className="text-sm text-[#888] font-mono">Online Players</div>
                </div>
                <div className="text-2xl text-[#00d4ff] font-bold font-mono">{liveStats.onlinePlayers.toLocaleString()}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="p-4 bg-[rgba(255,170,0,0.1)] border border-[#ffaa00]/30 rounded-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-[#ffaa00]" />
                  <div className="text-sm text-[#888] font-mono">Active Quests</div>
                </div>
                <div className="text-2xl text-[#ffaa00] font-bold font-mono">{liveStats.activeQuests}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="p-4 bg-[rgba(0,255,65,0.1)] border border-[#00ff41]/30 rounded-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-[#00ff41]" />
                  <div className="text-sm text-[#888] font-mono">Completed Today</div>
                </div>
                <div className="text-2xl text-[#00ff41] font-bold font-mono">{liveStats.completedToday}</div>
              </motion.div>
            </div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-[rgba(0,255,65,0.05)] border border-[#00ff41]/30 rounded-lg"
            >
              <h3 className="text-xl text-[#00ff41] font-bold font-mono mb-4 flex items-center gap-2">
                <Activity className="w-6 h-6" /> Recent Activity
              </h3>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-[rgba(0,0,0,0.3)] border border-[#444] rounded"
                  >
                    <span className="text-2xl">{activity.icon}</span>
                    <div className="flex-1">
                      <div className="text-sm text-white font-mono">{activity.message}</div>
                      <div className="text-xs text-[#888] font-mono">{activity.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {selectedTab === 'combat' && (
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 bg-[rgba(0,243,255,0.05)] border border-[#00f3ff]/30 rounded-lg"
            >
              <h2 className="text-2xl text-[#00f3ff] font-bold font-mono mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" /> Combat Statistics
              </h2>
              <div className="space-y-4 text-sm font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-[#888]">Wins:</span>
                  <span className="text-[#00ff41] font-bold text-lg">{stats.wins}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#888]">Losses:</span>
                  <span className="text-[#ff0000] font-bold text-lg">{stats.losses}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#888]">Win Rate:</span>
                  <span className="text-[#00d4ff] font-bold text-lg">{stats.winRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#888] flex items-center gap-2">
                    <Flame className="w-4 h-4" /> Current Streak:
                  </span>
                  <span className="text-[#ffaa00] font-bold text-lg">{stats.currentStreak}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#888] flex items-center gap-2">
                    <Trophy className="w-4 h-4" /> Best Streak:
                  </span>
                  <span className="text-[#ffff00] font-bold text-lg">{stats.bestStreak}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#888]">Total Damage:</span>
                  <span className="text-[#ff00ff] font-bold text-lg">{stats.totalDamage.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#888]">Critical Hits:</span>
                  <span className="text-[#ff00ff] font-bold text-lg">{stats.criticalHits}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#888]">Perfect Wins:</span>
                  <span className="text-[#00ff41] font-bold text-lg">{stats.perfectWins}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-[#444]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#888] flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Total Playtime:
                    </span>
                    <span className="text-[#00f3ff] font-bold">{Math.floor(stats.totalPlaytime / 60)}h {stats.totalPlaytime % 60}m</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 bg-[rgba(0,255,65,0.05)] border border-[#00ff41]/30 rounded-lg"
            >
              <h2 className="text-2xl text-[#00ff41] font-bold font-mono mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" /> Performance Chart
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-[#888] font-mono">Win Rate Trend</span>
                    <span className="text-sm text-[#00ff41] font-mono font-bold">{stats.winRate}%</span>
                  </div>
                  <div className="w-full bg-[rgba(0,255,65,0.2)] rounded-full h-3">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#00ff41] to-[#00d4ff] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${stats.winRate}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-[#888] font-mono">Damage Output</span>
                    <span className="text-sm text-[#ff00ff] font-mono font-bold">{(stats.totalDamage / stats.wins).toFixed(0)} avg</span>
                  </div>
                  <div className="w-full bg-[rgba(255,0,255,0.2)] rounded-full h-3">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#ff00ff] to-[#ff5500] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-[#888] font-mono">Critical Hit Rate</span>
                    <span className="text-sm text-[#ffaa00] font-mono font-bold">{((stats.criticalHits / stats.wins) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-[rgba(255,170,0,0.2)] rounded-full h-3">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#ffaa00] to-[#ffff00] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(stats.criticalHits / stats.wins) * 100}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {selectedTab === 'achievements' && (
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 border rounded-lg ${
                  achievement.unlocked
                    ? `bg-[rgba(${achievement.color.replace('#', '')},0.15)] border-[${achievement.color}]/40`
                    : 'bg-[rgba(255,255,255,0.05)] border-[#444] opacity-60'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <div className={`font-bold font-mono ${achievement.unlocked ? 'text-white' : 'text-[#888]'}`}>
                      {achievement.name}
                    </div>
                    <div className="text-xs text-[#888] font-mono">{achievement.desc}</div>
                  </div>
                  {achievement.unlocked && (
                    <Award className="w-5 h-5 text-[#ffff00]" />
                  )}
                </div>
                <div className="mt-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-[#888] font-mono">
                      {achievement.progress} / {achievement.max}
                    </span>
                    <span className="text-xs text-[#888] font-mono">
                      {achievement.unlocked && achievement.date ? `Unlocked: ${achievement.date}` : `${((achievement.progress / achievement.max) * 100).toFixed(0)}%`}
                    </span>
                  </div>
                  <div className="w-full bg-[rgba(255,255,255,0.1)] rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full`}
                      style={{
                        backgroundColor: achievement.color,
                        width: `${(achievement.progress / achievement.max) * 100}%`,
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${(achievement.progress / achievement.max) * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {selectedTab === 'leaderboard' && (
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-[rgba(0,243,255,0.05)] border border-[#00f3ff]/30 rounded-lg"
            >
              <h2 className="text-2xl text-[#00f3ff] font-bold font-mono mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6" /> Top Players
              </h2>
              <div className="space-y-3">
                {leaderboard.map((player, index) => (
                  <motion.div
                    key={player.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-lg border ${
                      player.rank <= 3
                        ? 'bg-[rgba(255,215,0,0.1)] border-[#ffd700]/40'
                        : 'bg-[rgba(255,255,255,0.05)] border-[#444]'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold font-mono ${
                      player.rank === 1 ? 'bg-gradient-to-br from-[#ffd700] to-[#ffaa00] text-black' :
                      player.rank === 2 ? 'bg-gradient-to-br from-[#c0c0c0] to-[#888] text-black' :
                      player.rank === 3 ? 'bg-gradient-to-br from-[#cd7f32] to-[#8b4513] text-white' :
                      'bg-[rgba(255,255,255,0.1)] text-[#888]'
                    }`}>
                      {player.rank === 1 ? '👑' : player.rank === 2 ? '🥈' : player.rank === 3 ? '🥉' : player.rank}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-bold font-mono">{player.name}</span>
                        <span className="text-xs text-[#888] font-mono">Lv.{player.level}</span>
                        {player.rank <= 3 && <Trophy className="w-4 h-4 text-[#ffd700]" />}
                      </div>
                      <div className="text-xs text-[#888] font-mono">
                        {player.wins} Wins • {player.winRate}% Win Rate • {player.streak} Streak • {player.guild}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-[#00ff41] font-bold font-mono">{player.winRate}%</div>
                      <div className="text-xs text-[#888] font-mono">Win Rate</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
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
