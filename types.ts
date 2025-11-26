import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface DeconstructionResult {
  explanation: string;
  difficulty: 'NOOB' | 'HACKER' | 'ELITE';
  concepts: string[];
}