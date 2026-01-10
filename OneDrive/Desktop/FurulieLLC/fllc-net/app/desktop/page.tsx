'use client';

import { CentralGlobeInterface } from '@/components/cyberworld/CentralGlobeInterface';
import { WindowManagerProvider } from '@/components/os/WindowManagerContext';
import { WindowManagerComponent } from '@/components/os/WindowManagerComponent';

export default function DesktopPage() {
  return (
    <WindowManagerProvider>
      <div className="fixed inset-0 bg-black overflow-hidden">
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <CentralGlobeInterface />
        </div>
        <div style={{ position: 'fixed', inset: 0, zIndex: 10000, pointerEvents: 'none' }}>
          <WindowManagerComponent />
        </div>
      </div>
    </WindowManagerProvider>
  );
}
