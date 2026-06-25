export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'embedded',
    title: 'Embedded & Hardware',
    icon: 'cpu',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      'ARM', 'Arduino', 'AutoCAD', 'EasyEDA', 'Electronic Diagnostics',
      'ESP32', 'I2C', 'IoT Sensors', 'KiCAD', 'Autodesk Eagle',
      'PCB Design', 'SPI', 'UART',
    ],
  },
  {
    id: 'networking',
    title: 'Networking',
    icon: 'globe',
    color: 'from-sky-500 to-indigo-500',
    skills: [
      'CCNA', 'Cisco IOS', 'IPv4/IPv6 Subnetting', 'LAN/WAN',
      'Modbus RTU', 'Network Troubleshooting',
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'code',
    color: 'from-purple-500 to-violet-500',
    skills: [
      'Assembly (MIPS)', 'C', 'C++', 'CSS', 'Embedded C',
      'HTML', 'Java', 'JavaScript', 'Kotlin', 'LaTeX',
      'MATLAB', 'Python', 'TypeScript', 'Verilog', 'VHDL',
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Tools',
    icon: 'layers',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      'Docker', 'Firebase', 'Git', 'GitHub', 'Jupyter Notebook',
      'Linux', 'MySQL', 'Node.js', 'PostgreSQL', 'React', 'REST APIs', 'Vite',
      'VSCode', 'WordPress', 
    ],
  },
  {
    id: 'ai',
    title: 'AI Tools',
    icon: 'bot',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      'Bolt', 'ChatGPT', 'Claude', 'DeepSeek',
      'Gemini', 'Lovable', 'Perplexity', 'Zapier',
    ],
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    icon: 'users',
    color: 'from-orange-500 to-amber-500',
    skills: [
      'Academic Writing', 'Adaptable', 'Attention to Detail',  'Communication', 'Cross-functional Collaboration',
      'Fast Learner', 'Leadership', 'Presentation', 'Problem Solving', 'Research', 'Technical Documentation', 
    ],
  },
];
