'use client';

import React from 'react';
import { useWindowManager } from './WindowManagerContext';
import { BaseWindow } from '../windows/BaseWindow';
import { CyberWorldWindow } from '../windows/CyberWorldWindow';
import { CyberWorldExpandedWindow } from '../windows/CyberWorldExpandedWindow';
import { ProjectsWindow } from '../windows/ProjectsWindow';

export function WindowManagerComponent() {
  const { windows } = useWindowManager();

  return (
    <>
      {windows.map((window) => {
        switch (window.type) {
          case 'cyberworld':
            return <CyberWorldWindow key={window.id} id={window.id} />;
          case 'cyberworld-expanded':
            return <CyberWorldExpandedWindow key={window.id} id={window.id} />;
          case 'projects':
            return <ProjectsWindow key={window.id} id={window.id} />;
          default:
            return (
              <BaseWindow key={window.id} id={window.id}>
                <div className="p-8 text-center">
                  <h2 className="text-2xl font-mono font-bold mb-4" style={{ color: '#00ffff' }}>
                    {window.title}
                  </h2>
                  <p className="text-sm font-mono" style={{ color: '#888' }}>
                    Window type: {window.type}
                  </p>
                </div>
              </BaseWindow>
            );
        }
      })}
    </>
  );
}
