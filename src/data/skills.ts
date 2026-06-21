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
    skills: ['ESP32', 'Arduino', 'ARM', 'IoT Sensors', 'I2C', 'SPI', 'UART', 'Electronic Diagnostics', 'CCNA Networking', 'AutoCAD', 'PCB Design', 'EasyEDA', 'KiCAD', 'Autodesk Eagle'],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'code',
    color: 'from-purple-500 to-violet-500',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C', 'C++', 'Java', 'Kotlin', 'HTML', 'CSS', 'MATLAB', 'Assembly', 'Verilog', 'VHDL'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Tools',
    icon: 'layers',
    color: 'from-cyan-500 to-blue-500',
    skills: ['React', 'Node.js', 'Tailwind CSS', 'Firebase', 'PostgreSQL', 'MySQL', 'Git', 'GitHub', 'VSCode'],
  },
  {
    id: 'ai',
    title: 'AI Tools',
    icon: 'bot',
    color: 'from-emerald-500 to-teal-500',
    skills: ['Claude', 'ChatGPT', 'Gemini', 'DeepSeek', 'Perplexity', 'Bolt', 'Lovable', 'Zapier'],
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    icon: 'users',
    color: 'from-orange-500 to-amber-500',
    skills: ['Leadership', 'Problem Solving', 'Technical Documentation', 'Cross-functional Collaboration', 'Fast Learner', 'Adaptable', 'Attention to Detail'],
  },
];
