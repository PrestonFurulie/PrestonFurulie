'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppState } from '@/hooks/useAppState';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamically import Isometric MMO to avoid SSR issues
const IsometricMMOGame = dynamic(() => import('@/components/game/IsometricMMOGame'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[20001]">
      <div className="text-center">
        <div className="text-5xl text-[#00f3ff] mb-6 font-bold font-mono" style={{ textShadow: '0 0 30px rgba(0,243,255,0.8)' }}>
          💾 CYBERWORLD MMO
        </div>
        <div className="text-xl text-[#00ff41] mb-4 font-mono animate-pulse">Loading Game...</div>
      </div>
    </div>
  )
});

export default function CyberWorldPlayPage() {
  const router = useRouter();
  const { phase, startGame } = useAppState();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingSteps, setLoadingSteps] = useState([
    { text: 'Initializing game engine...', completed: false },
    { text: 'Loading assets and textures...', completed: false },
    { text: 'Connecting to multiplayer server...', completed: false },
    { text: 'Preparing detailed plaza environment...', completed: false },
    { text: 'Loading NPCs and quests...', completed: false },
    { text: 'Initializing combat system...', completed: false },
    { text: 'Starting game...', completed: false }
  ]);

  // Auto-start game if not already started
  useEffect(() => {
    if (phase !== 'GAME') {
      startGame();
    }
  }, [phase, startGame]);

  // Simulate comprehensive loading progress
  useEffect(() => {
    if (isLoading) {
      const stepInterval = setInterval(() => {
        setLoadingSteps((prev) => {
          const nextIndex = prev.findIndex((step) => !step.completed);
          if (nextIndex !== -1) {
            return prev.map((step, index) => 
              index === nextIndex ? { ...step, completed: true } : step
            );
          }
          return prev;
        });
      }, 800);

      const progressInterval = setInterval(() => {
        setLoadingProgress((prev) => {
          const newProgress = Math.min(prev + Math.random() * 8, 100);
          if (newProgress >= 100) {
            clearInterval(progressInterval);
            clearInterval(stepInterval);
            setTimeout(() => setIsLoading(false), 500);
            return 100;
          }
          return newProgress;
        });
      }, 150);

      return () => {
        clearInterval(progressInterval);
        clearInterval(stepInterval);
      };
    }
  }, [isLoading]);

  // Show comprehensive loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-[20001]">
        <div className="text-center max-w-2xl px-8">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="text-6xl text-[#00f3ff] mb-4 font-bold font-mono" style={{ textShadow: '0 0 40px rgba(0,243,255,0.8), 0 0 80px rgba(0,243,255,0.4)' }}>
              💾 CYBERWORLD MMO
            </div>
            <div className="text-2xl text-[#00ff41] mb-2 font-mono">Loading Game...</div>
            <div className="text-sm text-[#888] font-mono">Preparing your cyberpunk adventure</div>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full h-4 bg-[rgba(0,243,255,0.2)] rounded-full overflow-hidden mb-3 border-2 border-[#00f3ff]/40">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00f3ff] via-[#00ff41] to-[#ff00ff] rounded-full"
                style={{ boxShadow: '0 0 30px rgba(0,243,255,0.8), inset 0 0 20px rgba(255,255,255,0.3)' }}
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
            <div className="flex items-center justify-between text-sm font-mono">
              <span className="text-[#00f3ff]">{Math.round(loadingProgress)}%</span>
              <span className="text-[#888]">Initializing...</span>
            </div>
          </div>

          {/* Loading Steps */}
          <div className="space-y-3 mb-8">
            {loadingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: step.completed ? 1 : 0.5,
                  x: 0,
                  color: step.completed ? '#00ff41' : '#888'
                }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 text-left text-sm font-mono"
              >
                <motion.div
                  animate={{ rotate: step.completed ? 0 : 360 }}
                  transition={{ duration: 1, repeat: step.completed ? 0 : Infinity, ease: 'linear' }}
                  className="w-5 h-5 flex items-center justify-center"
                >
                  {step.completed ? (
                    <span className="text-[#00ff41] text-lg">✓</span>
                  ) : (
                    <div className="w-4 h-4 border-2 border-[#00f3ff] border-t-transparent rounded-full animate-spin" />
                  )}
                </motion.div>
                <span className={step.completed ? 'text-[#00ff41]' : 'text-[#888]'}>
                  {step.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 pt-8 border-t border-[#00f3ff]/30"
          >
            <div className="text-xs text-[#888] font-mono space-y-1">
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <div className="text-[#00f3ff] mb-2 font-bold">Game Features:</div>
                  <div className="text-[#aaa] space-y-1">
                    <div>• 20+ Detailed NPCs</div>
                    <div>• Massive Plaza Environment</div>
                    <div>• Real-time Multiplayer</div>
                    <div>• Turn-based Combat</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#00ff41] mb-2 font-bold">Visual Details:</div>
                  <div className="text-[#aaa] space-y-1">
                    <div>• 15+ Buildings with Neon Signs</div>
                    <div>• 120+ Ambient Particles</div>
                    <div>• Flying Data Drones</div>
                    <div>• Animated Central Fountain</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Exit Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <button
              onClick={() => router.push('/desktop')}
              className="px-6 py-3 bg-transparent border-2 border-[#ff0000] text-[#ff0000] font-mono text-sm hover:bg-[rgba(255,0,0,0.2)] transition-all rounded"
            >
              ESC - Exit to Desktop
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-[20000]">
      <IsometricMMOGame />
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => router.push('/desktop')}
        className="absolute top-4 right-4 px-4 py-2 bg-transparent border-2 border-[#ff0000] text-[#ff0000] font-mono hover:bg-[rgba(255,0,0,0.2)] z-50 rounded transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ESC - Exit Game
      </motion.button>
    </div>
  );
}
