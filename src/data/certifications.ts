import CCNA_ENSA from '../Certificates/CCNA-ENSA.png';
import CCNA_SRWE from '../Certificates/CCNA-SRWE.png';
import IntroToCybersec from '../Certificates/IntroToCybersec.png';
import NetworkingEssentials from '../Certificates/NetworkingEssentials.png';
import ProfoodLogo from '../EducTour/Profood.jpg';
import NGCPLogo from '../EducTour/ngcp.png';
import GlobeLogo from '../EducTour/globe.png';
import OnsemiLogo from '../EducTour/onsemi.png';
import CSE from '../Certificates/CSCertificate.png';

export interface Certification {
  id: number;
  title: string;
  organization: string;
  year: string;
  type: 'certification' | 'exposure';
  color: string;
  image?: string;
  logo?: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Civil Service Eligibility – Professional Level',
    organization: 'Civil Service Commission of the Philippines',
    year: '2026',
    type: 'certification',
    color: 'from-blue-500 to-blue-700',
    image: CSE,
  },
  {
    id: 2,
    title: 'CCNA Enterprise Networking, Security, and Automation',
    organization: 'Cisco Networking Academy',
    year: '2025',
    type: 'certification',
    color: 'from-cyan-500 to-blue-600',
    image: CCNA_ENSA,
  },
  {
    id: 3,
    title: 'CCNA Switching, Routing & Wireless Essentials',
    organization: 'Cisco Networking Academy',
    year: '2025',
    type: 'certification',
    color: 'from-blue-400 to-cyan-600',
    image: CCNA_SRWE,
  },
  {
    id: 4,
    title: 'Introduction to Cybersecurity',
    organization: 'Cisco Networking Academy',
    year: '2025',
    type: 'certification',
    color: 'from-purple-500 to-blue-600',
    image: IntroToCybersec,
  },
  {
    id: 5,
    title: 'Networking Essentials',
    organization: 'Cisco Networking Academy',
    year: '2025',
    type: 'certification',
    color: 'from-indigo-500 to-violet-600',
    image: NetworkingEssentials,
  },
];

export const educationalExposures: Certification[] = [
  {
    id: 5,
    title: 'Industrial Exposure – Food Technology',
    organization: 'Profood International',
    year: '2025',
    type: 'exposure',
    color: 'from-black-500 to-teal-600',
    logo: ProfoodLogo,
  },
  {
    id: 6,
    title: 'Industrial Exposure – Power Grid Systems',
    organization: 'National Grid Corporation of the Philippines',
    year: '2025',
    type: 'exposure',
    color: 'from-white-500 to-orange-600',
    logo: NGCPLogo,
  },
  {
    id: 7,
    title: 'Industrial Exposure – Telecommunications',
    organization: 'Globe Telecom',
    year: '2025',
    type: 'exposure',
    color: 'from-white-500 to-indigo-600',
    logo: GlobeLogo,
  },
  {
    id: 8,
    title: 'Industrial Exposure – Semiconductor Manufacturing',
    organization: 'OnSemi (formerly ON Semiconductor)',
    year: '2025',
    type: 'exposure',
    color: 'from-white-500 to-rose-700',
    logo: OnsemiLogo,
  },
];
