'use client';

import { useState, useEffect, useCallback } from 'react';

export type AppPhase = 'GATE' | 'BOOT' | 'DESKTOP' | 'APP_OPEN' | 'GAME';

export function useAppState() {
  const [phase, setPhase] = useState<AppPhase>('DESKTOP');
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    // Load state from localStorage
    const storedPhase = localStorage.getItem('appPhase') as AppPhase | null;
    const storedGameStarted = localStorage.getItem('gameStarted') === 'true';
    
    if (storedPhase) {
      setPhase(storedPhase);
    }
    if (storedGameStarted) {
      setGameStarted(storedGameStarted);
    }
  }, []);

  const startGame = useCallback(() => {
    setPhase('GAME');
    setGameStarted(true);
    localStorage.setItem('appPhase', 'GAME');
    localStorage.setItem('gameStarted', 'true');
  }, []);

  const exitGame = useCallback(() => {
    setPhase('DESKTOP');
    setGameStarted(false);
    localStorage.setItem('appPhase', 'DESKTOP');
    localStorage.setItem('gameStarted', 'false');
  }, []);

  return {
    phase,
    gameStarted,
    startGame,
    exitGame,
  };
}
