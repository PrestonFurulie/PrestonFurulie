'use client';

import { BaseWindow } from './BaseWindow';
import { useRouter } from 'next/navigation';

export function ProjectsWindow(props: Omit<React.ComponentProps<typeof BaseWindow>, 'title' | 'children'> & { config?: any }) {
  const router = useRouter();

  const projects = [
    {
      id: 'cyberworld',
      name: 'CyberWorld MMO',
      description: 'Cybersecurity-themed multiplayer MMO',
      status: 'active',
      deployment: {
        url: '/cyberworld/play',
        platform: 'Internal',
      },
    },
  ];

  return (
    <BaseWindow {...props} title="Projects" width={900} height={700}>
      <div className="h-full flex flex-col bg-[#0a0a0a] font-mono p-6 overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-3xl text-[#00f3ff] font-bold font-mono mb-2" style={{ textShadow: '0 0 20px rgba(0,243,255,0.8)' }}>
            PROJECTS
          </h1>
          <p className="text-[#888] text-sm font-mono">Active projects and deployments</p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 bg-[rgba(0,243,255,0.05)] border border-[#00f3ff]/30 rounded hover:border-[#00f3ff]/60 transition-all cursor-pointer"
              onClick={() => router.push(project.deployment.url)}
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl text-[#00f3ff] font-bold font-mono">{project.name}</h2>
                <span className={`px-3 py-1 rounded text-xs font-mono ${
                  project.status === 'active' ? 'bg-[rgba(0,255,65,0.2)] text-[#00ff41]' : 'bg-[rgba(255,0,0,0.2)] text-[#ff0000]'
                }`}>
                  {project.status.toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-[#888] font-mono mb-3">{project.description}</p>
              <div className="flex items-center gap-2 text-xs text-[#888] font-mono">
                <span>Platform: {project.deployment.platform}</span>
                <span>•</span>
                <span className="text-[#00d4ff] hover:underline">View →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseWindow>
  );
}
