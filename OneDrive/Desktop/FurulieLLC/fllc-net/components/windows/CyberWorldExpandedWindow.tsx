'use client';

import { BaseWindow } from './BaseWindow';

export function CyberWorldExpandedWindow(props: Omit<React.ComponentProps<typeof BaseWindow>, 'title' | 'children'>) {
  return (
    <BaseWindow {...props} title="CyberWorld Dashboard" width={1200} height={800}>
      <div className="h-full flex flex-col bg-[#0a0a0a] font-mono p-6 overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-3xl text-[#00f3ff] font-bold font-mono mb-2" style={{ textShadow: '0 0 20px rgba(0,243,255,0.8)' }}>
            💾 CYBERWORLD MMO DASHBOARD
          </h1>
          <p className="text-[#888] text-sm font-mono">Comprehensive game statistics and management</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-[rgba(0,255,65,0.1)] border border-[#00ff41]/30 rounded">
            <div className="text-2xl text-[#00ff41] font-bold">12</div>
            <div className="text-xs text-[#888]">Level</div>
          </div>
          <div className="p-4 bg-[rgba(0,212,255,0.1)] border border-[#00d4ff]/30 rounded">
            <div className="text-2xl text-[#00d4ff] font-bold">1,250</div>
            <div className="text-xs text-[#888]">Bits</div>
          </div>
          <div className="p-4 bg-[rgba(255,0,255,0.1)] border border-[#ff00ff]/30 rounded">
            <div className="text-2xl text-[#ff00ff] font-bold">45</div>
            <div className="text-xs text-[#888]">Credits</div>
          </div>
          <div className="p-4 bg-[rgba(255,170,0,0.1)] border border-[#ffaa00]/30 rounded">
            <div className="text-2xl text-[#ffaa00] font-bold">28</div>
            <div className="text-xs text-[#888]">Quests</div>
          </div>
        </div>

        {/* Combat Stats */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="p-6 bg-[rgba(0,243,255,0.05)] border border-[#00f3ff]/30 rounded">
            <h2 className="text-xl text-[#00f3ff] font-bold font-mono mb-4">Combat Statistics</h2>
            <div className="space-y-2 text-sm font-mono text-[#888]">
              <div className="flex justify-between">
                <span>Wins:</span>
                <span className="text-[#00ff41]">47</span>
              </div>
              <div className="flex justify-between">
                <span>Losses:</span>
                <span className="text-[#ff0000]">12</span>
              </div>
              <div className="flex justify-between">
                <span>Win Rate:</span>
                <span className="text-[#00d4ff]">79.7%</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-[rgba(0,255,65,0.05)] border border-[#00ff41]/30 rounded">
            <h2 className="text-xl text-[#00ff41] font-bold font-mono mb-4">Achievements</h2>
            <div className="space-y-2 text-sm font-mono text-[#888]">
              <div className="p-2 bg-[rgba(0,255,65,0.1)] border border-[#00ff41]/30 rounded">
                <div className="text-[#00ff41] font-bold">First Steps</div>
                <div className="text-xs">Complete your first quest</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseWindow>
  );
}
