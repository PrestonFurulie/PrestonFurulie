'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, BarChart3, Wrench, Network, Package, Folder, 
  TrendingUp, Terminal, ShoppingCart, Globe2, Rocket, Bug, 
  FileText, Target, Mail, Users, Lock, Zap, Activity
} from 'lucide-react';
import { useWindowManager } from '../os/WindowManagerContext';
import { useRouter } from 'next/navigation';

/**
 * Central Globe Interface - Matches concept image exactly
 * Features: Central glowing globe, side button columns, top/bottom data bars, binary rain
 */
export function CentralGlobeInterface() {
  const windowManager = useWindowManager();
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const binaryRainRef = useRef<HTMLDivElement>(null);
  const [metrics, setMetrics] = useState({
    dataPacket: '1010010001',
    bandwidth: '20.02',
    latency: '086ms',
    serverId: 'COLOMBIA',
    uptime: '99.98%',
    score: '17.2M',
    threats: '89',
  });

  // Left Column Buttons
  const leftButtons = [
    { id: 'settings', label: 'SETTINGS', icon: Settings, color: '#ff00ff' },
    { id: 'analytics', label: 'ANALYTICS', icon: BarChart3, color: '#ff00ff' },
    { id: 'tools', label: 'TOOLS', icon: Wrench, color: '#00ffff' },
    { id: 'network', label: 'NETWORK', icon: Network, color: '#ff00ff' },
    { id: 'payloads', label: 'PAYLOADS', icon: Package, color: '#ffff00' },
  ];

  // Middle Column Buttons
  const middleButtons = [
    { id: 'dossier', label: 'DOSSIER', icon: Folder, color: '#ffff00' },
    { id: 'intel', label: 'INTEL', icon: TrendingUp, color: '#00ff41' },
    { id: 'terminal', label: 'TERMINAL', icon: Terminal, color: '#00ffff' },
    { id: 'shop', label: 'SHOP', icon: ShoppingCart, color: '#ff00ff' },
    { id: 'cyberworld', label: 'CYBERWORLD', icon: Globe2, color: '#ff00ff' },
  ];

  // Right Column Buttons
  const rightButtons = [
    { id: 'cyberworld-2', label: 'CYBERWORLD', icon: Globe2, color: '#00ffff' },
    { id: 'settings-2', label: 'SETTINGS', icon: Settings, color: '#00ff41' },
    { id: 'projects', label: 'PROJECTS', icon: Rocket, color: '#ff0000' },
    { id: 'exploits', label: 'EXPLOITS', icon: Bug, color: '#00ff41' },
    { id: 'resume', label: 'RESUME', icon: FileText, color: '#00ffff' },
    { id: 'targets', label: 'TARGETS', icon: Target, color: '#ff0000' },
    { id: 'contact', label: 'CONTACT', icon: Mail, color: '#00ffff' },
    { id: 'social', label: 'SOCIAL', icon: Users, color: '#ff00ff' },
    { id: 'security-ops', label: 'SECURITY OPS', icon: Lock, color: '#ffff00' },
  ];

  // Bottom Tool Bar
  const bottomTools = [
    { name: 'Nmap', value: '45%', icon: Network },
    { name: 'Wireshark', value: '67%', icon: Activity },
    { name: 'Metasploit', value: '23%', icon: Zap },
    { name: 'Analytics', value: '89%', icon: BarChart3 },
    { name: 'Settings', value: '100%', icon: Settings },
  ];

  // Generate binary code string
  const generateBinary = (length: number) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 2)).join('');
  };

  // Animate metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        dataPacket: generateBinary(10),
        bandwidth: (Math.random() * 30 + 10).toFixed(2),
        latency: `${Math.floor(Math.random() * 100 + 50)}ms`,
        score: `${(Math.random() * 5 + 15).toFixed(1)}M`,
        threats: `${Math.floor(Math.random() * 50 + 70)}`,
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Render 3D Globe
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.35;
    let rotation = 0;
    let animationId: number;

    const drawGlobe = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Outer glow ring
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 1.5);
      gradient.addColorStop(0, 'rgba(0, 212, 255, 0.4)');
      gradient.addColorStop(0.5, 'rgba(138, 43, 226, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Globe wireframe
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.8)';
      ctx.lineWidth = 2;
      
      // Latitude lines
      for (let lat = -90; lat <= 90; lat += 30) {
        ctx.beginPath();
        const y = centerY + (lat / 90) * radius;
        const r = Math.sqrt(Math.max(0, radius * radius - (y - centerY) ** 2));
        if (r > 0) {
          ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
      
      // Longitude lines
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.6)';
      for (let lon = 0; lon < 360; lon += 30) {
        const rad = (lon + rotation) * Math.PI / 180;
        ctx.beginPath();
        let first = true;
        for (let lat = -90; lat <= 90; lat += 5) {
          const latRad = lat * Math.PI / 180;
          const x = centerX + Math.cos(rad) * Math.cos(latRad) * radius;
          const y = centerY + Math.sin(latRad) * radius;
          if (first) {
            ctx.moveTo(x, y);
            first = false;
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Data connection points
      ctx.fillStyle = 'rgba(0, 255, 65, 0.8)';
      ctx.strokeStyle = 'rgba(0, 255, 65, 0.3)';
      ctx.lineWidth = 1;
      const connectionPoints = [
        { lon: -75, lat: 4 }, // Colombia
        { lon: -74, lat: 4.5 },
        { lon: -73, lat: 5 },
        { lon: -72, lat: 4 },
      ];
      
      connectionPoints.forEach(point => {
        const rad = (point.lon + rotation) * Math.PI / 180;
        const latRad = point.lat * Math.PI / 180;
        const x = centerX + Math.cos(rad) * Math.cos(latRad) * radius;
        const y = centerY + Math.sin(latRad) * radius;
        
        // Connection lines to outer ring
        ctx.beginPath();
        ctx.moveTo(x, y);
        const outerX = centerX + Math.cos(rad) * radius * 1.3;
        const outerY = centerY + Math.sin(latRad) * radius * 1.3;
        ctx.lineTo(outerX, outerY);
        ctx.stroke();
        
        // Connection point
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      rotation += 0.5;
      animationId = requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Binary rain effect
  useEffect(() => {
    if (!binaryRainRef.current) return;

    const generateBinaryRain = () => {
      const container = binaryRainRef.current;
      if (!container) return;

      container.innerHTML = '';
      
      for (let i = 0; i < 100; i++) {
        const col = document.createElement('div');
        col.className = 'absolute font-mono text-xs';
        col.style.cssText = `
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          color: rgba(0, 255, 65, ${0.3 + Math.random() * 0.4});
          animation: binaryFall ${3 + Math.random() * 2}s linear infinite;
          animation-delay: ${Math.random() * 2}s;
        `;
        col.textContent = Array.from({ length: 20 }, () => Math.floor(Math.random() * 2)).join('');
        container.appendChild(col);
      }
    };

    generateBinaryRain();
    const interval = setInterval(generateBinaryRain, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (id: string) => {
    try {
      switch(id) {
        case 'cyberworld':
        case 'cyberworld-2':
          windowManager.openWindow('cyberworld');
          break;
        case 'shop':
          windowManager.openWindow('shop');
          break;
        case 'projects':
          windowManager.openWindow('projects');
          break;
        case 'settings':
        case 'settings-2':
          windowManager.openWindow('settings');
          break;
        case 'resume':
          windowManager.openWindow('resume');
          break;
        case 'security-ops':
          windowManager.openWindow('securityops');
          break;
        default:
          windowManager.openWindow('cyberworld');
      }
    } catch (err) {
      console.error('Failed to open window:', err);
    }
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black overflow-hidden">
      {/* Binary Rain Background */}
      <div 
        ref={binaryRainRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Top Data Bar */}
      <div 
        className="absolute top-0 left-0 right-0 h-16 border-b-2 z-10 overflow-hidden"
        style={{
          background: 'rgba(0, 0, 0, 0.8)',
          borderColor: 'rgba(0, 255, 65, 0.4)',
          boxShadow: '0 4px 20px rgba(0, 255, 65, 0.3)',
        }}
      >
        {/* Scrolling Binary Code */}
        <motion.div
          className="absolute inset-0 font-mono text-xs whitespace-nowrap flex items-center"
          style={{ color: 'rgba(0, 255, 65, 0.6)' }}
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          {Array.from({ length: 5 }, () => generateBinary(50)).join(' ')}
        </motion.div>

        {/* Metrics */}
        <div className="absolute inset-0 flex items-center justify-between px-8 z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono" style={{ color: '#888' }}>DATA PACKET:</span>
              <span className="text-sm font-mono font-bold" style={{ color: '#00ff41' }}>{metrics.dataPacket}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono" style={{ color: '#888' }}>BANDWIDTH:</span>
              <span className="text-sm font-mono font-bold" style={{ color: '#00ffff' }}>{metrics.bandwidth} GB/s</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono" style={{ color: '#888' }}>LATENCY:</span>
              <span className="text-sm font-mono font-bold" style={{ color: '#00ff41' }}>{metrics.latency}</span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono" style={{ color: '#888' }}>SERVER ID:</span>
              <span className="text-sm font-mono font-bold" style={{ color: '#ffff00' }}>{metrics.serverId}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono" style={{ color: '#888' }}>UPTIME:</span>
              <span className="text-sm font-mono font-bold" style={{ color: '#00ff41' }}>{metrics.uptime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono" style={{ color: '#888' }}>SCORE:</span>
              <span className="text-sm font-mono font-bold" style={{ color: '#00ffff' }}>{metrics.score}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono" style={{ color: '#888' }}>THREATS:</span>
              <span className="text-sm font-mono font-bold" style={{ color: '#ff0000' }}>{metrics.threats}</span>
            </div>
          </div>
        </div>

        {/* Animated Waveforms */}
        <div className="absolute bottom-0 left-0 right-0 h-4 flex items-end gap-1 px-8">
          {Array.from({ length: 200 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-[#00ff41]"
              animate={{
                height: [`${Math.random() * 20 + 5}px`, `${Math.random() * 30 + 10}px`, `${Math.random() * 20 + 5}px`],
              }}
              transition={{
                duration: 0.5 + Math.random() * 0.5,
                repeat: Infinity,
                delay: Math.random() * 0.5,
              }}
              style={{ opacity: 0.6 + Math.random() * 0.4 }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Data Bar */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-20 border-t-2 z-10 overflow-hidden"
        style={{
          background: 'rgba(0, 0, 0, 0.8)',
          borderColor: 'rgba(0, 255, 65, 0.4)',
          boxShadow: '0 -4px 20px rgba(0, 255, 65, 0.3)',
        }}
      >
        {/* Scrolling Binary Code */}
        <motion.div
          className="absolute inset-0 font-mono text-xs whitespace-nowrap flex items-center"
          style={{ color: 'rgba(0, 255, 65, 0.6)' }}
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        >
          {Array.from({ length: 5 }, () => generateBinary(50)).join(' ')}
        </motion.div>

        {/* Tool Cards */}
        <div className="absolute inset-0 flex items-center justify-around px-8 z-10">
          {bottomTools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center gap-2 p-3 rounded border-2 cursor-pointer"
                style={{
                  borderColor: '#00ffff',
                  background: 'rgba(0, 255, 255, 0.1)',
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)',
                }}
                whileHover={{ scale: 1.1, boxShadow: '0 0 25px rgba(0, 255, 255, 0.6)' }}
                onClick={() => handleButtonClick(tool.name.toLowerCase())}
              >
                <Icon size={24} style={{ color: '#00ffff' }} />
                <span className="text-xs font-mono font-bold uppercase" style={{ color: '#00ffff' }}>
                  {tool.name}
                </span>
                <div className="w-full h-1 bg-black/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: '#00ffff' }}
                    initial={{ width: 0 }}
                    animate={{ width: tool.value }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                  />
                </div>
                <span className="text-xs font-mono" style={{ color: '#888' }}>{tool.value}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Left Column Buttons */}
      <div className="absolute left-8 top-24 bottom-24 flex flex-col gap-3 z-20">
        {leftButtons.map((btn, idx) => {
          const Icon = btn.icon;
          return (
            <motion.button
              key={btn.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => handleButtonClick(btn.id)}
              className="w-48 px-4 py-3 rounded border-2 backdrop-blur-sm flex items-center gap-3 font-mono font-bold uppercase text-sm cursor-pointer"
              style={{
                borderColor: btn.color,
                background: `rgba(${btn.color === '#ff00ff' ? '255,0,255' : btn.color === '#00ffff' ? '0,255,255' : '255,255,0'}, 0.1)`,
                color: btn.color,
                boxShadow: `0 0 20px ${btn.color}50`,
              }}
              whileHover={{ scale: 1.05, x: 5, boxShadow: `0 0 30px ${btn.color}80` }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} style={{ color: btn.color }} />
              <span>{btn.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Middle Column Buttons */}
      <div className="absolute left-64 top-24 bottom-24 flex flex-col gap-3 z-20">
        {middleButtons.map((btn, idx) => {
          const Icon = btn.icon;
          return (
            <motion.button
              key={btn.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 + 0.5 }}
              onClick={() => handleButtonClick(btn.id)}
              className="w-48 px-4 py-3 rounded border-2 backdrop-blur-sm flex items-center gap-3 font-mono font-bold uppercase text-sm cursor-pointer"
              style={{
                borderColor: btn.color,
                background: `rgba(${btn.color === '#ffff00' ? '255,255,0' : btn.color === '#00ff41' ? '0,255,65' : btn.color === '#00ffff' ? '0,255,255' : '255,0,255'}, 0.1)`,
                color: btn.color,
                boxShadow: `0 0 20px ${btn.color}50`,
              }}
              whileHover={{ scale: 1.05, x: 5, boxShadow: `0 0 30px ${btn.color}80` }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} style={{ color: btn.color }} />
              <span>{btn.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Central Globe */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="relative">
          {/* Outer Glow Ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              width: '750px',
              height: '750px',
              border: '3px solid rgba(0, 212, 255, 0.6)',
              boxShadow: '0 0 60px rgba(0, 212, 255, 0.8), inset 0 0 40px rgba(138, 43, 226, 0.4)',
            }}
            animate={{
              boxShadow: [
                '0 0 60px rgba(0, 212, 255, 0.8), inset 0 0 40px rgba(138, 43, 226, 0.4)',
                '0 0 80px rgba(0, 212, 255, 1), inset 0 0 50px rgba(138, 43, 226, 0.6)',
                '0 0 60px rgba(0, 212, 255, 0.8), inset 0 0 40px rgba(138, 43, 226, 0.4)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Globe Canvas */}
          <canvas
            ref={canvasRef}
            width={700}
            height={700}
            className="relative z-10"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(0, 212, 255, 0.8))',
            }}
          />

          {/* Light Rays - SVG overlay */}
          <svg 
            className="absolute inset-0 pointer-events-none"
            style={{ width: '700px', height: '700px', zIndex: 5 }}
          >
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 45) * Math.PI / 180;
              const length = 400;
              const x1 = 350;
              const y1 = 350;
              const x2 = 350 + Math.cos(angle) * length;
              const y2 = 350 + Math.sin(angle) * length;
              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(0, 212, 255, 0.3)"
                  strokeWidth="2"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.25,
                  }}
                />
              );
            })}
          </svg>
        </div>
      </div>

      {/* Right Column Buttons */}
      <div className="absolute right-8 top-24 bottom-24 flex flex-col gap-3 z-20">
        {rightButtons.map((btn, idx) => {
          const Icon = btn.icon;
          return (
            <motion.button
              key={btn.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 + 1 }}
              onClick={() => handleButtonClick(btn.id)}
              className="w-48 px-4 py-3 rounded border-2 backdrop-blur-sm flex items-center gap-3 font-mono font-bold uppercase text-sm cursor-pointer"
              style={{
                borderColor: btn.color,
                background: `rgba(${btn.color === '#00ffff' ? '0,255,255' : btn.color === '#00ff41' ? '0,255,65' : btn.color === '#ff0000' ? '255,0,0' : btn.color === '#ff00ff' ? '255,0,255' : '255,255,0'}, 0.1)`,
                color: btn.color,
                boxShadow: `0 0 20px ${btn.color}50`,
              }}
              whileHover={{ scale: 1.05, x: -5, boxShadow: `0 0 30px ${btn.color}80` }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} style={{ color: btn.color }} />
              <span>{btn.label}</span>
            </motion.button>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes binaryFall {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
