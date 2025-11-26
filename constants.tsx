import React from 'react';
import { Terminal, Cpu, ShieldAlert, Zap, CircuitBoard, Network, Bot, Binary } from 'lucide-react';
import { NavItem, Feature } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'SYS.MANIFESTO', href: '#manifesto' },
  { label: 'PROTOCOL', href: '#methodology' },
  { label: 'ROADMAP', href: '#roadmap' },
  { label: 'CORE_MODULES', href: '#modules' },
  { label: 'NEURAL_LINK', href: '#ai' },
  { label: 'INITIALIZE', href: '#pricing' },
];

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'HARDWARE DECONSTRUCTION',
    description: "Analyze the machine. We simulate hardware limitations and memory leaks to teach you efficiency. Understand the metal.",
    icon: <CircuitBoard size={32} />,
    color: 'border-sci-cyan text-sci-cyan',
  },
  {
    id: 'f2',
    title: 'AI PAIR INTERFACE',
    description: "Connect with Gemini-V2. It doesn't guide; it challenges. It detects logic flaws in real-time like a sub-routine watchdog.",
    icon: <Bot size={32} />,
    color: 'border-sci-yellow text-sci-yellow',
  },
  {
    id: 'f3',
    title: 'SYSTEM EXPLOITS',
    description: "Learn defense by mastering offense. Inject code into simulated servers and watch them crash safely in our sandbox.",
    icon: <ShieldAlert size={32} />,
    color: 'border-sci-red text-sci-red',
  },
  {
    id: 'f4',
    title: 'TERMINAL MASTERY',
    description: "Abandon the mouse. Full CLI environments. Navigate the digital grid using only keystrokes and commands.",
    icon: <Terminal size={32} />,
    color: 'border-white text-white',
  }
];

export const PRESET_CODE_SNIPPETS = [
  {
    label: "Drone_Navigation.py",
    code: `def navigate_drone(target_coords):
    current_pos = get_gps()
    while current_pos != target_coords:
        adjust_thrusters(target_coords)
        # BUG: No fuel check implemented
        # WARNING: Potential crash`
  },
  {
    label: "Servo_Controller.cpp",
    code: `void rotateArm(int degrees) {
  if (degrees > 360) {
     // Buffer overflow risk here
     memory[0] = degrees; 
  }
  servo.write(degrees);
}`
  },
  {
    label: "Neural_Net.js",
    code: `const trainModel = async (data) => {
  // Infinite recursion risk
  return trainModel(data.nextBatch); 
}`
  }
];

export const ROADMAP_STEPS = [
    {
        phase: "PHASE_01",
        title: "THE METAL",
        desc: "Assembly, C++, and Memory Management. Learn how the machine thinks.",
        status: "ONLINE"
    },
    {
        phase: "PHASE_02",
        title: "THE NETWORK",
        desc: "Packets, Protocols, and Encryption. Understand how machines talk.",
        status: "ONLINE"
    },
    {
        phase: "PHASE_03",
        title: "THE ARCHITECT",
        desc: "System Design, Scalability, and Load Balancing. Build the machine.",
        status: "LOCKED"
    },
    {
        phase: "PHASE_04",
        title: "THE GHOST",
        desc: "AI Integration, Neural Nets, and Heuristics. Teach the machine.",
        status: "LOCKED"
    }
];

export const TESTIMONIALS = [
    {
        user: "USER_X99",
        role: "JUNIOR_DEV",
        msg: "Traditional school taught me syntax. This platform taught me how memory actually works. I finally understand pointers."
    },
    {
        user: "NULL_POINTER",
        role: "SEC_ANALYST",
        msg: "The 'System Exploits' module is insane. Breaking the sandbox taught me more about security than 3 years of theory."
    },
    {
        user: "KERNEL_PANIC",
        role: "STUDENT",
        msg: "It's not easy. It's frustrating. But when your code finally runs without crashing the sim, you feel like a god."
    }
];

export const MODAL_CONTENT: Record<string, { title: string; content: React.ReactNode }> = {
    'LOGIN': {
        title: 'AUTHENTICATION REQUIRED',
        content: (
            <div className="space-y-4">
                <div className="bg-sci-dim/30 p-4 border border-sci-red text-sci-red font-mono text-sm">
                    <p>WARNING: UNSECURED CONNECTION DETECTED.</p>
                </div>
                <div className="space-y-2">
                    <label className="block font-mono text-xs text-sci-cyan">OPERATOR_ID</label>
                    <input type="text" className="w-full bg-black border border-sci-dim p-2 text-white focus:border-sci-cyan outline-none" placeholder="ENTER ID..." />
                </div>
                <div className="space-y-2">
                    <label className="block font-mono text-xs text-sci-cyan">ACCESS_KEY</label>
                    <input type="password" className="w-full bg-black border border-sci-dim p-2 text-white focus:border-sci-cyan outline-none" placeholder="••••••••" />
                </div>
                <p className="text-xs text-gray-500 mt-4">* Simulated login portal. No real data is transmitted.</p>
            </div>
        )
    },
    'TERMS': {
        title: 'TERMS OF SERVICE PROTOCOL',
        content: (
            <div className="font-mono text-xs space-y-2 h-48 overflow-y-auto text-gray-400">
                <p>1.0 USER AGREEMENT</p>
                <p>By accessing the Mainframe, user agrees to abide by standard ethical hacking protocols.</p>
                <p>2.0 LIABILITY</p>
                <p>We are not responsible for system crashes, neural overloads, or coffee spills resulting from intense coding sessions.</p>
                <p>3.0 DATA</p>
                <p>All code inputs are processed for educational deconstruction only.</p>
                <p>END OF LINE.</p>
            </div>
        )
    },
    'PRIVACY': {
        title: 'DATA ENCRYPTION STANDARD',
        content: (
            <div className="font-mono text-xs space-y-2 h-48 overflow-y-auto text-gray-400">
                <p>STATUS: ENCRYPTED</p>
                <p>We collect minimal telemetry to improve system performance.</p>
                <p>User identities are hashed using SHA-256 before storage.</p>
                <p>Third-party trackers have been neutralized.</p>
            </div>
        )
    }
};