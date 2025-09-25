'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, Minimize2, Maximize2, X, Folder, User, Code, Award, Mail, FileText } from 'lucide-react';

interface TerminalProps {
  children: React.ReactNode;
  title?: string;
  isActive?: boolean;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export default function Terminal({ 
  children, 
  title = "zenith@ubuntu:~", 
  isActive = true,
  onClose,
  onMinimize,
  onMaximize 
}: TerminalProps) {
  const [isMaximized, setIsMaximized] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
    onMaximize?.();
  };

  return (
    <motion.div
      ref={terminalRef}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        width: isMaximized ? '100vw' : 'auto',
        height: isMaximized ? '100vh' : 'auto'
      }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`
        bg-[var(--terminal-surface)] 
        border border-[var(--terminal-border)] 
        rounded-lg 
        shadow-2xl 
        overflow-hidden
        ${isMaximized ? 'fixed inset-0 z-50 rounded-none' : 'relative'}
      `}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-[var(--terminal-border)] px-4 py-2 border-b border-[var(--terminal-border)]">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <button 
              onClick={onClose}
              className="w-3 h-3 bg-[var(--terminal-warning)] rounded-full hover:brightness-110 transition-all"
            />
            <button 
              onClick={onMinimize}
              className="w-3 h-3 bg-yellow-500 rounded-full hover:brightness-110 transition-all"
            />
            <button 
              onClick={handleMaximize}
              className="w-3 h-3 bg-[var(--terminal-success)] rounded-full hover:brightness-110 transition-all"
            />
          </div>
          <div className="flex items-center gap-2 text-sm terminal-font text-[var(--terminal-text)]">
            <TerminalIcon size={16} />
            <span>{title}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="terminal-font">bash</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 min-h-[400px] bg-[var(--terminal-bg)] terminal-font text-sm">
        {children}
      </div>
    </motion.div>
  );
}