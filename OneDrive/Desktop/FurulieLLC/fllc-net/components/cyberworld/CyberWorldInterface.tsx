'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, Globe2, Users, Lock, Save, FileText, Target, Mail, 
  Rocket, Bug, Settings, BarChart3, Terminal, Database, Activity,
    MapPin, Hash, Camera, Code, Shield, Zap, Search, TrendingUp,
    Network, Server, Eye, Fingerprint, Key, Cpu, HardDrive, Gamepad2, Award
} from 'lucide-react';
import { useWindowManager } from '../os/WindowManagerContext';

/**
 * CyberWorld Interface - Full Screen OSINT Game
 * Massive detail with interactive features matching concept images
 */
export function CyberWorldInterface() {
  const windowManager = useWindowManager();
  const [activeCategory, setActiveCategory] = useState<'shop' | 'cyberworld' | 'social' | 'security-ops'>('cyberworld');
  const [subCategory, setSubCategory] = useState<string | null>(null);
  const [stats, setStats] = useState({ settings: 80, progress: 0 });
  const [liveData, setLiveData] = useState({
    players: 1247,
    activeOps: 89,
    intelCollected: 479,
    systemsCompromised: 14,
    dataExfiltrated: '2.4 TB',
    activeTargets: 23,
    vulnerabilities: 456,
    attacksBlocked: 12478,
  });

  const [systemHealth, setSystemHealth] = useState({
    cpu: 47,
    memory: 68,
    network: 82,
    storage: 54,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        players: prev.players + Math.floor(Math.random() * 5 - 2),
        activeOps: prev.activeOps + (Math.random() > 0.85 ? 1 : Math.random() < 0.15 ? -1 : 0),
        intelCollected: prev.intelCollected + (Math.random() > 0.9 ? 1 : 0),
        systemsCompromised: prev.systemsCompromised,
        dataExfiltrated: prev.dataExfiltrated,
        activeTargets: prev.activeTargets + (Math.random() > 0.9 ? Math.floor(Math.random() * 3 - 1) : 0),
        vulnerabilities: prev.vulnerabilities + (Math.random() > 0.95 ? Math.floor(Math.random() * 5) : 0),
        attacksBlocked: prev.attacksBlocked + Math.floor(Math.random() * 10),
      }));
      setSystemHealth(prev => ({
        cpu: Math.max(20, Math.min(90, prev.cpu + (Math.random() * 10 - 5))),
        memory: Math.max(30, Math.min(85, prev.memory + (Math.random() * 8 - 4))),
        network: Math.max(50, Math.min(95, prev.network + (Math.random() * 6 - 3))),
        storage: Math.max(40, Math.min(80, prev.storage + (Math.random() * 4 - 2))),
      }));
      setStats(prev => ({ ...prev, progress: Math.min(100, prev.progress + 0.1) }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      id: 'shop' as const,
      label: 'SHOP',
      icon: ShoppingCart,
      color: '#ff00ff',
      subItems: [
        { id: 'resume', label: 'RESUME', icon: FileText },
        { id: 'products', label: 'PRODUCTS', icon: Rocket },
        { id: 'subscriptions', label: 'SUBSCRIPTIONS', icon: Zap },
      ],
    },
    {
      id: 'cyberworld' as const,
      label: 'CYBERWORLD',
      icon: Globe2,
      color: '#00ffff',
      subItems: [
        { id: 'play', label: 'PLAY', icon: Save },
        { id: 'dashboard', label: 'DASHBOARD', icon: BarChart3 },
        { id: 'rooms', label: 'ROOMS', icon: Network },
        { id: 'quests', label: 'QUESTS', icon: Target },
      ],
    },
    {
      id: 'social' as const,
      label: 'SOCIAL',
      icon: Users,
      color: '#00ff41',
      subItems: [
        { id: 'friends', label: 'FRIENDS', icon: Users },
        { id: 'chat', label: 'CHAT', icon: Mail },
        { id: 'groups', label: 'GROUPS', icon: Network },
      ],
    },
    {
      id: 'security-ops' as const,
      label: 'SECURITY OPS',
      icon: Lock,
      color: '#ffff00',
      subItems: [
        { id: 'osint-hub', label: 'OSINT HUB', icon: Search },
        { id: 'threat-monitor', label: 'THREAT MONITOR', icon: Eye },
        { id: 'network-scan', label: 'NETWORK SCAN', icon: Activity },
        { id: 'vulnerability', label: 'VULNERABILITY', icon: Shield },
      ],
    },
  ];

  const osintRooms = [
    { id: 'osint-hub', name: 'OSINT Operations Center', icon: Search, color: '#00ffff', description: 'Central intelligence hub', players: 45 },
    { id: 'gps-lab', name: 'GPS Intelligence Lab', icon: MapPin, color: '#00ff41', description: '479 GPS coordinates mapped', players: 28 },
    { id: 'hash-facility', name: 'Hash Cracking Facility', icon: Hash, color: '#ff00ff', description: 'Password recovery operations', players: 67 },
    { id: 'exif-station', name: 'EXIF Intelligence Station', icon: Camera, color: '#ffff00', description: 'Photo metadata extraction', players: 32 },
    { id: 'api-lab', name: 'API Discovery Lab', icon: Code, color: '#00ffff', description: '14 government APIs discovered', players: 51 },
    { id: 'crystal-vault', name: 'Crystal Vault Archive', icon: Database, color: '#ff00ff', description: 'Complete intelligence database', players: 89 },
  ];

  const activeQuests = [
    { id: 1, name: 'Map SAIME Offices', progress: 67, reward: { xp: 300, credits: 200 }, icon: MapPin },
    { id: 2, name: 'Crack Government Hashes', progress: 45, reward: { xp: 400, credits: 300 }, icon: Hash },
    { id: 3, name: 'Extract EXIF Data', progress: 89, reward: { xp: 300, credits: 200 }, icon: Camera },
    { id: 4, name: 'Discover Government APIs', progress: 23, reward: { xp: 350, credits: 250 }, icon: Code },
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black overflow-hidden z-50">
      {/* Main Container with Purple Border */}
      <div 
        className="absolute inset-4 border-4 rounded-lg"
        style={{
          borderColor: 'rgba(138, 43, 226, 0.8)',
          boxShadow: '0 0 60px rgba(138, 43, 226, 0.4), inset 0 0 40px rgba(138, 43, 226, 0.2)',
          background: 'rgba(10, 10, 26, 0.95)',
        }}
      >
        {/* Top-Left Menu - Detailed with Icons */}
        <div 
          className="absolute top-6 left-6 w-72 rounded-lg backdrop-blur-md p-5"
          style={{
            background: 'rgba(0, 212, 255, 0.15)',
            border: '2px solid rgba(0, 212, 255, 0.4)',
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
          }}
        >
          <div className="space-y-3">
            {/* Category Header */}
            <div className="text-xs font-mono uppercase mb-4" style={{ color: '#00d4ff', opacity: 0.7 }}>
              NAVIGATION
            </div>
            
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <div key={category.id} className="space-y-2">
                  <motion.button
                    onClick={() => {
                      setActiveCategory(category.id);
                      setSubCategory(null);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded border-2 font-mono font-bold uppercase text-sm transition-all ${
                      isActive ? 'scale-105' : ''
                    }`}
                    style={{
                      borderColor: category.color,
                      background: isActive 
                        ? `rgba(${category.color === '#ff00ff' ? '255,0,255' : category.color === '#00ffff' ? '0,255,255' : category.color === '#00ff41' ? '0,255,65' : '255,255,0'}, 0.2)`
                        : 'rgba(0, 0, 0, 0.4)',
                      color: category.color,
                      boxShadow: isActive 
                        ? `0 0 25px ${category.color}80`
                        : `0 0 12px ${category.color}40`,
                      textShadow: `0 0 8px ${category.color}80`,
                    }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} style={{ color: category.color }} />
                    <span className="flex-1 text-left">{category.label}</span>
                    {isActive && (
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{ color: category.color }}
                      >
                        ▶
                      </motion.div>
                    )}
                  </motion.button>
                  
                  {/* Sub-items with detailed styling */}
                  {isActive && category.subItems && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-8 space-y-2"
                    >
                      {category.subItems.map((subItem, idx) => {
                        const SubIcon = subItem.icon;
                        const isSubActive = subCategory === subItem.id;
                        return (
                          <motion.button
                            key={subItem.id}
                            onClick={() => {
                              setSubCategory(subItem.id);
                              if (subItem.id === 'osint-hub' || subItem.id === 'threat-monitor' || subItem.id === 'network-scan' || subItem.id === 'vulnerability') {
                                windowManager.openWindow(subItem.id === 'osint-hub' ? 'osint' : subItem.id === 'threat-monitor' ? 'securityops' : subItem.id === 'network-scan' ? 'network-targets' : 'tool-foundry');
                              }
                            }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`w-full flex items-center gap-2 px-3 py-2 rounded border text-xs font-mono font-bold uppercase transition-all ${
                              isSubActive ? 'scale-105' : ''
                            }`}
                            style={{
                              borderColor: category.color,
                              background: isSubActive
                                ? `rgba(${category.color === '#ff00ff' ? '255,0,255' : category.color === '#00ffff' ? '0,255,255' : category.color === '#00ff41' ? '0,255,65' : '255,255,0'}, 0.3)`
                                : 'rgba(0, 0, 0, 0.3)',
                              color: category.color,
                              boxShadow: isSubActive 
                                ? `0 0 15px ${category.color}60`
                                : `0 0 8px ${category.color}30`,
                            }}
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <SubIcon size={16} style={{ color: category.color }} />
                            <span className="flex-1 text-left">{subItem.label}</span>
                            {isSubActive && (
                              <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                style={{ color: category.color }}
                              >
                                ⚡
                              </motion.div>
                            )}
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Top-Right Stats - MASSIVE DETAIL */}
        <div className="absolute top-6 right-6 space-y-4">
          {/* Main Stats Panel */}
          <div 
            className="text-right font-mono p-5 rounded-lg backdrop-blur-md"
            style={{
              background: 'rgba(0, 255, 65, 0.15)',
              border: '2px solid rgba(0, 255, 65, 0.5)',
              boxShadow: '0 0 25px rgba(0, 255, 65, 0.4), inset 0 0 15px rgba(0, 255, 65, 0.1)',
            }}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-3">
                <motion.div 
                  className="w-3 h-3 rounded-full"
                  style={{ background: '#00ff41', boxShadow: '0 0 10px rgba(0,255,65,0.8)' }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <div className="text-lg font-bold" style={{ color: '#00ff41', textShadow: '0 0 10px rgba(0,255,65,0.8)' }}>
                  SETTINGS {stats.settings}% 00%
                </div>
              </div>
              <div className="text-xs font-bold uppercase" style={{ color: '#00d4ff', textShadow: '0 0 8px rgba(0,212,255,0.6)' }}>
                FURULIE LLC - CYBER
              </div>
              <div className="text-xs pt-3 border-t border-[#00ff41]/30 space-y-2">
                <div className="flex justify-between gap-4 items-center">
                  <span style={{ color: '#888' }}>Players:</span>
                  <motion.span 
                    style={{ color: '#00ffff' }} 
                    className="font-bold"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {liveData.players.toLocaleString()}
                  </motion.span>
                </div>
                <div className="flex justify-between gap-4 items-center">
                  <span style={{ color: '#888' }}>Active Ops:</span>
                  <motion.span 
                    style={{ color: '#00ff41' }} 
                    className="font-bold"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {liveData.activeOps}
                  </motion.span>
                </div>
                <div className="flex justify-between gap-4 items-center">
                  <span style={{ color: '#888' }}>Intel:</span>
                  <span style={{ color: '#ff00ff' }} className="font-bold">{liveData.intelCollected}</span>
                </div>
                <div className="flex justify-between gap-4 items-center">
                  <span style={{ color: '#888' }}>Systems:</span>
                  <span style={{ color: '#ffff00' }} className="font-bold">{liveData.systemsCompromised}</span>
                </div>
                <div className="flex justify-between gap-4 items-center pt-2 border-t border-[#00ff41]/20">
                  <span style={{ color: '#888' }}>Data Exfil:</span>
                  <span style={{ color: '#00ffff' }} className="font-bold">{liveData.dataExfiltrated}</span>
                </div>
                <div className="flex justify-between gap-4 items-center">
                  <span style={{ color: '#888' }}>Targets:</span>
                  <span style={{ color: '#ff5500' }} className="font-bold">{liveData.activeTargets}</span>
                </div>
                <div className="flex justify-between gap-4 items-center">
                  <span style={{ color: '#888' }}>Vulns Found:</span>
                  <span style={{ color: '#ff00ff' }} className="font-bold">{liveData.vulnerabilities}</span>
                </div>
                <div className="flex justify-between gap-4 items-center">
                  <span style={{ color: '#888' }}>Blocked:</span>
                  <span style={{ color: '#00ff41' }} className="font-bold">{liveData.attacksBlocked.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* System Health Panel */}
          <div 
            className="font-mono p-4 rounded-lg backdrop-blur-md"
            style={{
              background: 'rgba(0, 212, 255, 0.15)',
              border: '2px solid rgba(0, 212, 255, 0.5)',
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
            }}
          >
            <div className="text-xs font-bold uppercase mb-3" style={{ color: '#00d4ff' }}>
              SYSTEM HEALTH
            </div>
            <div className="space-y-3">
              {[
                { label: 'CPU', value: systemHealth.cpu, color: '#00ff41', icon: '🖥️' },
                { label: 'MEMORY', value: systemHealth.memory, color: '#00ffff', icon: '💾' },
                { label: 'NETWORK', value: systemHealth.network, color: '#00d4ff', icon: '📡' },
                { label: 'STORAGE', value: systemHealth.storage, color: '#ffff00', icon: '💿' },
              ].map((metric, idx) => (
                <div key={metric.label} className="space-y-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1.5">
                      <span>{metric.icon}</span>
                      <span style={{ color: '#888' }}>{metric.label}</span>
                    </div>
                    <span style={{ color: metric.color }} className="font-bold">{metric.value}%</span>
                  </div>
                  <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${metric.color}80, ${metric.color})`,
                        width: `${metric.value}%`,
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.value}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Display Area - Dark Center with Massive Detail */}
        <div 
          className="absolute top-24 left-80 right-24 bottom-24 rounded-lg overflow-hidden"
          style={{
            background: 'rgba(0, 0, 0, 0.95)',
            border: '2px solid rgba(138, 43, 226, 0.5)',
            boxShadow: 'inset 0 0 40px rgba(138, 43, 226, 0.2)',
          }}
        >
          {/* Network Visualization Background - Dense */}
          <svg className="absolute inset-0 pointer-events-none overflow-hidden w-full h-full opacity-30">
            {Array.from({ length: 100 }).map((_, i) => {
              const x1 = Math.random() * 100;
              const y1 = Math.random() * 100;
              const x2 = Math.random() * 100;
              const y2 = Math.random() * 100;
              return (
                <motion.line
                  key={i}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke={i % 3 === 0 ? 'rgba(255, 0, 255, 0.3)' : i % 3 === 1 ? 'rgba(0, 255, 255, 0.3)' : 'rgba(0, 255, 65, 0.3)'}
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                />
              );
            })}
          </svg>
          
          {/* Animated nodes - Many more */}
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0 ? 'rgba(0, 255, 255, 0.6)' : i % 3 === 1 ? 'rgba(255, 0, 255, 0.6)' : 'rgba(0, 255, 65, 0.6)',
                boxShadow: `0 0 10px ${i % 3 === 0 ? 'rgba(0, 255, 255, 0.8)' : i % 3 === 1 ? 'rgba(255, 0, 255, 0.8)' : 'rgba(0, 255, 65, 0.8)'}`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Content based on active category - MASSIVE DETAIL */}
          <AnimatePresence mode="wait">
            {activeCategory === 'cyberworld' && (
              <motion.div
                key="cyberworld"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full h-full flex flex-col p-8 overflow-y-auto"
              >
                {/* Header - Enhanced with Stats */}
                <div className="text-center mb-8 relative">
                  {/* Animated Background Glow */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div 
                      className="w-96 h-96 rounded-full blur-3xl"
                      style={{
                        background: 'radial-gradient(circle, rgba(0,255,255,0.4) 0%, rgba(138,43,226,0.2) 50%, transparent 100%)',
                      }}
                    />
                  </motion.div>
                  
                  <motion.h1 
                    className="text-7xl font-bold font-mono mb-4 relative z-10"
                    style={{
                      color: '#00ffff',
                      textShadow: '0 0 40px rgba(0, 255, 255, 0.8), 0 0 80px rgba(0, 255, 255, 0.4), 0 0 120px rgba(0, 255, 255, 0.2)',
                    }}
                    animate={{ 
                      textShadow: [
                        '0 0 40px rgba(0, 255, 255, 0.8), 0 0 80px rgba(0, 255, 255, 0.4), 0 0 120px rgba(0, 255, 255, 0.2)',
                        '0 0 60px rgba(0, 255, 255, 1), 0 0 120px rgba(0, 255, 255, 0.6), 0 0 180px rgba(0, 255, 255, 0.3)',
                        '0 0 40px rgba(0, 255, 255, 0.8), 0 0 80px rgba(0, 255, 255, 0.4), 0 0 120px rgba(0, 255, 255, 0.2)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    💾 CYBERWORLD
                  </motion.h1>
                  <p 
                    className="text-2xl mb-4 font-mono relative z-10"
                    style={{ color: '#00d4ff', textShadow: '0 0 10px rgba(0, 212, 255, 0.6)' }}
                  >
                    Cybersecurity-Themed Multiplayer MMO
                  </p>
                  
                  {/* Comprehensive Feature Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 relative z-10 max-w-5xl mx-auto">
                    {[
                      { label: '20+ NPCs', desc: 'Detailed NPCs with speech bubbles', icon: Users, color: '#00f3ff' },
                      { label: '15+ Buildings', desc: 'Massive plaza with neon signs', icon: Server, color: '#00ff41' },
                      { label: 'Real-time MP', desc: 'Live multiplayer experience', icon: Network, color: '#ff00ff' },
                      { label: 'Combat System', desc: 'Turn-based tactical combat', icon: Shield, color: '#ffaa00' },
                      { label: '28+ Quests', desc: 'Complete quest system', icon: Target, color: '#ffff00' },
                      { label: 'Market Stalls', desc: 'Vendors with animated items', icon: ShoppingCart, color: '#00d4ff' },
                      { label: 'Flying Drones', desc: 'Animated data drones', icon: Activity, color: '#ff5500' },
                      { label: 'Detailed UI', desc: 'Comprehensive dashboards', icon: BarChart3, color: '#ff00ff' }
                    ].map((feature, idx) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-4 rounded-lg border-2 text-center"
                          style={{
                            borderColor: feature.color,
                            background: `rgba(${feature.color === '#00f3ff' ? '0,243,255' : feature.color === '#00ff41' ? '0,255,65' : feature.color === '#ff00ff' ? '255,0,255' : feature.color === '#ffaa00' ? '255,170,0' : feature.color === '#ffff00' ? '255,255,0' : feature.color === '#00d4ff' ? '0,212,255' : '255,85,0'}, 0.1)`,
                            boxShadow: `0 0 15px ${feature.color}40`,
                          }}
                          whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${feature.color}70` }}
                        >
                          <FeatureIcon size={24} className="mx-auto mb-2" style={{ color: feature.color }} />
                          <div className="text-sm font-mono font-bold mb-1" style={{ color: feature.color }}>
                            {feature.label}
                          </div>
                          <div className="text-xs font-mono" style={{ color: '#888' }}>
                            {feature.desc}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  {/* Live Stats Bar */}
                  <div className="flex gap-6 justify-center mb-8 relative z-10">
                    {[
                      { label: 'PLAYERS', value: liveData.players.toLocaleString(), color: '#00ffff', icon: Users },
                      { label: 'ACTIVE OPS', value: liveData.activeOps, color: '#00ff41', icon: Activity },
                      { label: 'INTEL', value: liveData.intelCollected, color: '#ff00ff', icon: Database },
                      { label: 'SYSTEMS', value: liveData.systemsCompromised, color: '#ffff00', icon: Server },
                    ].map((stat, idx) => {
                      const StatIcon = stat.icon;
                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="px-6 py-3 rounded-lg border-2 backdrop-blur-md text-center"
                          style={{
                            borderColor: stat.color,
                            background: `rgba(${stat.color === '#00ffff' ? '0,255,255' : stat.color === '#00ff41' ? '0,255,65' : stat.color === '#ff00ff' ? '255,0,255' : '255,255,0'}, 0.1)`,
                            boxShadow: `0 0 20px ${stat.color}40`,
                          }}
                        >
                          <StatIcon size={20} className="mx-auto mb-2" style={{ color: stat.color }} />
                          <div className="text-2xl font-mono font-bold mb-1" style={{ color: stat.color }}>
                            {stat.value}
                          </div>
                          <div className="text-xs font-mono uppercase" style={{ color: '#888' }}>
                            {stat.label}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  <div className="flex gap-4 justify-center mb-8 relative z-10">
                    <motion.button
                      onClick={() => windowManager.openWindow('cyberworld')}
                      className="px-8 py-4 rounded border-2 font-mono font-bold uppercase text-lg relative overflow-hidden"
                      style={{
                        borderColor: '#00ff41',
                        color: '#00ff41',
                        background: 'rgba(0, 255, 65, 0.1)',
                        boxShadow: '0 0 30px rgba(0, 255, 65, 0.5)',
                      }}
                      whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(0, 255, 65, 0.8)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(0,255,65,0.3), transparent)',
                        }}
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      />
                      <span className="relative z-10">▶ PLAY NOW</span>
                    </motion.button>
                    <motion.button
                      onClick={() => windowManager.openWindow('cyberworld')}
                      className="px-8 py-4 rounded border-2 font-mono font-bold uppercase text-lg relative overflow-hidden"
                      style={{
                        borderColor: '#00d4ff',
                        color: '#00d4ff',
                        background: 'rgba(0, 212, 255, 0.1)',
                        boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
                      }}
                      whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(0, 212, 255, 0.8)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)',
                        }}
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 1 }}
                      />
                      <span className="relative z-10">📊 DASHBOARD</span>
                    </motion.button>
                  </div>
                </div>

                {/* Live Intelligence Feed */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-mono font-bold" style={{ color: '#00d4ff', textShadow: '0 0 15px rgba(0,212,255,0.6)' }}>
                      📡 LIVE INTELLIGENCE FEED
                    </h2>
                    <div className="flex items-center gap-2 text-xs font-mono" style={{ color: '#888' }}>
                      <div className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" />
                      <span>Real-time Updates</span>
                    </div>
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-2 mb-6">
                    {[
                      { user: 'Agent_Alpha', action: 'Cracked hash', target: 'MD5: a1b2c3...', time: '2m ago', color: '#00ff41', xp: '+300' },
                      { user: 'DataHunter', action: 'Mapped GPS', target: 'SAIME Office #47', time: '5m ago', color: '#00ffff', xp: '+200' },
                      { user: 'SysCracker', action: 'Extracted EXIF', target: 'Camera: iPhone 12', time: '8m ago', color: '#ff00ff', xp: '+250' },
                      { user: 'IntelGather', action: 'Discovered API', target: 'gov.ve/api/v2', time: '12m ago', color: '#ffff00', xp: '+400' },
                      { user: 'CryptoBreak', action: 'Decrypted data', target: '512 records', time: '15m ago', color: '#00ff41', xp: '+350' },
                      { user: 'NetScanner', action: 'Port scan complete', target: '172.16.0.0/24', time: '18m ago', color: '#00d4ff', xp: '+180' },
                      { user: 'PhishMaster', action: 'Sent payload', target: 'trojan.exe', time: '22m ago', color: '#ff5500', xp: '+150' },
                    ].map((activity, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-3 rounded border-l-4 flex items-center justify-between hover:bg-black/30 transition-all group"
                        style={{
                          borderLeftColor: activity.color,
                          borderLeftWidth: '4px',
                        }}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-mono font-bold" style={{ borderColor: activity.color, color: activity.color }}>
                            {activity.user.split('_')[0][0]}{activity.user.split('_')[1]?.[0] || activity.user[1]}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-mono">
                              <span className="font-bold" style={{ color: activity.color }}>{activity.user}</span>
                              <span className="text-[#888] mx-2">{activity.action}</span>
                              <span className="text-[#aaa]">{activity.target}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <motion.span 
                            className="text-xs font-mono font-bold px-2 py-1 rounded border"
                            style={{ 
                              color: '#ffff00', 
                              borderColor: '#ffff00',
                              background: 'rgba(255, 255, 0, 0.1)',
                            }}
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            {activity.xp} XP
                          </motion.span>
                          <div className="text-xs font-mono" style={{ color: '#666' }}>
                            {activity.time}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* OSINT Rooms Grid - Enhanced */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-mono font-bold" style={{ color: '#00ffff', textShadow: '0 0 20px rgba(0,255,255,0.6)' }}>
                      🌐 OSINT ROOMS
                    </h2>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded border" style={{
                        borderColor: '#00ff41',
                        background: 'rgba(0, 255, 65, 0.1)',
                      }}>
                        <div className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" />
                        <span style={{ color: '#00ff41' }}>{osintRooms.reduce((sum, r) => sum + r.players, 0)} Total Players</span>
                      </div>
                      <motion.button
                        className="px-3 py-1.5 rounded border text-xs font-mono font-bold uppercase"
                        style={{
                          borderColor: '#00d4ff',
                          color: '#00d4ff',
                          background: 'rgba(0, 212, 255, 0.1)',
                        }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => windowManager.openWindow('osint')}
                      >
                        VIEW ALL →
                      </motion.button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {osintRooms.map((room, idx) => {
                      const RoomIcon = room.icon;
                      return (
                        <motion.div
                          key={room.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          onClick={() => windowManager.openWindow('osint')}
                          className="p-6 rounded-lg border-2 cursor-pointer transition-all"
                          style={{
                            borderColor: room.color,
                            background: `rgba(${room.color === '#00ffff' ? '0,255,255' : room.color === '#00ff41' ? '0,255,65' : room.color === '#ff00ff' ? '255,0,255' : '255,255,0'}, 0.1)`,
                            boxShadow: `0 0 20px ${room.color}40`,
                          }}
                          whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${room.color}70` }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="flex items-center gap-4 mb-4">
                            <RoomIcon size={32} style={{ color: room.color }} />
                            <div className="flex-1">
                              <h3 className="text-lg font-mono font-bold mb-1" style={{ color: room.color }}>
                                {room.name}
                              </h3>
                              <p className="text-xs font-mono" style={{ color: '#888' }}>
                                {room.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span style={{ color: '#888' }}>Players Online:</span>
                            <span style={{ color: room.color }} className="font-bold">{room.players}</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Active Quests - MASSIVE DETAIL */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-mono font-bold" style={{ color: '#00ff41', textShadow: '0 0 20px rgba(0,255,65,0.6)' }}>
                      ACTIVE QUESTS
                    </h2>
                    <div className="flex items-center gap-2 text-xs font-mono" style={{ color: '#888' }}>
                      <div className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" />
                      <span>{activeQuests.length} Active • {activeQuests.reduce((sum, q) => sum + q.reward.xp, 0)} Total XP Available</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {activeQuests.map((quest, idx) => {
                      const QuestIcon = quest.icon;
                      const completionRatio = quest.progress / 100;
                      return (
                        <motion.div
                          key={quest.id}
                          initial={{ opacity: 0, x: -20, scale: 0.95 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ delay: idx * 0.1, type: 'spring', stiffness: 100 }}
                          className="p-6 rounded-lg border-2 relative overflow-hidden group"
                          style={{
                            borderColor: '#00ff41',
                            background: 'rgba(0, 255, 65, 0.1)',
                            boxShadow: '0 0 20px rgba(0, 255, 65, 0.3), inset 0 0 20px rgba(0, 255, 65, 0.05)',
                          }}
                          whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 255, 65, 0.5), inset 0 0 30px rgba(0, 255, 65, 0.1)' }}
                        >
                          {/* Animated Background Pattern */}
                          <motion.div
                            className="absolute inset-0 opacity-10"
                            style={{
                              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,255,65,0.1) 10px, rgba(0,255,65,0.1) 20px)`,
                            }}
                            animate={{ x: [0, 20, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                          />
                          
                          <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                              <motion.div
                                animate={{ 
                                  rotate: [0, 360],
                                  scale: [1, 1.1, 1],
                                }}
                                transition={{ 
                                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                                  scale: { duration: 2, repeat: Infinity },
                                }}
                              >
                                <QuestIcon size={28} style={{ color: '#00ff41', filter: 'drop-shadow(0 0 8px rgba(0,255,65,0.8))' }} />
                              </motion.div>
                              <div className="flex-1">
                                <h3 className="text-lg font-mono font-bold mb-1" style={{ color: '#00ff41', textShadow: '0 0 8px rgba(0,255,65,0.6)' }}>
                                  {quest.name}
                                </h3>
                                {/* Detailed Progress Bar */}
                                <div className="w-full bg-black/50 rounded-full h-3 mb-3 overflow-hidden relative">
                                  <motion.div
                                    className="h-full rounded-full relative overflow-hidden"
                                    style={{ 
                                      background: `linear-gradient(90deg, rgba(0,255,65,0.8), rgba(0,255,65,1), rgba(0,255,65,0.8))`,
                                      width: `${quest.progress}%`,
                                    }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${quest.progress}%` }}
                                    transition={{ duration: 1, delay: idx * 0.2 }}
                                  >
                                    {/* Animated Shine Effect */}
                                    <motion.div
                                      className="absolute inset-0"
                                      style={{
                                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                      }}
                                      animate={{ x: ['-100%', '100%'] }}
                                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                    />
                                  </motion.div>
                                  <div className="absolute inset-0 flex items-center justify-center text-[8px] font-mono font-bold" style={{ color: '#00ff41', textShadow: '0 0 4px rgba(0,255,65,0.8)' }}>
                                    {quest.progress}%
                                  </div>
                                </div>
                                <div className="flex justify-between text-xs font-mono">
                                  <span style={{ color: '#888' }}>Progress: {quest.progress}%</span>
                                  <motion.span 
                                    style={{ color: '#ffff00' }} 
                                    className="font-bold"
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                  >
                                    {quest.reward.xp} XP
                                  </motion.span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Quest Details Grid */}
                            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#00ff41]/30">
                              <div className="text-xs font-mono">
                                <div style={{ color: '#888' }} className="mb-1">Reward:</div>
                                <div style={{ color: '#00d4ff' }} className="font-bold">{quest.reward.credits} Credits</div>
                              </div>
                              <div className="text-xs font-mono text-right">
                                <div style={{ color: '#888' }} className="mb-1">Status:</div>
                                <motion.div 
                                  style={{ color: completionRatio >= 0.8 ? '#00ff41' : completionRatio >= 0.5 ? '#ffff00' : '#ff5500' }} 
                                  className="font-bold"
                                  animate={{ opacity: [0.7, 1, 0.7] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                  {completionRatio >= 0.8 ? 'NEARLY COMPLETE' : completionRatio >= 0.5 ? 'IN PROGRESS' : 'STARTED'}
                                </motion.div>
                              </div>
                            </div>
                            
                            {/* Quest Action Button */}
                            <motion.button
                              className="w-full mt-4 px-4 py-2 rounded border text-xs font-mono font-bold uppercase relative overflow-hidden"
                              style={{
                                borderColor: '#00ff41',
                                color: '#00ff41',
                                background: 'rgba(0, 255, 65, 0.1)',
                              }}
                              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 255, 65, 0.6)' }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <motion.div
                                className="absolute inset-0"
                                style={{
                                  background: 'linear-gradient(90deg, transparent, rgba(0,255,65,0.3), transparent)',
                                }}
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                              />
                              <span className="relative z-10">CONTINUE QUEST →</span>
                            </motion.button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Security Operations Dashboard */}
                <div className="mb-8">
                  <h2 className="text-3xl font-mono font-bold mb-6" style={{ color: '#ff5500', textShadow: '0 0 20px rgba(255,85,0,0.6)' }}>
                    🔒 SECURITY OPERATIONS CENTER
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Left: Threat Metrics */}
                    <div className="p-6 rounded-lg border-2" style={{
                      borderColor: '#ff5500',
                      background: 'rgba(255, 85, 0, 0.1)',
                      boxShadow: '0 0 20px rgba(255, 85, 0, 0.3)',
                    }}>
                      <h3 className="text-lg font-mono font-bold mb-4" style={{ color: '#ff5500' }}>
                        THREAT METRICS (24H)
                      </h3>
                      <div className="space-y-3">
                        {[
                          { label: 'DDoS Attacks', count: 1247, blocked: 1240, color: '#ff0000' },
                          { label: 'SQL Injections', count: 456, blocked: 450, color: '#ff5500' },
                          { label: 'XSS Attempts', count: 892, blocked: 889, color: '#ffff00' },
                          { label: 'Brute Force', count: 2341, blocked: 2335, color: '#ff5500' },
                          { label: 'Phishing', count: 178, blocked: 175, color: '#ffff00' },
                          { label: 'Ransomware', count: 12, blocked: 12, color: '#ff0000' },
                        ].map((threat, idx) => {
                          const blockRate = (threat.blocked / threat.count * 100).toFixed(1);
                          return (
                            <div key={idx} className="space-y-1">
                              <div className="flex justify-between text-xs font-mono">
                                <span style={{ color: '#888' }}>{threat.label}</span>
                                <div className="flex items-center gap-2">
                                  <span style={{ color: threat.color }} className="font-bold">{threat.count}</span>
                                  <span style={{ color: '#00ff41' }} className="text-[10px]">{blockRate}%</span>
                                </div>
                              </div>
                              <div className="w-full bg-black/50 rounded-full h-2">
                                <motion.div
                                  className="h-full rounded-full"
                                  style={{
                                    background: `linear-gradient(90deg, ${threat.color}, ${threat.color}80)`,
                                    width: `${blockRate}%`,
                                  }}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${blockRate}%` }}
                                  transition={{ duration: 1, delay: idx * 0.1 }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right: Network Activity */}
                    <div className="p-6 rounded-lg border-2" style={{
                      borderColor: '#00d4ff',
                      background: 'rgba(0, 212, 255, 0.1)',
                      boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
                    }}>
                      <h3 className="text-lg font-mono font-bold mb-4" style={{ color: '#00d4ff' }}>
                        NETWORK ACTIVITY
                      </h3>
                      <div className="space-y-4">
                        {[
                          { label: 'Active Connections', value: '2,847', trend: '+12%', color: '#00ffff' },
                          { label: 'Data Transfer', value: '847 GB', trend: '+8%', color: '#00d4ff' },
                          { label: 'Bandwidth Usage', value: '78%', trend: '+5%', color: '#00ffff' },
                          { label: 'Packet Loss', value: '0.02%', trend: '-0.01%', color: '#00ff41' },
                          { label: 'Latency Avg', value: '14ms', trend: '-2ms', color: '#00ff41' },
                          { label: 'Jitter', value: '1.2ms', trend: '-0.3ms', color: '#00ff41' },
                        ].map((metric, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 rounded border" style={{
                            borderColor: `${metric.color}40`,
                            background: `rgba(${metric.color === '#00ffff' ? '0,255,255' : metric.color === '#00d4ff' ? '0,212,255' : '0,255,65'}, 0.05)`,
                          }}>
                            <span className="text-xs font-mono" style={{ color: '#888' }}>{metric.label}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-mono font-bold" style={{ color: metric.color }}>
                                {metric.value}
                              </span>
                              <span className={`text-xs font-mono ${metric.trend.startsWith('+') ? 'text-[#ffff00]' : 'text-[#00ff41]'}`}>
                                {metric.trend}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vulnerability Assessment */}
                <div className="mb-8">
                  <h2 className="text-3xl font-mono font-bold mb-6" style={{ color: '#ff00ff', textShadow: '0 0 20px rgba(255,0,255,0.6)' }}>
                    ⚠️ VULNERABILITY ASSESSMENT
                  </h2>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { severity: 'CRITICAL', count: 12, color: '#ff0000', cves: ['CVE-2024-0001', 'CVE-2024-0003'] },
                      { severity: 'HIGH', count: 89, color: '#ff5500', cves: ['CVE-2024-0005', 'CVE-2024-0007'] },
                      { severity: 'MEDIUM', count: 234, color: '#ffff00', cves: ['CVE-2024-0010', 'CVE-2024-0012'] },
                      { severity: 'LOW', count: 567, color: '#00d4ff', cves: ['CVE-2024-0015', 'CVE-2024-0017'] },
                      { severity: 'INFO', count: 1234, color: '#888', cves: ['CVE-2024-0020', 'CVE-2024-0022'] },
                      { severity: 'PATCHED', count: 2341, color: '#00ff41', cves: [] },
                    ].map((vuln, idx) => (
                      <motion.div
                        key={vuln.severity}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-5 rounded-lg border-2"
                        style={{
                          borderColor: vuln.color,
                          background: `rgba(${vuln.color === '#ff0000' ? '255,0,0' : vuln.color === '#ff5500' ? '255,85,0' : vuln.color === '#ffff00' ? '255,255,0' : vuln.color === '#00d4ff' ? '0,212,255' : vuln.color === '#00ff41' ? '0,255,65' : '136,136,136'}, 0.1)`,
                          boxShadow: `0 0 20px ${vuln.color}40`,
                        }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg font-mono font-bold" style={{ color: vuln.color }}>
                            {vuln.severity}
                          </span>
                          <span className="text-2xl font-mono font-bold" style={{ color: vuln.color }}>
                            {vuln.count}
                          </span>
                        </div>
                        {vuln.cves.length > 0 && (
                          <div className="space-y-1 mt-3 pt-3 border-t" style={{ borderColor: `${vuln.color}30` }}>
                            {vuln.cves.map((cve, cveIdx) => (
                              <div key={cveIdx} className="text-xs font-mono" style={{ color: '#888' }}>
                                {cve}
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Data Sources & APIs */}
                <div className="mb-8">
                  <h2 className="text-3xl font-mono font-bold mb-6" style={{ color: '#00ffff', textShadow: '0 0 20px rgba(0,255,255,0.6)' }}>
                    🔌 DATA SOURCES & APIS
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'SAIME API v2', status: 'ACTIVE', records: '47,892', uptime: '99.98%', lastUpdate: '2m ago', color: '#00ff41' },
                      { name: 'Government Portal', status: 'ACTIVE', records: '12,456', uptime: '99.95%', lastUpdate: '5m ago', color: '#00ffff' },
                      { name: 'Email Database API', status: 'MONITORING', records: '8,234', uptime: '98.5%', lastUpdate: '12m ago', color: '#ffff00' },
                      { name: 'GPS Coordinates API', status: 'ACTIVE', records: '479', uptime: '100%', lastUpdate: '1m ago', color: '#00ff41' },
                      { name: 'EXIF Metadata API', status: 'ACTIVE', records: '47', uptime: '99.9%', lastUpdate: '3m ago', color: '#00d4ff' },
                      { name: 'Hash Database API', status: 'ACTIVE', records: '1,247', uptime: '99.97%', lastUpdate: '1m ago', color: '#ff00ff' },
                      { name: 'OFAC Sanctions API', status: 'ACTIVE', records: '234', uptime: '99.92%', lastUpdate: '8m ago', color: '#00ff41' },
                      { name: 'Social Media API', status: 'LIMITED', records: '5,678', uptime: '87.3%', lastUpdate: '23m ago', color: '#ff5500' },
                    ].map((api, idx) => (
                      <motion.div
                        key={api.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-5 rounded-lg border-2 relative overflow-hidden group"
                        style={{
                          borderColor: api.color,
                          background: `rgba(${api.color === '#00ff41' ? '0,255,65' : api.color === '#00ffff' ? '0,255,255' : api.color === '#ffff00' ? '255,255,0' : api.color === '#00d4ff' ? '0,212,255' : api.color === '#ff00ff' ? '255,0,255' : '255,85,0'}, 0.1)`,
                          boxShadow: `0 0 15px ${api.color}30`,
                        }}
                        whileHover={{ scale: 1.02, boxShadow: `0 0 25px ${api.color}60` }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-base font-mono font-bold" style={{ color: api.color }}>
                            {api.name}
                          </h4>
                          <motion.div
                            className={`px-2 py-1 rounded text-xs font-mono font-bold border ${api.status === 'ACTIVE' ? 'border-[#00ff41] text-[#00ff41] bg-[rgba(0,255,65,0.1)]' : api.status === 'MONITORING' ? 'border-[#ffff00] text-[#ffff00] bg-[rgba(255,255,0,0.1)]' : 'border-[#ff5500] text-[#ff5500] bg-[rgba(255,85,0,0.1)]'}`}
                            animate={{ opacity: api.status === 'ACTIVE' ? [0.8, 1, 0.8] : 1 }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {api.status}
                          </motion.div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                          <div>
                            <span style={{ color: '#888' }}>Records:</span>
                            <span style={{ color: '#00ffff' }} className="font-bold ml-2">{api.records}</span>
                          </div>
                          <div>
                            <span style={{ color: '#888' }}>Uptime:</span>
                            <span style={{ color: '#00ff41' }} className="font-bold ml-2">{api.uptime}</span>
                          </div>
                          <div className="col-span-2 pt-2 border-t" style={{ borderColor: `${api.color}30` }}>
                            <span style={{ color: '#888' }}>Last Update:</span>
                            <span style={{ color: '#aaa' }} className="ml-2">{api.lastUpdate}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Crystal Vault Stats */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-mono font-bold" style={{ color: '#ff00ff', textShadow: '0 0 20px rgba(255,0,255,0.6)' }}>
                      💎 CRYSTAL VAULT DATABASE
                    </h2>
                    <motion.button
                      className="px-4 py-2 rounded border text-xs font-mono font-bold uppercase"
                      style={{
                        borderColor: '#ff00ff',
                        color: '#ff00ff',
                        background: 'rgba(255, 0, 255, 0.1)',
                      }}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255,0,255,0.6)' }}
                      onClick={() => windowManager.openWindow('osint')}
                    >
                      EXPLORE ALL →
                    </motion.button>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { label: 'GPS Coordinates', value: '479', icon: MapPin, color: '#00ff41', subLabel: '134 SAIME + 345 Staff', trend: '+12', trendUp: true },
                      { label: 'Government APIs', value: '14', icon: Code, color: '#00ffff', subLabel: 'Active Endpoints', trend: '+3', trendUp: true },
                      { label: 'Cracked Hashes', value: '1,247', icon: Hash, color: '#ff00ff', subLabel: 'MD5 + SHA256', trend: '+89', trendUp: true },
                      { label: 'EXIF Records', value: '47', icon: Camera, color: '#ffff00', subLabel: 'Photos Analyzed', trend: '+5', trendUp: true },
                    ].map((stat, idx) => {
                      const StatIcon = stat.icon;
                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                          transition={{ delay: idx * 0.1, type: 'spring', stiffness: 100 }}
                          className="p-6 rounded-lg border-2 text-center relative overflow-hidden group"
                          style={{
                            borderColor: stat.color,
                            background: `rgba(${stat.color === '#00ff41' ? '0,255,65' : stat.color === '#00ffff' ? '0,255,255' : stat.color === '#ff00ff' ? '255,0,255' : '255,255,0'}, 0.1)`,
                            boxShadow: `0 0 20px ${stat.color}40, inset 0 0 20px ${stat.color}10`,
                          }}
                          whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${stat.color}70, inset 0 0 30px ${stat.color}20` }}
                        >
                          {/* Animated Background Glow */}
                          <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100"
                            style={{
                              background: `radial-gradient(circle at center, ${stat.color}20, transparent 70%)`,
                            }}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          
                          <div className="relative z-10">
                            <motion.div
                              animate={{ 
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.1, 1],
                              }}
                              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                            >
                              <StatIcon size={40} className="mx-auto mb-4" style={{ color: stat.color, filter: `drop-shadow(0 0 15px ${stat.color})` }} />
                            </motion.div>
                            
                            <motion.div 
                              className="text-4xl font-mono font-bold mb-2"
                              style={{ color: stat.color, textShadow: `0 0 15px ${stat.color}80` }}
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                            >
                              {stat.value}
                            </motion.div>
                            
                            <div className="text-xs font-mono uppercase mb-2" style={{ color: '#888' }}>
                              {stat.label}
                            </div>
                            
                            <div className="text-[10px] font-mono mb-3" style={{ color: '#666' }}>
                              {stat.subLabel}
                            </div>
                            
                            {/* Trend Indicator */}
                            <motion.div 
                              className="flex items-center justify-center gap-1 text-xs font-mono font-bold"
                              style={{ color: stat.trendUp ? '#00ff41' : '#ff5500' }}
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <TrendingUp size={12} />
                              <span>{stat.trend}</span>
                              <span className="text-[10px]" style={{ color: '#888' }}>24h</span>
                            </motion.div>
                            
                            {/* Click to View Detail */}
                            <motion.button
                              className="mt-4 px-4 py-2 rounded border text-xs font-mono font-bold uppercase w-full"
                              style={{
                                borderColor: stat.color,
                                color: stat.color,
                                background: `rgba(${stat.color === '#00ff41' ? '0,255,65' : stat.color === '#00ffff' ? '0,255,255' : stat.color === '#ff00ff' ? '255,0,255' : '255,255,0'}, 0.2)`,
                              }}
                              whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${stat.color}60` }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => windowManager.openWindow('osint')}
                            >
                              VIEW DETAILS →
                            </motion.button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  {/* Additional Stats Row */}
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {[
                      { label: 'Total Records', value: '1,787', color: '#00d4ff', icon: Database },
                      { label: 'Data Sources', value: '12', color: '#ff5500', icon: Network },
                      { label: 'Countries', value: '7', color: '#ffff00', icon: Globe2 },
                      { label: 'Last Update', value: '2h ago', color: '#ff00ff', icon: Activity },
                    ].map((stat, idx) => {
                      const StatIcon = stat.icon;
                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-4 rounded-lg border-2 text-center"
                          style={{
                            borderColor: stat.color,
                            background: `rgba(${stat.color === '#00d4ff' ? '0,212,255' : stat.color === '#ff5500' ? '255,85,0' : stat.color === '#ffff00' ? '255,255,0' : '255,0,255'}, 0.1)`,
                            boxShadow: `0 0 15px ${stat.color}30`,
                          }}
                        >
                          <StatIcon size={24} className="mx-auto mb-2" style={{ color: stat.color }} />
                          <div className="text-2xl font-mono font-bold mb-1" style={{ color: stat.color }}>
                            {stat.value}
                          </div>
                          <div className="text-[10px] font-mono uppercase" style={{ color: '#888' }}>
                            {stat.label}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Rarest Achievement Showcase */}
                <div className="mb-8">
                  <div className="mb-6 p-4 rounded-lg text-center" style={{
                    background: 'rgba(138, 43, 226, 0.3)',
                    border: '2px solid rgba(138, 43, 226, 0.6)',
                    boxShadow: '0 0 30px rgba(138, 43, 226, 0.5)',
                  }}>
                    <h2 className="text-3xl font-mono font-bold" style={{ color: '#fff', textShadow: '0 0 20px rgba(255,255,255,0.8)' }}>
                      🏆 RAREST ACHIEVEMENT SHOWCASE
                    </h2>
                  </div>
                  
                  {/* Achievement Grid - 3x6 */}
                  <div className="grid grid-cols-6 gap-3 mb-6">
                    {[
                      { id: 1, name: 'Lightning Warrior', icon: '⚡', rarity: 'ULTRA RARE', color: '#ffff00', bg: 'rgba(255,255,0,0.2)' },
                      { id: 2, name: 'Scroll Master', icon: '📜', rarity: 'RARE', color: '#ffffff', bg: 'rgba(255,255,255,0.1)' },
                      { id: 3, name: 'Omega Symbol', icon: 'Ω', rarity: 'LEGENDARY', color: '#ff00ff', bg: 'rgba(255,0,255,0.2)' },
                      { id: 4, name: 'Atomic Achievement', icon: '⚛', rarity: 'RARE', color: '#ffff00', bg: 'rgba(255,255,0,0.15)' },
                      { id: 5, name: 'Target Specialist', icon: '🎯', rarity: 'ULTRA RARE', color: '#00ff41', bg: 'rgba(0,255,65,0.2)' },
                      { id: 6, name: 'Sword Master', icon: '⚔', rarity: 'LEGENDARY', color: '#ffffff', bg: 'rgba(255,255,255,0.1)' },
                      { id: 7, name: 'Fowl Champion', icon: '🦃', rarity: 'RARE', color: '#ffffff', bg: 'rgba(255,255,255,0.1)' },
                      { id: 8, name: 'Axe Master', icon: '🪓', rarity: 'ULTRA RARE', color: '#00ff41', bg: 'rgba(0,255,65,0.15)' },
                      { id: 9, name: 'Gear Runner', icon: '⚙', rarity: 'RARE', color: '#ffffff', bg: 'rgba(255,255,255,0.1)' },
                      { id: 10, name: 'Armor Collector', icon: '🛡', rarity: 'LEGENDARY', color: '#ff5500', bg: 'rgba(255,85,0,0.15)' },
                      { id: 11, name: 'Unlock Master', icon: '🔓', rarity: 'ULTRA RARE', color: '#ffff00', bg: 'rgba(255,255,0,0.2)' },
                      { id: 12, name: 'Spade Champion', icon: '♠', rarity: 'RARE', color: '#ffff00', bg: 'rgba(255,255,0,0.15)' },
                      { id: 13, name: 'Crown Skull', icon: '💀', rarity: 'LEGENDARY', color: '#ffff00', bg: 'rgba(255,255,0,0.15)' },
                      { id: 14, name: 'Triple Strike', icon: '☠', rarity: 'ULTRA RARE', color: '#ff0000', bg: 'rgba(255,0,0,0.2)' },
                      { id: 15, name: 'Medal Winner', icon: '🎖', rarity: 'RARE', color: '#ffffff', bg: 'rgba(255,255,255,0.1)' },
                      { id: 16, name: 'Skull Banner', icon: '☠', rarity: 'ULTRA RARE', color: '#ff5500', bg: 'rgba(255,85,0,0.2)' },
                      { id: 17, name: 'Diamond Shield', icon: '💎', rarity: 'LEGENDARY', color: '#00ffff', bg: 'rgba(0,255,255,0.2)' },
                      { id: 18, name: 'More Achievements', icon: '+1,554', rarity: 'TOTAL', color: '#888', bg: 'rgba(136,136,136,0.2)' },
                    ].map((achievement, idx) => (
                      <motion.div
                        key={achievement.id}
                        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ delay: idx * 0.05, type: 'spring', stiffness: 100 }}
                        className="aspect-square rounded-lg border-2 relative overflow-hidden group cursor-pointer"
                        style={{
                          borderColor: achievement.color,
                          background: achievement.bg,
                          boxShadow: `0 0 15px ${achievement.color}40`,
                        }}
                        whileHover={{ scale: 1.1, rotateZ: 5, boxShadow: `0 0 25px ${achievement.color}80` }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Animated Background Glow */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100"
                          style={{
                            background: `radial-gradient(circle, ${achievement.color}30, transparent 70%)`,
                          }}
                          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        <div className="relative z-10 h-full flex flex-col items-center justify-center p-2">
                          <motion.div
                            className="text-3xl mb-1"
                            animate={{ 
                              rotate: achievement.id === 11 ? [0, 360] : [0, 5, -5, 0],
                              scale: achievement.rarity === 'LEGENDARY' ? [1, 1.2, 1] : 1,
                            }}
                            transition={{ 
                              rotate: { duration: achievement.id === 11 ? 3 : 2, repeat: Infinity },
                              scale: { duration: 2, repeat: Infinity },
                            }}
                          >
                            {achievement.icon}
                          </motion.div>
                          {achievement.id < 18 && (
                            <>
                              <div className="text-[8px] font-mono font-bold uppercase mb-1 text-center" style={{ color: achievement.color, textShadow: `0 0 6px ${achievement.color}` }}>
                                {achievement.name}
                              </div>
                              <div className={`text-[7px] font-mono px-1.5 py-0.5 rounded border ${achievement.rarity === 'LEGENDARY' ? 'border-[#ff00ff] text-[#ff00ff] bg-[rgba(255,0,255,0.2)]' : achievement.rarity === 'ULTRA RARE' ? 'border-[#ffff00] text-[#ffff00] bg-[rgba(255,255,0,0.2)]' : 'border-[#00ffff] text-[#00ffff] bg-[rgba(0,255,255,0.2)]'}`}>
                                {achievement.rarity}
                              </div>
                            </>
                          )}
                          {achievement.id === 18 && (
                            <div className="text-xs font-mono font-bold" style={{ color: achievement.color }}>
                              {achievement.icon}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Summary Statistics */}
                  <div className="grid grid-cols-3 gap-6 p-6 rounded-lg border-2" style={{
                    borderColor: 'rgba(138, 43, 226, 0.5)',
                    background: 'rgba(138, 43, 226, 0.15)',
                    boxShadow: '0 0 30px rgba(138, 43, 226, 0.3)',
                  }}>
                    {[
                      { label: 'Achievements', value: '1,574', color: '#ffffff', icon: Award },
                      { label: 'Perfect Games', value: '1', color: '#ffff00', icon: Target },
                      { label: 'Avg. Game Completion', value: '21%', color: '#00ffff', icon: TrendingUp },
                    ].map((stat, idx) => {
                      const StatIcon = stat.icon;
                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="text-center"
                        >
                          <StatIcon size={32} className="mx-auto mb-3" style={{ color: stat.color, filter: `drop-shadow(0 0 10px ${stat.color})` }} />
                          <motion.div 
                            className="text-4xl font-mono font-bold mb-2" 
                            style={{ color: stat.color, textShadow: `0 0 15px ${stat.color}80` }}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                          >
                            {stat.value}
                          </motion.div>
                          <div className="text-sm font-mono uppercase" style={{ color: '#888', textShadow: '0 0 6px rgba(136,136,136,0.6)' }}>
                            {stat.label}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Additional Achievement Cards */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {[
                      { number: '75', icon: '🎯', label: 'Target Master', rarity: 'EPIC', color: '#00ff41' },
                      { number: '75', icon: '☠', label: 'Skull Collector', rarity: 'LEGENDARY', color: '#ff5500' },
                    ].map((card, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-6 rounded-lg border-2 relative overflow-hidden group"
                        style={{
                          borderColor: card.color,
                          background: `rgba(${card.color === '#00ff41' ? '0,255,65' : '255,85,0'}, 0.15)`,
                          boxShadow: `0 0 25px ${card.color}50`,
                        }}
                        whileHover={{ scale: 1.05, boxShadow: `0 0 35px ${card.color}80` }}
                      >
                        <div className="flex items-center gap-6">
                          <motion.div
                            className="text-6xl font-mono font-bold"
                            style={{ color: card.color, textShadow: `0 0 20px ${card.color}` }}
                            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {card.number}
                          </motion.div>
                          <div className="flex-1">
                            <div className="text-4xl mb-2">{card.icon}</div>
                            <div className="text-lg font-mono font-bold mb-1" style={{ color: card.color }}>
                              {card.label}
                            </div>
                            <div className="text-xs font-mono px-2 py-1 rounded border inline-block" style={{
                              borderColor: card.color,
                              color: card.color,
                              background: `rgba(${card.color === '#00ff41' ? '0,255,65' : '255,85,0'}, 0.2)`,
                            }}>
                              {card.rarity}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Network Activity Monitor */}
                <div className="mb-8">
                  <h2 className="text-3xl font-mono font-bold mb-6" style={{ color: '#ff00ff', textShadow: '0 0 20px rgba(255,0,255,0.6)' }}>
                    📡 NETWORK ACTIVITY MONITOR
                  </h2>
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                      { label: 'Active Connections', value: '12,847', trend: '+234', color: '#00ffff', icon: Network, subLabel: 'TCP/UDP sessions' },
                      { label: 'Data Transfer', value: '892 GB', trend: '+5.2%', color: '#00ff41', icon: Database, subLabel: 'Last 24h' },
                      { label: 'Bandwidth', value: '78%', trend: '+2.1%', color: '#ffff00', icon: Zap, subLabel: 'Peak usage' },
                      { label: 'Packet Loss', value: '0.1%', trend: '-0.05%', color: '#ff5500', icon: Activity, subLabel: 'Excellent' },
                    ].map((metric, idx) => {
                      const MetricIcon = metric.icon;
                      return (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-5 rounded-lg border-2 text-center relative overflow-hidden group"
                          style={{
                            borderColor: metric.color,
                            background: `rgba(${metric.color === '#00ffff' ? '0,255,255' : metric.color === '#00ff41' ? '0,255,65' : metric.color === '#ffff00' ? '255,255,0' : '255,85,0'}, 0.1)`,
                            boxShadow: `0 0 20px ${metric.color}40`,
                          }}
                          whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${metric.color}70` }}
                        >
                          <MetricIcon size={32} className="mx-auto mb-3" style={{ color: metric.color, filter: `drop-shadow(0 0 10px ${metric.color})` }} />
                          <div className="text-3xl font-mono font-bold mb-1" style={{ color: metric.color, textShadow: `0 0 10px ${metric.color}80` }}>
                            {metric.value}
                          </div>
                          <div className="text-xs font-mono uppercase mb-2" style={{ color: '#888' }}>
                            {metric.label}
                          </div>
                          <div className="text-[10px] font-mono mb-1" style={{ color: '#aaa' }}>
                            {metric.subLabel}
                          </div>
                          <div className="flex items-center justify-center gap-1 text-xs font-mono" style={{ color: metric.trend.startsWith('+') ? '#00ff41' : '#ff0000' }}>
                            {metric.trend.startsWith('+') ? '↑' : '↓'} {metric.trend}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Real-time Connection Graph */}
                  <div className="p-6 rounded-lg border-2 mb-6" style={{
                    borderColor: '#ff00ff',
                    background: 'rgba(255, 0, 255, 0.1)',
                    boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)',
                  }}>
                    <h3 className="text-lg font-mono font-bold mb-4" style={{ color: '#ff00ff' }}>
                      REAL-TIME CONNECTION GRAPH
                    </h3>
                    <div className="relative h-48 bg-black/50 rounded-lg overflow-hidden">
                      <svg className="absolute inset-0 w-full h-full">
                        {Array.from({ length: 30 }).map((_, i) => {
                          const x = (i / 29) * 100;
                          const value = 30 + Math.sin(i * 0.3 + Date.now() / 2000) * 20 + Math.random() * 10;
                          const y = 100 - value;
                          const nextX = ((i + 1) / 29) * 100;
                          const nextValue = 30 + Math.sin((i + 1) * 0.3 + Date.now() / 2000) * 20 + Math.random() * 10;
                          const nextY = 100 - nextValue;
                          return (
                            <motion.line
                              key={i}
                              x1={`${x}%`}
                              y1={`${y}%`}
                              x2={`${nextX}%`}
                              y2={`${nextY}%`}
                              stroke="#ff00ff"
                              strokeWidth="2"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.5, delay: i * 0.02 }}
                            />
                          );
                        })}
                        {Array.from({ length: 30 }).map((_, i) => {
                          const x = (i / 29) * 100;
                          const value = 30 + Math.sin(i * 0.3 + Date.now() / 2000) * 20 + Math.random() * 10;
                          const y = 100 - value;
                          return (
                            <motion.circle
                              key={i}
                              cx={`${x}%`}
                              cy={`${y}%`}
                              r="3"
                              fill="#ff00ff"
                              animate={{ r: [3, 5, 3], opacity: [0.6, 1, 0.6] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                            />
                          );
                        })}
                      </svg>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs font-mono" style={{ color: '#888' }}>
                        <span>00:00</span>
                        <span>06:00</span>
                        <span>12:00</span>
                        <span>18:00</span>
                        <span>24:00</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Threat Intelligence Dashboard */}
                <div className="mb-8">
                  <h2 className="text-3xl font-mono font-bold mb-6" style={{ color: '#ff5500', textShadow: '0 0 20px rgba(255,85,0,0.6)' }}>
                    🛡️ THREAT INTELLIGENCE DASHBOARD
                  </h2>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: 'DDoS Attacks', count: 1247, blocked: 1240, color: '#ff0000', severity: 'CRITICAL' },
                      { label: 'SQL Injections', count: 456, blocked: 450, color: '#ff5500', severity: 'HIGH' },
                      { label: 'XSS Attempts', count: 892, blocked: 889, color: '#ffff00', severity: 'MEDIUM' },
                      { label: 'Brute Force', count: 2341, blocked: 2335, color: '#ff5500', severity: 'HIGH' },
                      { label: 'Phishing', count: 178, blocked: 175, color: '#ffff00', severity: 'MEDIUM' },
                      { label: 'Ransomware', count: 12, blocked: 12, color: '#ff0000', severity: 'CRITICAL' },
                    ].map((threat, idx) => {
                      const blockRate = ((threat.blocked / threat.count) * 100).toFixed(1);
                      return (
                        <motion.div
                          key={threat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-5 rounded-lg border-2 relative overflow-hidden group"
                          style={{
                            borderColor: threat.color,
                            background: `rgba(${threat.color === '#ff0000' ? '255,0,0' : threat.color === '#ff5500' ? '255,85,0' : '255,255,0'}, 0.1)`,
                            boxShadow: `0 0 15px ${threat.color}30`,
                          }}
                          whileHover={{ scale: 1.02, boxShadow: `0 0 25px ${threat.color}60` }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-base font-mono font-bold" style={{ color: threat.color }}>
                              {threat.label}
                            </h4>
                            <motion.div
                              className={`px-2 py-1 rounded text-xs font-mono font-bold border ${threat.severity === 'CRITICAL' ? 'border-[#ff0000] text-[#ff0000] bg-[rgba(255,0,0,0.1)]' : threat.severity === 'HIGH' ? 'border-[#ff5500] text-[#ff5500] bg-[rgba(255,85,0,0.1)]' : 'border-[#ffff00] text-[#ffff00] bg-[rgba(255,255,0,0.1)]'}`}
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              {threat.severity}
                            </motion.div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs font-mono">
                              <span style={{ color: '#888' }}>Total:</span>
                              <span style={{ color: threat.color }} className="font-bold">{threat.count.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-xs font-mono">
                              <span style={{ color: '#888' }}>Blocked:</span>
                              <span style={{ color: '#00ff41' }} className="font-bold">{threat.blocked.toLocaleString()}</span>
                            </div>
                            <div className="w-full bg-black/50 rounded-full h-3 overflow-hidden relative">
                              <motion.div
                                className="h-full rounded-full"
                                style={{
                                  background: `linear-gradient(90deg, ${threat.color}80, ${threat.color})`,
                                  width: `${blockRate}%`,
                                }}
                                initial={{ width: 0 }}
                                animate={{ width: `${blockRate}%` }}
                                transition={{ duration: 1, delay: idx * 0.1 }}
                              />
                              <div className="absolute inset-0 flex items-center justify-center text-[8px] font-mono font-bold" style={{ color: '#fff', textShadow: '0 0 4px rgba(0,0,0,0.8)' }}>
                                {blockRate}%
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Mission Log & Command Center */}
                <div className="mb-8">
                  <h2 className="text-3xl font-mono font-bold mb-6" style={{ color: '#00ffff', textShadow: '0 0 20px rgba(0,255,255,0.6)' }}>
                    📋 MISSION LOG & COMMAND CENTER
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Mission Log */}
                    <div className="p-6 rounded-lg border-2" style={{
                      borderColor: '#00ffff',
                      background: 'rgba(0, 255, 255, 0.1)',
                      boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                    }}>
                      <h3 className="text-lg font-mono font-bold mb-4" style={{ color: '#00ffff' }}>
                        RECENT MISSIONS
                      </h3>
                      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                        {[
                          { id: 'MISSION-001', name: 'SAIME Office Infiltration', status: 'COMPLETE', date: '2024-12-15', target: 'Venezuela', data: '47.8K records', color: '#00ff41' },
                          { id: 'MISSION-002', name: 'GPS Coordinate Mapping', status: 'IN PROGRESS', date: '2024-12-16', target: 'Colombia', data: '479 GPS', color: '#ffff00' },
                          { id: 'MISSION-003', name: 'Hash Cracking Operation', status: 'COMPLETE', date: '2024-12-14', target: 'Government DB', data: '1,247 hashes', color: '#00ff41' },
                          { id: 'MISSION-004', name: 'EXIF Data Extraction', status: 'COMPLETE', date: '2024-12-13', target: 'Photo Database', data: '47 photos', color: '#00ff41' },
                          { id: 'MISSION-005', name: 'API Discovery Scan', status: 'MONITORING', date: '2024-12-16', target: 'gov.ve', data: '14 APIs', color: '#00d4ff' },
                          { id: 'MISSION-006', name: 'Social Media Intelligence', status: 'IN PROGRESS', date: '2024-12-16', target: 'Public Data', data: '5.6K profiles', color: '#ffff00' },
                        ].map((mission, idx) => (
                          <motion.div
                            key={mission.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="p-4 rounded border-2 relative overflow-hidden group"
                            style={{
                              borderColor: mission.color,
                              background: `rgba(${mission.color === '#00ff41' ? '0,255,65' : mission.color === '#ffff00' ? '255,255,0' : '0,212,255'}, 0.1)`,
                              boxShadow: `0 0 10px ${mission.color}30`,
                            }}
                            whileHover={{ scale: 1.02, boxShadow: `0 0 20px ${mission.color}60` }}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1">
                                <div className="text-xs font-mono mb-1" style={{ color: '#888' }}>{mission.id}</div>
                                <div className="text-sm font-mono font-bold mb-1" style={{ color: mission.color }}>
                                  {mission.name}
                                </div>
                                <div className="text-xs font-mono" style={{ color: '#aaa' }}>
                                  Target: <span style={{ color: '#00ffff' }}>{mission.target}</span>
                                </div>
                              </div>
                              <motion.div
                                className={`px-2 py-1 rounded text-xs font-mono font-bold border ${mission.status === 'COMPLETE' ? 'border-[#00ff41] text-[#00ff41] bg-[rgba(0,255,65,0.1)]' : mission.status === 'IN PROGRESS' ? 'border-[#ffff00] text-[#ffff00] bg-[rgba(255,255,0,0.1)]' : 'border-[#00d4ff] text-[#00d4ff] bg-[rgba(0,212,255,0.1)]'}`}
                                animate={{ opacity: mission.status === 'IN PROGRESS' ? [0.7, 1, 0.7] : 1 }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                {mission.status}
                              </motion.div>
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: `${mission.color}30` }}>
                              <div className="text-xs font-mono" style={{ color: '#888' }}>
                                Date: <span style={{ color: '#aaa' }}>{mission.date}</span>
                              </div>
                              <div className="text-xs font-mono font-bold" style={{ color: '#00ffff' }}>
                                {mission.data}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Command Center */}
                    <div className="p-6 rounded-lg border-2" style={{
                      borderColor: '#00ff41',
                      background: 'rgba(0, 255, 65, 0.1)',
                      boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)',
                    }}>
                      <h3 className="text-lg font-mono font-bold mb-4" style={{ color: '#00ff41' }}>
                        COMMAND CENTER
                      </h3>
                      <div className="space-y-4">
                        {[
                          { command: 'SCAN_NETWORK', status: 'ACTIVE', target: '172.16.0.0/24', progress: 67, color: '#00ffff' },
                          { command: 'CRACK_HASH', status: 'RUNNING', target: 'MD5: a1b2c3...', progress: 45, color: '#ff00ff' },
                          { command: 'EXTRACT_EXIF', status: 'IDLE', target: 'photo_db', progress: 0, color: '#888' },
                          { command: 'MAP_GPS', status: 'ACTIVE', target: 'SAIME Offices', progress: 89, color: '#00ff41' },
                        ].map((cmd, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex items-center justify-between text-xs font-mono">
                              <div className="flex items-center gap-2">
                                <span style={{ color: '#888' }}>CMD:</span>
                                <span style={{ color: cmd.color, fontFamily: 'monospace' }} className="font-bold">{cmd.command}</span>
                              </div>
                              <motion.span
                                className={`px-2 py-1 rounded text-xs font-mono font-bold border ${cmd.status === 'ACTIVE' ? 'border-[#00ff41] text-[#00ff41] bg-[rgba(0,255,65,0.1)]' : cmd.status === 'RUNNING' ? 'border-[#00ffff] text-[#00ffff] bg-[rgba(0,255,255,0.1)]' : 'border-[#888] text-[#888] bg-[rgba(136,136,136,0.1)]'}`}
                                animate={{ opacity: cmd.status === 'ACTIVE' || cmd.status === 'RUNNING' ? [0.7, 1, 0.7] : 1 }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                {cmd.status}
                              </motion.span>
                            </div>
                            <div className="text-xs font-mono" style={{ color: '#aaa' }}>
                              Target: <span style={{ color: '#00d4ff' }}>{cmd.target}</span>
                            </div>
                            {cmd.progress > 0 && (
                              <div className="w-full bg-black/50 rounded-full h-2">
                                <motion.div
                                  className="h-full rounded-full"
                                  style={{
                                    background: `linear-gradient(90deg, ${cmd.color}80, ${cmd.color})`,
                                    width: `${cmd.progress}%`,
                                  }}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${cmd.progress}%` }}
                                  transition={{ duration: 1, delay: idx * 0.2 }}
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Exfiltration Log */}
                <div className="mb-8">
                  <h2 className="text-3xl font-mono font-bold mb-6" style={{ color: '#00ff41', textShadow: '0 0 20px rgba(0,255,65,0.6)' }}>
                    💾 DATA EXFILTRATION LOG
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: 1, source: 'SAIME Database', records: '12,456', size: '1.2 GB', status: 'COMPLETED', time: '0.5s ago', color: '#00ff41', progress: 100 },
                      { id: 2, source: 'Government Emails', records: '8,234', size: '890 MB', status: 'IN PROGRESS', time: '1.8s ago', color: '#ffff00', progress: 67 },
                      { id: 3, source: 'GPS Logs', records: '479', size: '120 MB', status: 'COMPLETED', time: '2.3s ago', color: '#00ffff', progress: 100 },
                      { id: 4, source: 'Financial Records', records: '2,100', size: '2.1 GB', status: 'FAILED', time: '3.1s ago', color: '#ff0000', progress: 45 },
                    ].map((entry, idx) => (
                      <motion.div
                        key={entry.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-5 rounded-lg border-2 relative overflow-hidden group"
                        style={{
                          borderColor: entry.color,
                          background: `rgba(${entry.color === '#00ff41' ? '0,255,65' : entry.color === '#ffff00' ? '255,255,0' : entry.color === '#00ffff' ? '0,255,255' : '255,0,0'}, 0.1)`,
                          boxShadow: `0 0 15px ${entry.color}30`,
                        }}
                        whileHover={{ scale: 1.02, boxShadow: `0 0 25px ${entry.color}60` }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="text-base font-mono font-bold mb-1" style={{ color: entry.color }}>
                              {entry.source}
                            </h4>
                            <div className="text-xs font-mono" style={{ color: '#aaa' }}>
                              Records: <span style={{ color: '#00ffff' }}>{entry.records}</span>
                            </div>
                          </div>
                          <motion.div
                            className={`px-2 py-1 rounded text-xs font-mono font-bold border ${entry.status === 'COMPLETED' ? 'border-[#00ff41] text-[#00ff41] bg-[rgba(0,255,65,0.1)]' : entry.status === 'IN PROGRESS' ? 'border-[#ffff00] text-[#ffff00] bg-[rgba(255,255,0,0.1)]' : 'border-[#ff0000] text-[#ff0000] bg-[rgba(255,0,0,0.1)]'}`}
                            animate={{ opacity: entry.status === 'IN PROGRESS' ? [0.7, 1, 0.7] : 1 }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {entry.status}
                          </motion.div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-mono">
                            <span style={{ color: '#888' }}>Size:</span>
                            <span style={{ color: entry.color }} className="font-bold">{entry.size}</span>
                          </div>
                          {entry.status === 'IN PROGRESS' && (
                            <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden">
                              <motion.div
                                className="h-full rounded-full"
                                style={{
                                  background: `linear-gradient(90deg, ${entry.color}80, ${entry.color})`,
                                  width: `${entry.progress}%`,
                                }}
                                initial={{ width: 0 }}
                                animate={{ width: `${entry.progress}%` }}
                                transition={{ duration: 1, delay: idx * 0.2 }}
                              />
                            </div>
                          )}
                          <div className="flex justify-between text-xs font-mono pt-2 border-t" style={{ borderColor: `${entry.color}30` }}>
                            <span style={{ color: '#888' }}>Time:</span>
                            <span style={{ color: '#aaa' }}>{entry.time}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Global Network Map */}
                <div className="mb-8">
                  <h2 className="text-3xl font-mono font-bold mb-6" style={{ color: '#00d4ff', textShadow: '0 0 20px rgba(0,212,255,0.6)' }}>
                    🌐 GLOBAL NETWORK MAP
                  </h2>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { country: 'Venezuela', active: 12, monitoring: true, color: '#ff0000', lastAccess: '2m ago', systems: 124, dataExfil: '1.2 TB' },
                      { country: 'Colombia', active: 8, monitoring: true, color: '#ff5500', lastAccess: '5m ago', systems: 87, dataExfil: '890 GB' },
                      { country: 'Ecuador', active: 5, monitoring: false, color: '#ffff00', lastAccess: '12m ago', systems: 56, dataExfil: '450 GB' },
                      { country: 'Peru', active: 7, monitoring: true, color: '#00ff41', lastAccess: '8m ago', systems: 78, dataExfil: '700 GB' },
                      { country: 'Brazil', active: 15, monitoring: true, color: '#00ffff', lastAccess: '1m ago', systems: 145, dataExfil: '1.5 TB' },
                      { country: 'Argentina', active: 10, monitoring: false, color: '#ff00ff', lastAccess: '15m ago', systems: 92, dataExfil: '950 GB' },
                    ].map((node, idx) => (
                      <motion.div
                        key={node.country}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-5 rounded-lg border-2 relative overflow-hidden group"
                        style={{
                          borderColor: node.color,
                          background: `rgba(${node.color === '#ff0000' ? '255,0,0' : node.color === '#ff5500' ? '255,85,0' : node.color === '#ffff00' ? '255,255,0' : node.color === '#00ff41' ? '0,255,65' : node.color === '#00ffff' ? '0,255,255' : '255,0,255'}, 0.1)`,
                          boxShadow: `0 0 15px ${node.color}30`,
                        }}
                        whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${node.color}60` }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-mono font-bold" style={{ color: node.color }}>
                            {node.country}
                          </h4>
                          <motion.div
                            className={`w-2 h-2 rounded-full ${node.monitoring ? 'bg-[#00ff41]' : 'bg-[#888]'}`}
                            animate={{ opacity: node.monitoring ? [0.5, 1, 0.5] : 1 }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            style={{ boxShadow: node.monitoring ? '0 0 8px rgba(0,255,65,0.8)' : 'none' }}
                          />
                        </div>
                        <div className="space-y-2 text-xs font-mono">
                          <div className="flex justify-between">
                            <span style={{ color: '#888' }}>Active Connections:</span>
                            <span style={{ color: '#00ffff' }} className="font-bold">{node.active}</span>
                          </div>
                          <div className="flex justify-between">
                            <span style={{ color: '#888' }}>Systems:</span>
                            <span style={{ color: node.color }} className="font-bold">{node.systems}</span>
                          </div>
                          <div className="flex justify-between">
                            <span style={{ color: '#888' }}>Data Exfil:</span>
                            <span style={{ color: '#00ff41' }} className="font-bold">{node.dataExfil}</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t" style={{ borderColor: `${node.color}30` }}>
                            <span style={{ color: '#888' }}>Last Access:</span>
                            <span style={{ color: '#aaa' }}>{node.lastAccess}</span>
                          </div>
                          <div className="flex justify-between">
                            <span style={{ color: '#888' }}>Status:</span>
                            <span style={{ color: node.monitoring ? '#00ff41' : '#888' }} className="font-bold">
                              {node.monitoring ? 'MONITORING' : 'INACTIVE'}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Live Security Operations Feed */}
                <div className="mb-8">
                  <h2 className="text-3xl font-mono font-bold mb-6" style={{ color: '#ff00ff', textShadow: '0 0 20px rgba(255,0,255,0.6)' }}>
                    ⚡ LIVE SECURITY OPERATIONS FEED
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: 1, operation: 'Hash Cracking', target: 'MD5 Database', progress: 89, eta: '2m 34s', color: '#ff00ff', status: 'ACTIVE', records: '1,247/1,400' },
                      { id: 2, operation: 'Port Scanning', target: '172.16.0.0/24', progress: 67, eta: '4m 12s', color: '#00ffff', status: 'ACTIVE', records: '167/250 hosts' },
                      { id: 3, operation: 'EXIF Extraction', target: 'Photo Archive', progress: 45, eta: '6m 18s', color: '#ffff00', status: 'RUNNING', records: '47/105 photos' },
                      { id: 4, operation: 'GPS Mapping', target: 'SAIME Offices', progress: 92, eta: '0m 47s', color: '#00ff41', status: 'ACTIVE', records: '479/520 coordinates' },
                    ].map((op, idx) => (
                      <motion.div
                        key={op.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-5 rounded-lg border-2 relative overflow-hidden group"
                        style={{
                          borderColor: op.color,
                          background: `rgba(${op.color === '#ff00ff' ? '255,0,255' : op.color === '#00ffff' ? '0,255,255' : op.color === '#ffff00' ? '255,255,0' : '0,255,65'}, 0.1)`,
                          boxShadow: `0 0 15px ${op.color}30`,
                        }}
                        whileHover={{ scale: 1.02, boxShadow: `0 0 25px ${op.color}60` }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="text-base font-mono font-bold mb-1" style={{ color: op.color }}>
                              {op.operation}
                            </h4>
                            <div className="text-xs font-mono" style={{ color: '#aaa' }}>
                              Target: <span style={{ color: '#00ffff' }}>{op.target}</span>
                            </div>
                          </div>
                          <motion.div
                            className={`px-2 py-1 rounded text-xs font-mono font-bold border ${op.status === 'ACTIVE' ? 'border-[#00ff41] text-[#00ff41] bg-[rgba(0,255,65,0.1)]' : 'border-[#ffff00] text-[#ffff00] bg-[rgba(255,255,0,0.1)]'}`}
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {op.status}
                          </motion.div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-mono">
                            <span style={{ color: '#888' }}>Progress:</span>
                            <span style={{ color: op.color }} className="font-bold">{op.progress}%</span>
                          </div>
                          <div className="w-full bg-black/50 rounded-full h-3 overflow-hidden relative">
                            <motion.div
                              className="h-full rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${op.color}80, ${op.color})`,
                                width: `${op.progress}%`,
                              }}
                              initial={{ width: 0 }}
                              animate={{ width: `${op.progress}%` }}
                              transition={{ duration: 1, delay: idx * 0.2 }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-[8px] font-mono font-bold" style={{ color: '#fff', textShadow: '0 0 4px rgba(0,0,0,0.8)' }}>
                              {op.progress}%
                            </div>
                          </div>
                          <div className="flex justify-between text-xs font-mono pt-2 border-t" style={{ borderColor: `${op.color}30` }}>
                            <span style={{ color: '#888' }}>ETA:</span>
                            <span style={{ color: '#ffff00' }} className="font-bold">{op.eta}</span>
                          </div>
                          <div className="flex justify-between text-xs font-mono">
                            <span style={{ color: '#888' }}>Records:</span>
                            <span style={{ color: '#00ffff' }} className="font-bold">{op.records}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* System Performance Metrics */}
                <div className="mb-8">
                  <h2 className="text-3xl font-mono font-bold mb-6" style={{ color: '#00ffff', textShadow: '0 0 20px rgba(0,255,255,0.6)' }}>
                    🖥️ SYSTEM PERFORMANCE METRICS
                  </h2>
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { label: 'CPU Usage', value: 47, unit: '%', color: '#00ff41', icon: Cpu, trend: '-2%', peak: 89 },
                      { label: 'Memory', value: 68, unit: '%', color: '#00ffff', icon: HardDrive, trend: '+3%', peak: 92 },
                      { label: 'Network I/O', value: 82, unit: '%', color: '#00d4ff', icon: Network, trend: '+5%', peak: 98 },
                      { label: 'Storage', value: 54, unit: '%', color: '#ffff00', icon: Database, trend: '+1%', peak: 76 },
                    ].map((metric, idx) => {
                      const MetricIcon = metric.icon;
                      return (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-5 rounded-lg border-2 text-center relative overflow-hidden group"
                          style={{
                            borderColor: metric.color,
                            background: `rgba(${metric.color === '#00ff41' ? '0,255,65' : metric.color === '#00ffff' ? '0,255,255' : metric.color === '#00d4ff' ? '0,212,255' : '255,255,0'}, 0.1)`,
                            boxShadow: `0 0 20px ${metric.color}40`,
                          }}
                          whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${metric.color}70` }}
                        >
                          <MetricIcon size={32} className="mx-auto mb-3" style={{ color: metric.color, filter: `drop-shadow(0 0 10px ${metric.color})` }} />
                          <div className="text-4xl font-mono font-bold mb-1" style={{ color: metric.color, textShadow: `0 0 10px ${metric.color}80` }}>
                            {metric.value}{metric.unit}
                          </div>
                          <div className="text-xs font-mono uppercase mb-2" style={{ color: '#888' }}>
                            {metric.label}
                          </div>
                          <div className="w-full bg-black/50 rounded-full h-2 mb-2 overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${metric.color}80, ${metric.color})`,
                                width: `${metric.value}%`,
                              }}
                              initial={{ width: 0 }}
                              animate={{ width: `${metric.value}%` }}
                              transition={{ duration: 1, delay: idx * 0.1 }}
                            />
                          </div>
                          <div className="flex items-center justify-center gap-2 text-xs font-mono">
                            <span style={{ color: '#888' }}>Peak: {metric.peak}%</span>
                            <span style={{ color: metric.trend.startsWith('+') ? '#ffff00' : '#00ff41' }}>
                              {metric.trend.startsWith('+') ? '↑' : '↓'} {metric.trend}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Real-Time Log Stream */}
                <div className="mb-8">
                  <h2 className="text-3xl font-mono font-bold mb-6" style={{ color: '#00ff41', textShadow: '0 0 20px rgba(0,255,65,0.6)' }}>
                    📜 REAL-TIME LOG STREAM
                  </h2>
                  <div className="p-6 rounded-lg border-2" style={{
                    borderColor: '#00ff41',
                    background: 'rgba(0, 255, 65, 0.1)',
                    boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)',
                  }}>
                    <div className="space-y-2 max-h-96 overflow-y-auto pr-2 font-mono text-xs">
                      {[
                        { time: '00:00:01.234', level: 'INFO', message: 'Network scan initiated on 172.16.0.0/24', color: '#00ffff' },
                        { time: '00:00:02.567', level: 'WARN', message: 'Unusual traffic pattern detected from 192.168.1.105', color: '#ffff00' },
                        { time: '00:00:03.890', level: 'SUCCESS', message: 'Hash cracked: MD5 a1b2c3d4e5f6... → password123', color: '#00ff41' },
                        { time: '00:00:05.123', level: 'INFO', message: 'GPS coordinates extracted: 47.123, -74.456', color: '#00ffff' },
                        { time: '00:00:06.456', level: 'ERROR', message: 'Connection timeout to SAIME.gov.ve', color: '#ff0000' },
                        { time: '00:00:07.789', level: 'SUCCESS', message: 'Data exfiltration completed: 1.2 GB from SAIME Database', color: '#00ff41' },
                        { time: '00:00:09.012', level: 'INFO', message: 'Port scan results: 22/tcp OPEN, 80/tcp OPEN, 443/tcp OPEN', color: '#00ffff' },
                        { time: '00:00:10.345', level: 'WARN', message: 'Brute force attempt detected from 10.0.0.42', color: '#ffff00' },
                        { time: '00:00:11.678', level: 'SUCCESS', message: 'EXIF data extracted from 47 photos', color: '#00ff41' },
                        { time: '00:00:13.001', level: 'INFO', message: 'API endpoint discovered: /api/v2/users', color: '#00ffff' },
                        { time: '00:00:14.334', level: 'SUCCESS', message: 'Mission MISSION-001 completed successfully', color: '#00ff41' },
                        { time: '00:00:15.667', level: 'INFO', message: 'System health check: CPU 47%, Memory 68%, Network 82%', color: '#00ffff' },
                      ].map((log, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-3 p-2 rounded border-l-2 hover:bg-black/20"
                          style={{ borderLeftColor: log.color }}
                        >
                          <span className="text-[10px] font-mono" style={{ color: '#888', minWidth: '80px' }}>{log.time}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${log.level === 'SUCCESS' ? 'bg-[rgba(0,255,65,0.2)] text-[#00ff41]' : log.level === 'WARN' ? 'bg-[rgba(255,255,0,0.2)] text-[#ffff00]' : log.level === 'ERROR' ? 'bg-[rgba(255,0,0,0.2)] text-[#ff0000]' : 'bg-[rgba(0,255,255,0.2)] text-[#00ffff]'}`} style={{ minWidth: '60px' }}>
                            {log.level}
                          </span>
                          <span className="flex-1 font-mono" style={{ color: '#aaa' }}>{log.message}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Advanced Analytics Dashboard */}
                <div className="mb-8">
                  <h2 className="text-3xl font-mono font-bold mb-6" style={{ color: '#00d4ff', textShadow: '0 0 20px rgba(0,212,255,0.6)' }}>
                    📊 ADVANCED ANALYTICS DASHBOARD
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Left: Attack Patterns */}
                    <div className="p-6 rounded-lg border-2" style={{
                      borderColor: '#00d4ff',
                      background: 'rgba(0, 212, 255, 0.1)',
                      boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
                    }}>
                      <h3 className="text-lg font-mono font-bold mb-4" style={{ color: '#00d4ff' }}>
                        ATTACK PATTERNS (24H)
                      </h3>
                      <div className="space-y-3">
                        {[
                          { pattern: 'SQL Injection', count: 456, peak: '14:23', trend: '+12%', color: '#ff5500' },
                          { pattern: 'XSS Cross-Site', count: 892, peak: '16:45', trend: '+8%', color: '#ffff00' },
                          { pattern: 'DDoS Flood', count: 1247, peak: '18:12', trend: '+23%', color: '#ff0000' },
                          { pattern: 'Brute Force', count: 2341, peak: '20:34', trend: '+5%', color: '#ff5500' },
                          { pattern: 'Phishing', count: 178, peak: '09:15', trend: '-3%', color: '#ffff00' },
                          { pattern: 'Ransomware', count: 12, peak: '11:42', trend: '+100%', color: '#ff0000' },
                        ].map((attack, idx) => (
                          <motion.div
                            key={attack.pattern}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-3 rounded border-2"
                            style={{
                              borderColor: attack.color,
                              background: `rgba(${attack.color === '#ff5500' ? '255,85,0' : attack.color === '#ffff00' ? '255,255,0' : '255,0,0'}, 0.1)`,
                              boxShadow: `0 0 10px ${attack.color}30`,
                            }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-mono font-bold" style={{ color: attack.color }}>
                                {attack.pattern}
                              </span>
                              <span className="text-xs font-mono font-bold" style={{ color: '#00ffff' }}>
                                {attack.count.toLocaleString()}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-xs font-mono">
                              <span style={{ color: '#888' }}>Peak: {attack.peak}</span>
                              <span style={{ color: attack.trend.startsWith('+') ? '#ffff00' : '#00ff41' }}>
                                {attack.trend}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Data Flow Analysis */}
                    <div className="p-6 rounded-lg border-2" style={{
                      borderColor: '#ff00ff',
                      background: 'rgba(255, 0, 255, 0.1)',
                      boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)',
                    }}>
                      <h3 className="text-lg font-mono font-bold mb-4" style={{ color: '#ff00ff' }}>
                        DATA FLOW ANALYSIS
                      </h3>
                      <div className="space-y-4">
                        {[
                          { source: 'SAIME API', destination: 'Local DB', size: '1.2 GB', rate: '45 MB/s', status: 'ACTIVE', color: '#00ff41' },
                          { source: 'Government Portal', destination: 'Archive', size: '890 MB', rate: '32 MB/s', status: 'ACTIVE', color: '#00ffff' },
                          { source: 'Email Server', destination: 'Index', size: '450 MB', rate: '18 MB/s', status: 'SLOW', color: '#ffff00' },
                          { source: 'GPS Database', destination: 'Map Cache', size: '120 MB', rate: '12 MB/s', status: 'ACTIVE', color: '#00ff41' },
                        ].map((flow, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-4 rounded border-2"
                            style={{
                              borderColor: flow.color,
                              background: `rgba(${flow.color === '#00ff41' ? '0,255,65' : flow.color === '#00ffff' ? '0,255,255' : '255,255,0'}, 0.1)`,
                              boxShadow: `0 0 10px ${flow.color}30`,
                            }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex-1">
                                <div className="text-sm font-mono font-bold mb-1" style={{ color: flow.color }}>
                                  {flow.source} → {flow.destination}
                                </div>
                                <div className="text-xs font-mono" style={{ color: '#aaa' }}>
                                  Size: <span style={{ color: '#00ffff' }}>{flow.size}</span> • Rate: <span style={{ color: '#ffff00' }}>{flow.rate}</span>
                                </div>
                              </div>
                              <motion.span
                                className={`px-2 py-1 rounded text-xs font-mono font-bold border ${flow.status === 'ACTIVE' ? 'border-[#00ff41] text-[#00ff41] bg-[rgba(0,255,65,0.1)]' : 'border-[#ffff00] text-[#ffff00] bg-[rgba(255,255,0,0.1)]'}`}
                                animate={{ opacity: flow.status === 'ACTIVE' ? [0.7, 1, 0.7] : 1 }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                {flow.status}
                              </motion.span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vulnerability Scanner Results */}
                <div className="mb-8">
                  <h2 className="text-3xl font-mono font-bold mb-6" style={{ color: '#ff0000', textShadow: '0 0 20px rgba(255,0,0,0.6)' }}>
                    🔍 VULNERABILITY SCANNER RESULTS
                  </h2>
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { severity: 'CRITICAL', count: 12, cves: ['CVE-2023-1234', 'CVE-2023-5678'], color: '#ff0000', action: 'PATCH NOW' },
                      { severity: 'HIGH', count: 45, cves: ['CVE-2023-9876', 'CVE-2023-4321'], color: '#ff5500', action: 'REVIEW' },
                      { severity: 'MEDIUM', count: 89, cves: ['CVE-2023-1122'], color: '#ffff00', action: 'MONITOR' },
                      { severity: 'LOW', count: 123, cves: [], color: '#00d4ff', action: 'LOG' },
                    ].map((vuln, idx) => (
                      <motion.div
                        key={vuln.severity}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-5 rounded-lg border-2 text-center"
                        style={{
                          borderColor: vuln.color,
                          background: `rgba(${vuln.color === '#ff0000' ? '255,0,0' : vuln.color === '#ff5500' ? '255,85,0' : vuln.color === '#ffff00' ? '255,255,0' : '0,212,255'}, 0.1)`,
                          boxShadow: `0 0 20px ${vuln.color}40`,
                        }}
                        whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${vuln.color}70` }}
                      >
                        <div className="text-2xl font-mono font-bold mb-2" style={{ color: vuln.color, textShadow: `0 0 10px ${vuln.color}80` }}>
                          {vuln.count}
                        </div>
                        <div className="text-sm font-mono font-bold mb-3" style={{ color: vuln.color }}>
                          {vuln.severity}
                        </div>
                        {vuln.cves.length > 0 && (
                          <div className="space-y-1 mb-3 text-xs font-mono" style={{ color: '#888' }}>
                            {vuln.cves.map((cve, cveIdx) => (
                              <div key={cveIdx}>{cve}</div>
                            ))}
                          </div>
                        )}
                        <motion.button
                          className="w-full px-3 py-2 rounded border text-xs font-mono font-bold uppercase"
                          style={{
                            borderColor: vuln.color,
                            color: vuln.color,
                            background: `rgba(${vuln.color === '#ff0000' ? '255,0,0' : vuln.color === '#ff5500' ? '255,85,0' : vuln.color === '#ffff00' ? '255,255,0' : '0,212,255'}, 0.2)`,
                          }}
                          whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${vuln.color}60` }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {vuln.action}
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Active Intelligence Operations */}
                <div className="mb-8">
                  <h2 className="text-3xl font-mono font-bold mb-6" style={{ color: '#ff00ff', textShadow: '0 0 20px rgba(255,0,255,0.6)' }}>
                    🎯 ACTIVE INTELLIGENCE OPERATIONS
                  </h2>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { id: 'OP-001', name: 'SAIME Deep Dive', target: 'Venezuela', progress: 89, agents: 12, intel: '47.8K records', color: '#ff00ff', priority: 'HIGH' },
                      { id: 'OP-002', name: 'GPS Mapping Initiative', target: 'Colombia', progress: 67, agents: 8, intel: '479 coordinates', color: '#00ffff', priority: 'MEDIUM' },
                      { id: 'OP-003', name: 'Hash Recovery Project', target: 'Government DB', progress: 45, agents: 15, intel: '1,247 hashes', color: '#ffff00', priority: 'HIGH' },
                      { id: 'OP-004', name: 'EXIF Intelligence', target: 'Photo Archive', progress: 92, agents: 6, intel: '47 photos', color: '#00ff41', priority: 'LOW' },
                      { id: 'OP-005', name: 'API Discovery', target: 'gov.ve', progress: 78, agents: 10, intel: '14 endpoints', color: '#00d4ff', priority: 'MEDIUM' },
                      { id: 'OP-006', name: 'Social Media OSINT', target: 'Public Data', progress: 34, agents: 4, intel: '5.6K profiles', color: '#ff5500', priority: 'LOW' },
                    ].map((op, idx) => (
                      <motion.div
                        key={op.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-5 rounded-lg border-2 relative overflow-hidden group"
                        style={{
                          borderColor: op.color,
                          background: `rgba(${op.color === '#ff00ff' ? '255,0,255' : op.color === '#00ffff' ? '0,255,255' : op.color === '#ffff00' ? '255,255,0' : op.color === '#00ff41' ? '0,255,65' : op.color === '#00d4ff' ? '0,212,255' : '255,85,0'}, 0.1)`,
                          boxShadow: `0 0 15px ${op.color}30`,
                        }}
                        whileHover={{ scale: 1.02, boxShadow: `0 0 25px ${op.color}60` }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="text-xs font-mono mb-1" style={{ color: '#888' }}>{op.id}</div>
                            <h4 className="text-base font-mono font-bold mb-1" style={{ color: op.color }}>
                              {op.name}
                            </h4>
                            <div className="text-xs font-mono" style={{ color: '#aaa' }}>
                              Target: <span style={{ color: '#00ffff' }}>{op.target}</span>
                            </div>
                          </div>
                          <motion.div
                            className={`px-2 py-1 rounded text-xs font-mono font-bold border ${op.priority === 'HIGH' ? 'border-[#ff0000] text-[#ff0000] bg-[rgba(255,0,0,0.1)]' : op.priority === 'MEDIUM' ? 'border-[#ffff00] text-[#ffff00] bg-[rgba(255,255,0,0.1)]' : 'border-[#00ff41] text-[#00ff41] bg-[rgba(0,255,65,0.1)]'}`}
                            animate={{ opacity: op.priority === 'HIGH' ? [0.7, 1, 0.7] : 1 }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {op.priority}
                          </motion.div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-mono">
                            <span style={{ color: '#888' }}>Agents:</span>
                            <span style={{ color: '#00ffff' }} className="font-bold">{op.agents}</span>
                          </div>
                          <div className="flex justify-between text-xs font-mono">
                            <span style={{ color: '#888' }}>Intel:</span>
                            <span style={{ color: '#00ff41' }} className="font-bold">{op.intel}</span>
                          </div>
                          <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${op.color}80, ${op.color})`,
                                width: `${op.progress}%`,
                              }}
                              initial={{ width: 0 }}
                              animate={{ width: `${op.progress}%` }}
                              transition={{ duration: 1, delay: idx * 0.2 }}
                            />
                          </div>
                          <div className="flex justify-between text-xs font-mono pt-1">
                            <span style={{ color: '#888' }}>Progress:</span>
                            <span style={{ color: op.color }} className="font-bold">{op.progress}%</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* System Status Overview */}
                <div className="mb-8">
                  <h2 className="text-3xl font-mono font-bold mb-6" style={{ color: '#00ffff', textShadow: '0 0 20px rgba(0,255,255,0.6)' }}>
                    ⚙️ SYSTEM STATUS OVERVIEW
                  </h2>
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { service: 'Web Server', status: 'ONLINE', uptime: '99.98%', requests: '12.4K/min', color: '#00ff41', latency: '14ms' },
                      { service: 'Database', status: 'ONLINE', uptime: '99.95%', requests: '8.7K/min', color: '#00ff41', latency: '8ms' },
                      { service: 'API Gateway', status: 'DEGRADED', uptime: '98.2%', requests: '5.2K/min', color: '#ffff00', latency: '45ms' },
                      { service: 'Cache Layer', status: 'ONLINE', uptime: '99.99%', requests: '24.8K/min', color: '#00ff41', latency: '2ms' },
                    ].map((service, idx) => (
                      <motion.div
                        key={service.service}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-5 rounded-lg border-2 text-center"
                        style={{
                          borderColor: service.color,
                          background: `rgba(${service.color === '#00ff41' ? '0,255,65' : '255,255,0'}, 0.1)`,
                          boxShadow: `0 0 20px ${service.color}40`,
                        }}
                        whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${service.color}70` }}
                      >
                        <h4 className="text-base font-mono font-bold mb-2" style={{ color: service.color }}>
                          {service.service}
                        </h4>
                        <motion.div
                          className={`inline-block px-3 py-1 rounded text-xs font-mono font-bold border mb-3 ${service.status === 'ONLINE' ? 'border-[#00ff41] text-[#00ff41] bg-[rgba(0,255,65,0.1)]' : 'border-[#ffff00] text-[#ffff00] bg-[rgba(255,255,0,0.1)]'}`}
                          animate={{ opacity: service.status === 'DEGRADED' ? [0.7, 1, 0.7] : 1 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {service.status}
                        </motion.div>
                        <div className="space-y-1 text-xs font-mono">
                          <div className="flex justify-between">
                            <span style={{ color: '#888' }}>Uptime:</span>
                            <span style={{ color: '#00ffff' }} className="font-bold">{service.uptime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span style={{ color: '#888' }}>Requests:</span>
                            <span style={{ color: '#00ff41' }} className="font-bold">{service.requests}</span>
                          </div>
                          <div className="flex justify-between">
                            <span style={{ color: '#888' }}>Latency:</span>
                            <span style={{ color: '#ffff00' }} className="font-bold">{service.latency}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeCategory === 'shop' && (
              <motion.div
                key="shop"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="w-full h-full flex items-center justify-center"
              >
                <div className="text-center">
                  <ShoppingCart size={80} className="mx-auto mb-6" style={{ color: '#ff00ff' }} />
                  <h2 className="text-4xl font-mono font-bold mb-4" style={{ color: '#ff00ff', textShadow: '0 0 20px rgba(255,0,255,0.8)' }}>
                    SHOP
                  </h2>
                  <p className="text-lg font-mono mb-6" style={{ color: '#888' }}>
                    Coming soon...
                  </p>
                  <button
                    onClick={() => windowManager.openWindow('shop')}
                    className="px-6 py-3 rounded border-2 font-mono font-bold uppercase"
                    style={{
                      borderColor: '#ff00ff',
                      color: '#ff00ff',
                      background: 'rgba(255, 0, 255, 0.1)',
                      boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
                    }}
                  >
                    VIEW PRODUCTS
                  </button>
                </div>
              </motion.div>
            )}

            {activeCategory === 'social' && (
              <motion.div
                key="social"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="w-full h-full flex items-center justify-center"
              >
                <div className="text-center">
                  <Users size={80} className="mx-auto mb-6" style={{ color: '#00ff41' }} />
                  <h2 className="text-4xl font-mono font-bold mb-4" style={{ color: '#00ff41', textShadow: '0 0 20px rgba(0,255,65,0.8)' }}>
                    SOCIAL
                  </h2>
                  <p className="text-lg font-mono mb-6" style={{ color: '#888' }}>
                    Connect with other agents
                  </p>
                  <button
                    onClick={() => windowManager.openWindow('contact')}
                    className="px-6 py-3 rounded border-2 font-mono font-bold uppercase"
                    style={{
                      borderColor: '#00ff41',
                      color: '#00ff41',
                      background: 'rgba(0, 255, 65, 0.1)',
                      boxShadow: '0 0 20px rgba(0, 255, 65, 0.5)',
                    }}
                  >
                    VIEW SOCIAL
                  </button>
                </div>
              </motion.div>
            )}

            {activeCategory === 'security-ops' && (
              <motion.div
                key="security-ops"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="w-full h-full flex items-center justify-center"
              >
                <div className="text-center">
                  <Lock size={80} className="mx-auto mb-6" style={{ color: '#ffff00' }} />
                  <h2 className="text-4xl font-mono font-bold mb-4" style={{ color: '#ffff00', textShadow: '0 0 20px rgba(255,255,0,0.8)' }}>
                    SECURITY OPS
                  </h2>
                  <p className="text-lg font-mono mb-6" style={{ color: '#888' }}>
                    Real-time threat monitoring
                  </p>
                  <button
                    onClick={() => windowManager.openWindow('osint')}
                    className="px-6 py-3 rounded border-2 font-mono font-bold uppercase"
                    style={{
                      borderColor: '#ffff00',
                      color: '#ffff00',
                      background: 'rgba(255, 255, 0, 0.1)',
                      boxShadow: '0 0 20px rgba(255, 255, 0, 0.5)',
                    }}
                  >
                    OPEN SECURITY OPS
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side Icons - Detailed */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          <motion.div 
            className="w-10 h-10 rounded border-2 flex items-center justify-center cursor-pointer"
            style={{
              borderColor: '#00d4ff',
              color: '#00d4ff',
              boxShadow: '0 0 15px rgba(0, 212, 255, 0.4)',
              background: 'rgba(0, 212, 255, 0.1)',
            }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 25px rgba(0, 212, 255, 0.6)' }}
            whileTap={{ scale: 0.9 }}
          >
            <Users size={24} />
          </motion.div>
          <motion.div 
            className="w-10 h-10 rounded border-2 flex items-center justify-center cursor-pointer"
            style={{
              borderColor: '#00d4ff',
              color: '#00d4ff',
              boxShadow: '0 0 15px rgba(0, 212, 255, 0.4)',
              background: 'rgba(0, 212, 255, 0.1)',
            }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 25px rgba(0, 212, 255, 0.6)' }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="flex flex-col gap-1">
              <div className="w-5 h-0.5 bg-current" />
              <div className="w-5 h-0.5 bg-current" />
              <div className="w-5 h-0.5 bg-current" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
