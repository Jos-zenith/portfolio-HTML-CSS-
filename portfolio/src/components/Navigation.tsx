'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Code, 
  User, 
  GraduationCap, 
  Award, 
  Mail, 
  FileText,
  Terminal as TerminalIcon,
  ChevronRight
} from 'lucide-react';

interface NavigationProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const navItems = [
  { path: '/', label: 'home', icon: Home, color: 'text-blue-400' },
  { path: '/projects', label: 'projects', icon: Code, color: 'text-green-400' },
  { path: '/skills', label: 'skills', icon: User, color: 'text-purple-400' },
  { path: '/education', label: 'education', icon: GraduationCap, color: 'text-yellow-400' },
  { path: '/achievements', label: 'achievements', icon: Award, color: 'text-orange-400' },
  { path: '/contact', label: 'contact', icon: Mail, color: 'text-red-400' },
];

export default function Navigation({ currentPath, onNavigate }: NavigationProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [commandHistory, setCommandHistory] = useState<string[]>([]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNavigation = (path: string, label: string) => {
    const command = `cd ~/${label === 'home' ? '' : label}`;
    setCommandHistory(prev => [...prev.slice(-4), command]);
    onNavigate(path);
  };

  return (
    <div className="space-y-4">
      {/* System Info */}
      <div className="border border-[var(--terminal-border)] rounded-lg p-4 bg-[var(--terminal-surface)]">
        <div className="flex items-center gap-2 mb-3">
          <TerminalIcon size={16} className="text-[var(--terminal-accent)]" />
          <span className="text-[var(--terminal-accent)] font-semibold">System Information</span>
        </div>
        <div className="space-y-1 text-sm text-gray-300">
          <div>OS: Ubuntu 22.04.3 LTS (Portfolio Edition)</div>
          <div>Kernel: Linux 5.15.0-portfolio</div>
          <div>Uptime: {Math.floor((Date.now() - 1640995200000) / (1000 * 60 * 60 * 24))} days</div>
          <div>Time: {currentTime.toLocaleTimeString()}</div>
          <div>User: zenith-joshua</div>
          <div>Shell: /bin/bash</div>
        </div>
      </div>

      {/* Command History */}
      <div className="border border-[var(--terminal-border)] rounded-lg p-4 bg-[var(--terminal-surface)]">
        <div className="flex items-center gap-2 mb-3">
          <FileText size={16} className="text-[var(--terminal-success)]" />
          <span className="text-[var(--terminal-success)] font-semibold">Recent Commands</span>
        </div>
        <div className="space-y-1 text-sm">
          {commandHistory.slice(-3).map((cmd, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-gray-400"
            >
              <span className="text-[var(--terminal-accent)]">$</span> {cmd}
            </motion.div>
          ))}
          {commandHistory.length === 0 && (
            <div className="text-gray-500 italic">No recent commands</div>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="border border-[var(--terminal-border)] rounded-lg p-4 bg-[var(--terminal-surface)]">
        <div className="flex items-center gap-2 mb-4">
          <ChevronRight size={16} className="text-[var(--terminal-purple)]" />
          <span className="text-[var(--terminal-purple)] font-semibold">Navigation</span>
        </div>
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path;
            
            return (
              <motion.button
                key={item.path}
                onClick={() => handleNavigation(item.path, item.label)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2 rounded-md text-left
                  transition-all duration-200 group
                  ${isActive 
                    ? 'bg-[var(--terminal-accent)] bg-opacity-20 border border-[var(--terminal-accent)]' 
                    : 'hover:bg-[var(--terminal-border)] border border-transparent'
                  }
                `}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon 
                  size={16} 
                  className={`${item.color} ${isActive ? 'animate-pulse' : ''}`} 
                />
                <span className={`
                  font-medium
                  ${isActive ? 'text-[var(--terminal-accent)]' : 'text-gray-300'}
                  group-hover:text-white
                `}>
                  ./{item.label}
                </span>
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="ml-auto text-[var(--terminal-accent)] cursor"
                  >
                    █
                  </motion.span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Current Directory */}
      <div className="border border-[var(--terminal-border)] rounded-lg p-4 bg-[var(--terminal-surface)]">
        <div className="text-sm">
          <span className="text-[var(--terminal-success)]">zenith@ubuntu</span>
          <span className="text-gray-400">:</span>
          <span className="text-[var(--terminal-accent)]">~{currentPath === '/' ? '' : currentPath}</span>
          <span className="text-gray-400">$</span>
          <span className="cursor ml-1">█</span>
        </div>
      </div>
    </div>
  );
}