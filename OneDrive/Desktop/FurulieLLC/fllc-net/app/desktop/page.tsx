'use client';

import { CyberWorldInterface } from '@/components/cyberworld/CyberWorldInterface';
import { WindowManagerProvider } from '@/components/os/WindowManagerContext';
import { WindowManagerComponent } from '@/components/os/WindowManagerComponent';

export default function DesktopPage() {
  return (
    <WindowManagerProvider>
      <div className="fixed inset-0 bg-black overflow-hidden" style={{ zIndex: 0 }}>
        <CyberWorldInterface />
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 10000 }}>
          <WindowManagerComponent />
        </div>
      </div>
    </WindowManagerProvider>
  );
}
