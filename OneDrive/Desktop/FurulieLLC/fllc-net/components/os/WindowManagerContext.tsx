'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

export type WindowId = string;
export type WindowType = 'cyberworld' | 'projects' | 'settings' | 'about' | 'cyberworld-expanded' | 'osint' | 'securityops' | 'network-targets' | 'tool-foundry' | 'shop' | 'resume' | 'products' | 'subscriptions' | 'play' | 'dashboard' | 'rooms' | 'quests' | 'friends' | 'chat' | 'groups' | 'osint-hub' | 'threat-monitor' | 'network-scan' | 'vulnerability' | 'contact';

export interface Window {
  id: WindowId;
  type: WindowType;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  minimized: boolean;
  maximized: boolean;
  zIndex: number;
  config?: any;
}

interface WindowManagerContextType {
  windows: Window[];
  openWindow: (type: WindowType, config?: any) => WindowId;
  closeWindow: (id: WindowId) => void;
  minimizeWindow: (id: WindowId) => void;
  maximizeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  updateWindowPosition: (id: WindowId, x: number, y: number) => void;
  updateWindowSize: (id: WindowId, width: number, height: number) => void;
  getTopZIndex: () => number;
}

const WindowManagerContext = createContext<WindowManagerContextType | undefined>(undefined);

export function WindowManagerProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<Window[]>([]);
  const [zIndexCounter, setZIndexCounter] = useState(1000);

  const getTopZIndex = useCallback(() => {
    return zIndexCounter + 1;
  }, [zIndexCounter]);

  const openWindow = useCallback((type: WindowType, config?: any): WindowId => {
    const id = `window-${Date.now()}-${Math.random()}`;
    const titles: Record<WindowType, string> = {
      'cyberworld': 'CyberWorld Launcher',
      'projects': 'Projects',
      'settings': 'Settings',
      'about': 'About',
      'cyberworld-expanded': 'CyberWorld Dashboard',
      'osint': 'OSINT Hub',
      'securityops': 'Security Ops',
      'network-targets': 'Network Targets',
      'tool-foundry': 'Tool Foundry',
      'shop': 'Shop',
      'resume': 'Resume',
      'products': 'Products',
      'subscriptions': 'Subscriptions',
      'play': 'Play',
      'dashboard': 'Dashboard',
      'rooms': 'Rooms',
      'quests': 'Quests',
      'friends': 'Friends',
      'chat': 'Chat',
      'groups': 'Groups',
      'osint-hub': 'OSINT Hub',
      'threat-monitor': 'Threat Monitor',
      'network-scan': 'Network Scan',
      'vulnerability': 'Vulnerability',
      'contact': 'Contact',
    };

    const newWindow: Window = {
      id,
      type,
      title: titles[type],
      x: 100 + windows.length * 30,
      y: 100 + windows.length * 30,
      width: type === 'cyberworld-expanded' ? 1200 : 900,
      height: type === 'cyberworld-expanded' ? 800 : 700,
      minimized: false,
      maximized: false,
      zIndex: getTopZIndex(),
      config,
    };

    setWindows(prev => [...prev, newWindow]);
    setZIndexCounter(prev => prev + 1);
    return id;
  }, [windows.length, getTopZIndex]);

  const closeWindow = useCallback((id: WindowId) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  }, []);

  const minimizeWindow = useCallback((id: WindowId) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, minimized: !w.minimized } : w));
  }, []);

  const maximizeWindow = useCallback((id: WindowId) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, maximized: !w.maximized } : w));
  }, []);

  const focusWindow = useCallback((id: WindowId) => {
    const topZ = getTopZIndex();
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: topZ } : w));
    setZIndexCounter(prev => prev + 1);
  }, [getTopZIndex]);

  const updateWindowPosition = useCallback((id: WindowId, x: number, y: number) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, x, y } : w));
  }, []);

  const updateWindowSize = useCallback((id: WindowId, width: number, height: number) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, width, height } : w));
  }, []);

  return (
    <WindowManagerContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        focusWindow,
        updateWindowPosition,
        updateWindowSize,
        getTopZIndex,
      }}
    >
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindowManager() {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error('useWindowManager must be used within WindowManagerProvider');
  }
  return context;
}
