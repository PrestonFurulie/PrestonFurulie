'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Volume2, Music, Zap, Monitor, Mouse, Keyboard, User, Shield, Save, RotateCcw, VolumeX, Eye, Settings as SettingsIcon } from 'lucide-react';

export default function CyberWorldSettingsPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('audio');
  const [settings, setSettings] = useState({
    audio: {
      master: 80,
      music: 70,
      sfx: 90,
      ambient: 75,
      muteOnFocus: false,
      muteOnMinimize: false,
    },
    graphics: {
      quality: 'ultra',
      fpsLimit: 60,
      shadows: true,
      particles: true,
      antiAliasing: true,
      bloom: true,
      reflections: true,
      depthOfField: false,
    },
    controls: {
      movementSpeed: 5,
      cameraSensitivity: 3,
      autoAttack: false,
      quickCast: true,
      keyBindings: {
        moveUp: 'W',
        moveDown: 'S',
        moveLeft: 'A',
        moveRight: 'D',
        interact: 'E',
        inventory: 'I',
        chat: 'Enter',
        quests: 'Q',
      },
    },
    account: {
      username: 'CyberAgent',
      email: 'agent@cyberworld.net',
      autoLogin: true,
      rememberPassword: false,
      twoFactorAuth: false,
    },
    privacy: {
      showOnlineStatus: true,
      allowFriendRequests: true,
      allowPrivateMessages: true,
      showLocation: false,
      dataCollection: false,
    },
  });

  const handleSettingChange = (category: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [key]: value,
      },
    }));
  };

  const categories = [
    { id: 'audio', label: 'Audio', icon: Volume2, color: '#00d4ff' },
    { id: 'graphics', label: 'Graphics', icon: Monitor, color: '#00ff41' },
    { id: 'controls', label: 'Controls', icon: Keyboard, color: '#ff00ff' },
    { id: 'account', label: 'Account', icon: User, color: '#ffaa00' },
    { id: 'privacy', label: 'Privacy', icon: Shield, color: '#ffff00' },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl text-[#00f3ff] font-bold font-mono mb-2" style={{ textShadow: '0 0 30px rgba(0,243,255,0.8)' }}>
            ⚙️ CYBERWORLD SETTINGS
          </h1>
          <p className="text-[#888] font-mono">Comprehensive game configuration and preferences</p>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {/* Sidebar */}
          <div className="col-span-1">
            <div className="space-y-2">
              {categories.map((cat) => {
                const CatIcon = cat.icon;
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full px-4 py-3 text-left font-mono text-sm border rounded transition-all flex items-center gap-2 ${
                      activeCategory === cat.id
                        ? `bg-[rgba(${cat.color.replace('#', '')},0.2)] border-[${cat.color}] text-[${cat.color}]`
                        : 'bg-[rgba(255,255,255,0.05)] border-[#444] text-[#888] hover:border-[#666]'
                    }`}
                  >
                    <CatIcon className="w-4 h-4" />
                    {cat.label}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="col-span-4 p-6 bg-[rgba(0,243,255,0.05)] border border-[#00f3ff]/30 rounded-lg">
            {activeCategory === 'audio' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl text-[#00d4ff] font-bold font-mono mb-6 flex items-center gap-2">
                  <Volume2 className="w-6 h-6" /> Audio Settings
                </h2>
                <div className="space-y-6 text-sm font-mono">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-[#888] flex items-center gap-2">
                        <Volume2 className="w-4 h-4" /> Master Volume
                      </label>
                      <span className="text-[#00d4ff] font-bold">{settings.audio.master}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={settings.audio.master}
                      onChange={(e) => handleSettingChange('audio', 'master', parseInt(e.target.value))}
                      className="w-full h-2 bg-[rgba(0,212,255,0.2)] rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-[#888] flex items-center gap-2">
                        <Music className="w-4 h-4" /> Music Volume
                      </label>
                      <span className="text-[#00ff41] font-bold">{settings.audio.music}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={settings.audio.music}
                      onChange={(e) => handleSettingChange('audio', 'music', parseInt(e.target.value))}
                      className="w-full h-2 bg-[rgba(0,255,65,0.2)] rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-[#888] flex items-center gap-2">
                        <Zap className="w-4 h-4" /> SFX Volume
                      </label>
                      <span className="text-[#ff00ff] font-bold">{settings.audio.sfx}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={settings.audio.sfx}
                      onChange={(e) => handleSettingChange('audio', 'sfx', parseInt(e.target.value))}
                      className="w-full h-2 bg-[rgba(255,0,255,0.2)] rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-[#888]">Ambient Volume</label>
                      <span className="text-[#ffaa00] font-bold">{settings.audio.ambient}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={settings.audio.ambient}
                      onChange={(e) => handleSettingChange('audio', 'ambient', parseInt(e.target.value))}
                      className="w-full h-2 bg-[rgba(255,170,0,0.2)] rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div className="pt-4 border-t border-[#444] space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.audio.muteOnFocus}
                        onChange={(e) => handleSettingChange('audio', 'muteOnFocus', e.target.checked)}
                        className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]"
                      />
                      <span className="text-[#888]">Mute when window loses focus</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.audio.muteOnMinimize}
                        onChange={(e) => handleSettingChange('audio', 'muteOnMinimize', e.target.checked)}
                        className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]"
                      />
                      <span className="text-[#888]">Mute when minimized</span>
                    </label>
                  </div>
                  <div className="pt-4 border-t border-[#444]">
                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-[rgba(0,212,255,0.2)] border border-[#00d4ff] text-[#00d4ff] font-mono hover:bg-[rgba(0,212,255,0.3)] rounded transition-all">
                        Test Sound
                      </button>
                      <button className="px-4 py-2 bg-[rgba(136,136,136,0.2)] border border-[#888] text-[#888] font-mono hover:bg-[rgba(136,136,136,0.3)] rounded transition-all flex items-center gap-2">
                        <VolumeX className="w-4 h-4" /> Mute All
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeCategory === 'graphics' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl text-[#00ff41] font-bold font-mono mb-6 flex items-center gap-2">
                  <Monitor className="w-6 h-6" /> Graphics Settings
                </h2>
                <div className="space-y-6 text-sm font-mono">
                  <div>
                    <label className="block text-[#888] mb-2">Quality Preset</label>
                    <select
                      value={settings.graphics.quality}
                      onChange={(e) => handleSettingChange('graphics', 'quality', e.target.value)}
                      className="w-full bg-[rgba(0,0,0,0.5)] border border-[#444] rounded px-4 py-2 text-white focus:border-[#00ff41] focus:outline-none"
                    >
                      <option value="ultra">Ultra</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                    <p className="text-xs text-[#666] mt-1">Recommended: High for most systems</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-[#888]">FPS Limit</label>
                      <span className="text-[#00ff41] font-bold">{settings.graphics.fpsLimit}</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="144"
                      step="30"
                      value={settings.graphics.fpsLimit}
                      onChange={(e) => handleSettingChange('graphics', 'fpsLimit', parseInt(e.target.value))}
                      className="w-full h-2 bg-[rgba(0,255,65,0.2)] rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-[#666] mt-1">
                      <span>30</span>
                      <span>60</span>
                      <span>90</span>
                      <span>120</span>
                      <span>144</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[#444] space-y-4">
                    <label className="flex items-center justify-between cursor-pointer group">
                      <div>
                        <div className="text-[#888] font-bold">Shadows</div>
                        <div className="text-xs text-[#666]">Enable dynamic shadow rendering</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.graphics.shadows}
                        onChange={(e) => handleSettingChange('graphics', 'shadows', e.target.checked)}
                        className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#00ff41] focus:ring-2 focus:ring-[#00ff41]"
                      />
                    </label>
                    <label className="flex items-center justify-between cursor-pointer group">
                      <div>
                        <div className="text-[#888] font-bold">Particles</div>
                        <div className="text-xs text-[#666]">Enable particle effects and data streams</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.graphics.particles}
                        onChange={(e) => handleSettingChange('graphics', 'particles', e.target.checked)}
                        className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#00ff41] focus:ring-2 focus:ring-[#00ff41]"
                      />
                    </label>
                    <label className="flex items-center justify-between cursor-pointer group">
                      <div>
                        <div className="text-[#888] font-bold">Anti-Aliasing</div>
                        <div className="text-xs text-[#666]">Smooth out jagged edges (MSAA 4x)</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.graphics.antiAliasing}
                        onChange={(e) => handleSettingChange('graphics', 'antiAliasing', e.target.checked)}
                        className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#00ff41] focus:ring-2 focus:ring-[#00ff41]"
                      />
                    </label>
                    <label className="flex items-center justify-between cursor-pointer group">
                      <div>
                        <div className="text-[#888] font-bold">Bloom</div>
                        <div className="text-xs text-[#666]">Add glow effects to bright objects</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.graphics.bloom}
                        onChange={(e) => handleSettingChange('graphics', 'bloom', e.target.checked)}
                        className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#00ff41] focus:ring-2 focus:ring-[#00ff41]"
                      />
                    </label>
                    <label className="flex items-center justify-between cursor-pointer group">
                      <div>
                        <div className="text-[#888] font-bold">Reflections</div>
                        <div className="text-xs text-[#666]">Enable screen space reflections</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.graphics.reflections}
                        onChange={(e) => handleSettingChange('graphics', 'reflections', e.target.checked)}
                        className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#00ff41] focus:ring-2 focus:ring-[#00ff41]"
                      />
                    </label>
                    <label className="flex items-center justify-between cursor-pointer group">
                      <div>
                        <div className="text-[#888] font-bold">Depth of Field</div>
                        <div className="text-xs text-[#666]">Blur distant objects (Performance impact)</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.graphics.depthOfField}
                        onChange={(e) => handleSettingChange('graphics', 'depthOfField', e.target.checked)}
                        className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#00ff41] focus:ring-2 focus:ring-[#00ff41]"
                      />
                    </label>
                  </div>
                </div>
              </motion.div>
            )}

            {activeCategory === 'controls' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl text-[#ff00ff] font-bold font-mono mb-6 flex items-center gap-2">
                  <Keyboard className="w-6 h-6" /> Controls
                </h2>
                <div className="space-y-6 text-sm font-mono">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-[#888]">Movement Speed</label>
                      <span className="text-[#ff00ff] font-bold">{settings.controls.movementSpeed}/10</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={settings.controls.movementSpeed}
                      onChange={(e) => handleSettingChange('controls', 'movementSpeed', parseInt(e.target.value))}
                      className="w-full h-2 bg-[rgba(255,0,255,0.2)] rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-[#888]">Camera Sensitivity</label>
                      <span className="text-[#ff00ff] font-bold">{settings.controls.cameraSensitivity}/10</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={settings.controls.cameraSensitivity}
                      onChange={(e) => handleSettingChange('controls', 'cameraSensitivity', parseInt(e.target.value))}
                      className="w-full h-2 bg-[rgba(255,0,255,0.2)] rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div className="pt-4 border-t border-[#444] space-y-4">
                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <div className="text-[#888] font-bold">Auto Attack</div>
                        <div className="text-xs text-[#666]">Automatically attack enemies in range</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.controls.autoAttack}
                        onChange={(e) => handleSettingChange('controls', 'autoAttack', e.target.checked)}
                        className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#ff00ff] focus:ring-2 focus:ring-[#ff00ff]"
                      />
                    </label>
                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <div className="text-[#888] font-bold">Quick Cast</div>
                        <div className="text-xs text-[#666]">Abilities activate immediately on key press</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.controls.quickCast}
                        onChange={(e) => handleSettingChange('controls', 'quickCast', e.target.checked)}
                        className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#ff00ff] focus:ring-2 focus:ring-[#ff00ff]"
                      />
                    </label>
                  </div>
                  <div className="pt-4 border-t border-[#444]">
                    <h3 className="text-lg text-[#ff00ff] font-bold font-mono mb-4">Key Bindings</h3>
                    <div className="space-y-3">
                      {Object.entries(settings.controls.keyBindings).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-3 bg-[rgba(255,0,255,0.05)] border border-[#444] rounded">
                          <span className="text-[#888] capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <button className="px-4 py-2 bg-[rgba(255,0,255,0.2)] border border-[#ff00ff] text-[#ff00ff] font-mono hover:bg-[rgba(255,0,255,0.3)] rounded transition-all">
                            {value}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeCategory === 'account' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl text-[#ffaa00] font-bold font-mono mb-6 flex items-center gap-2">
                  <User className="w-6 h-6" /> Account Settings
                </h2>
                <div className="space-y-6 text-sm font-mono">
                  <div>
                    <label className="block text-[#888] mb-2">Username</label>
                    <input
                      type="text"
                      value={settings.account.username}
                      onChange={(e) => handleSettingChange('account', 'username', e.target.value)}
                      className="w-full bg-[rgba(0,0,0,0.5)] border border-[#444] rounded px-4 py-2 text-white focus:border-[#ffaa00] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#888] mb-2">Email</label>
                    <input
                      type="email"
                      value={settings.account.email}
                      onChange={(e) => handleSettingChange('account', 'email', e.target.value)}
                      className="w-full bg-[rgba(0,0,0,0.5)] border border-[#444] rounded px-4 py-2 text-white focus:border-[#ffaa00] focus:outline-none"
                    />
                  </div>
                  <div className="pt-4 border-t border-[#444] space-y-4">
                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <div className="text-[#888] font-bold">Auto Login</div>
                        <div className="text-xs text-[#666]">Automatically log in on startup</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.account.autoLogin}
                        onChange={(e) => handleSettingChange('account', 'autoLogin', e.target.checked)}
                        className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#ffaa00] focus:ring-2 focus:ring-[#ffaa00]"
                      />
                    </label>
                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <div className="text-[#888] font-bold">Remember Password</div>
                        <div className="text-xs text-[#666]">Save password locally (not recommended)</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.account.rememberPassword}
                        onChange={(e) => handleSettingChange('account', 'rememberPassword', e.target.checked)}
                        className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#ffaa00] focus:ring-2 focus:ring-[#ffaa00]"
                      />
                    </label>
                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <div className="text-[#888] font-bold">Two-Factor Authentication</div>
                        <div className="text-xs text-[#666]">Add an extra layer of security</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.account.twoFactorAuth}
                        onChange={(e) => handleSettingChange('account', 'twoFactorAuth', e.target.checked)}
                        className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#ffaa00] focus:ring-2 focus:ring-[#ffaa00]"
                      />
                    </label>
                  </div>
                  <div className="pt-4 border-t border-[#444] flex gap-3">
                    <button className="px-4 py-2 bg-[rgba(255,170,0,0.2)] border border-[#ffaa00] text-[#ffaa00] font-mono hover:bg-[rgba(255,170,0,0.3)] rounded transition-all">
                      Export Data
                    </button>
                    <button className="px-4 py-2 bg-[rgba(255,0,0,0.2)] border border-[#ff0000] text-[#ff0000] font-mono hover:bg-[rgba(255,0,0,0.3)] rounded transition-all">
                      Delete Account
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeCategory === 'privacy' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl text-[#ffff00] font-bold font-mono mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6" /> Privacy Settings
                </h2>
                <div className="space-y-4 text-sm font-mono">
                  <label className="flex items-center justify-between cursor-pointer p-4 bg-[rgba(255,255,0,0.05)] border border-[#444] rounded">
                    <div>
                      <div className="text-[#888] font-bold">Show Online Status</div>
                      <div className="text-xs text-[#666]">Allow friends to see when you're online</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.privacy.showOnlineStatus}
                      onChange={(e) => handleSettingChange('privacy', 'showOnlineStatus', e.target.checked)}
                      className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#ffff00] focus:ring-2 focus:ring-[#ffff00]"
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer p-4 bg-[rgba(255,255,0,0.05)] border border-[#444] rounded">
                    <div>
                      <div className="text-[#888] font-bold">Allow Friend Requests</div>
                      <div className="text-xs text-[#666]">Let others send you friend requests</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.privacy.allowFriendRequests}
                      onChange={(e) => handleSettingChange('privacy', 'allowFriendRequests', e.target.checked)}
                      className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#ffff00] focus:ring-2 focus:ring-[#ffff00]"
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer p-4 bg-[rgba(255,255,0,0.05)] border border-[#444] rounded">
                    <div>
                      <div className="text-[#888] font-bold">Allow Private Messages</div>
                      <div className="text-xs text-[#666]">Receive messages from friends</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.privacy.allowPrivateMessages}
                      onChange={(e) => handleSettingChange('privacy', 'allowPrivateMessages', e.target.checked)}
                      className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#ffff00] focus:ring-2 focus:ring-[#ffff00]"
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer p-4 bg-[rgba(255,255,0,0.05)] border border-[#444] rounded">
                    <div>
                      <div className="text-[#888] font-bold">Show Location</div>
                      <div className="text-xs text-[#666]">Display current room/area to friends</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.privacy.showLocation}
                      onChange={(e) => handleSettingChange('privacy', 'showLocation', e.target.checked)}
                      className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#ffff00] focus:ring-2 focus:ring-[#ffff00]"
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer p-4 bg-[rgba(255,255,0,0.05)] border border-[#444] rounded">
                    <div>
                      <div className="text-[#888] font-bold">Data Collection</div>
                      <div className="text-xs text-[#666]">Help improve the game with anonymous usage data</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.privacy.dataCollection}
                      onChange={(e) => handleSettingChange('privacy', 'dataCollection', e.target.checked)}
                      className="w-5 h-5 rounded bg-[rgba(0,0,0,0.5)] border border-[#444] text-[#ffff00] focus:ring-2 focus:ring-[#ffff00]"
                    />
                  </label>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {}}
            className="px-8 py-4 bg-transparent border-2 border-[#00ff41] text-[#00ff41] font-mono hover:bg-[rgba(0,255,65,0.2)] transition-all rounded flex items-center gap-2"
          >
            <Save className="w-5 h-5" /> SAVE SETTINGS
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {}}
            className="px-8 py-4 bg-transparent border-2 border-[#ffaa00] text-[#ffaa00] font-mono hover:bg-[rgba(255,170,0,0.2)] transition-all rounded flex items-center gap-2"
          >
            <RotateCcw className="w-5 h-5" /> RESET TO DEFAULTS
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/desktop')}
            className="px-8 py-4 bg-transparent border-2 border-[#888] text-[#888] font-mono hover:bg-[rgba(136,136,136,0.2)] transition-all rounded"
          >
            ← BACK TO DESKTOP
          </motion.button>
        </div>
      </div>
    </div>
  );
}
