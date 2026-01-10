'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowManager } from '../os/WindowManagerContext';

interface BaseWindowProps {
  id: string;
  title: string;
  width: number;
  height: number;
  x?: number;
  y?: number;
  children: React.ReactNode;
  onClose?: () => void;
  resizable?: boolean;
  minimizable?: boolean;
  maximizable?: boolean;
}

export function BaseWindow({
  id,
  title,
  width,
  height,
  x: initialX,
  y: initialY,
  children,
  onClose,
  resizable = true,
  minimizable = true,
  maximizable = true,
}: BaseWindowProps) {
  const { updateWindowPosition, updateWindowSize, focusWindow, minimizeWindow, maximizeWindow, windows } = useWindowManager();
  const windowState = windows.find(w => w.id === id);
  
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [isMaximized, setIsMaximized] = useState(windowState?.maximized || false);
  const [isMinimized, setIsMinimized] = useState(windowState?.minimized || false);
  
  const windowRef = useRef<HTMLDivElement>(null);
  const prevSizeRef = useRef({ width, height, x: initialX || windowState?.x || 100, y: initialY || windowState?.y || 100 });

  const currentX = windowState?.x ?? initialX ?? prevSizeRef.current.x;
  const currentY = windowState?.y ?? initialY ?? prevSizeRef.current.y;
  const currentWidth = isMaximized ? (typeof window !== 'undefined' ? window.innerWidth : width) : (windowState?.width ?? width);
  const currentHeight = isMaximized ? (typeof window !== 'undefined' ? window.innerHeight - 60 : height) : (windowState?.height ?? height);

  useEffect(() => {
    if (windowState) {
      setIsMaximized(windowState.maximized);
      setIsMinimized(windowState.minimized);
    }
  }, [windowState]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target.closest('.window-titlebar')) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - currentX,
        y: e.clientY - currentY,
      });
      focusWindow(id);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !isMaximized) {
        const newX = e.clientX - dragStart.x;
        const newY = e.clientY - dragStart.y;
        updateWindowPosition(id, newX, newY);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragStart, isMaximized, id, updateWindowPosition]);

  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    prevSizeRef.current = { width: currentWidth, height: currentHeight, x: currentX, y: currentY };
    focusWindow(id);
  };

  useEffect(() => {
    const handleResizeMove = (e: MouseEvent) => {
      if (isResizing && !isMaximized) {
        const newWidth = Math.max(300, prevSizeRef.current.width + (e.clientX - prevSizeRef.current.x));
        const newHeight = Math.max(200, prevSizeRef.current.height + (e.clientY - prevSizeRef.current.y));
        updateWindowSize(id, newWidth, newHeight);
      }
    };

    if (isResizing) {
      window.addEventListener('mousemove', handleResizeMove);
      return () => window.removeEventListener('mousemove', handleResizeMove);
    }
  }, [isResizing, isMaximized, id, updateWindowSize]);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
    minimizeWindow(id);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
    maximizeWindow(id);
    if (!isMaximized) {
      prevSizeRef.current = { width: currentWidth, height: currentHeight, x: currentX, y: currentY };
    }
    maximizeWindow(id);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  if (isMinimized) {
    return null;
  }

  const zIndex = windowState?.zIndex ?? 1000;

  return (
    <AnimatePresence>
      <motion.div
        ref={windowRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed bg-[#1a1a1a] border-2 border-[#00f3ff]/40 rounded-lg shadow-2xl overflow-hidden"
        style={{
          left: isMaximized ? 0 : currentX,
          top: isMaximized ? 0 : currentY,
          width: currentWidth,
          height: currentHeight,
          zIndex,
        }}
        onMouseDown={() => focusWindow(id)}
      >
        {/* Title Bar */}
        <div
          className="window-titlebar bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] border-b border-[#00f3ff]/30 px-4 py-2 flex items-center justify-between cursor-move select-none"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#00ff41]"></div>
            <span className="text-sm font-mono text-[#00f3ff]">{title}</span>
          </div>
          <div className="flex items-center gap-2">
            {minimizable && (
              <button
                onClick={handleMinimize}
                className="w-6 h-6 rounded bg-[#00ff41]/20 hover:bg-[#00ff41]/40 border border-[#00ff41]/40 text-[#00ff41] text-xs font-mono transition-all"
              >
                _
              </button>
            )}
            {maximizable && (
              <button
                onClick={handleMaximize}
                className="w-6 h-6 rounded bg-[#00d4ff]/20 hover:bg-[#00d4ff]/40 border border-[#00d4ff]/40 text-[#00d4ff] text-xs font-mono transition-all"
              >
                □
              </button>
            )}
            <button
              onClick={handleClose}
              className="w-6 h-6 rounded bg-[#ff0000]/20 hover:bg-[#ff0000]/40 border border-[#ff0000]/40 text-[#ff0000] text-xs font-mono transition-all"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-auto" style={{ height: currentHeight - 40 }}>
          {children}
        </div>

        {/* Resize Handle */}
        {resizable && !isMaximized && (
          <div
            className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize bg-[#00f3ff]/20 hover:bg-[#00f3ff]/40"
            onMouseDown={handleResizeStart}
            style={{
              clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)',
            }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
