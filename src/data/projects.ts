import IOTSchematic from '../IOT/IOTschematic.png';
import Prototype from '../IOT/Prototype.jpg';
import Trial from '../IOT/trial.png';
import JomsAdmin from '../JOMS/admindashboard.png';
import JomsFrontdesk from '../JOMS/frontdeskdashboard.png';
import JomsLogin from '../JOMS/jomsloginpage.png';
import JomsTechnician from '../JOMS/technicianpage.png';
import MARTLogo from '../MART/martLogo.png';
import MARTDashboard from '../MART/Dashboard.png';
import MARTFrontPage from '../MART/FrontPage.png';
import MARTLoginPage from '../MART/LoginPage.png';
import TANIMCover from '../TANIM/TANIM.jpg';
import TANIMArch from '../TANIM/TANIMArchi.png';
import TANIMHardware from '../TANIM/TanimHardware.png';
import TANIMMobile from '../TANIM/mobileGUI.png';
import TANIMWeb from '../TANIM/TanimWEBgui.png';
import HardwareDiagram from '../IOT/HardwareDiagram.png';
import IOTMain from '../IOT/IOTMain.png'

export interface ProjectImage {
  id: string;
  label: string;
  uploaded?: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  role: string;
  whatIDid: string[];
  frameworks: string[];
  hardware: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  duration: string;
  images: ProjectImage[];
  architectureImage?: ProjectImage;
  gallery: ProjectImage[];
  tags: string[];
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'TANIM: An Agricultural System with Integrated IoT Soil Health Monitoring Device and Crop Recommendation Using LightGBM',
    subtitle: 'IoT Soil Health Monitoring & Crop Recommendation System',
    description:
      'IoT-powered precision agriculture platform utilizing ESP32 microcontrollers, LoRa communication, GPS tracking, Modbus RTU sensors, and Machine Learning for real-time soil monitoring and intelligent crop recommendations.',
    overview:
      'TANIM is a precision agriculture solution designed to help farmers make data-driven decisions. The system collects real-time soil health data through distributed sensor nodes and delivers actionable crop recommendations via machine learning.',
    role: 'Lead Firmware & Embedded Systems Engineer',
    whatIDid: [
      'Developed ESP32 firmware for sensor data acquisition and processing',
      'Implemented Modbus RTU communication protocol for 7-in-1 soil sensors',
      'Designed and integrated LoRa mesh communication for long-range data relay',
      'Integrated GPS module for node geolocation and mapping',
      'Built solar power management system for off-grid deployment',
      'Implemented efficient data serialization and packet structuring',
      'Collaborated on ML pipeline integration for crop recommendations',
    ],
    frameworks: ['Embedded C', 'Machine Learning (LightGBM)', 'LoRa Protocol', 'Modbus RTU', 'GPS NMEA', 'MQTT'],
    hardware: [
      'ESP32 Microcontroller',
      '7-in-1 Soil Sensor (N, P, K, pH, Moisture, Temperature, Conductivity)',
      'RS485 / MAX485 Module',
      'GPS Module (Neo-6M)',
      'LoRa Module (SX1276)',
      'Solar Panel & MPPT Charge Controller',
      
    ],
    features: [
      'Real-time soil parameter monitoring (N, P, K, pH, moisture, temperature, Salinity)',
      'Long-range LoRa communication up to 100m',
      'GPS-tagged sensor node placement',
      'Machine learning crop recommendation engine',
      'Solar-powered off-grid operation',
      'Web-based monitoring dashboard',
      'Mobile app for on-the-go access to crop recommendations',
    ],
    challenges: [
      'Ensuring reliable communication in dense rural environments',
      'Optimizing power consumption for solar operation',
      'Handling Modbus RTU timing and sensor initialization',
    ],
    solutions: [
      'Implemented adaptive LoRa spreading factor tuning',
      'Designed deep-sleep firmware cycles to minimize power draw',
      'Built custom Modbus RTU state machine with retry logic',
    ],
    duration: 'May 2025 – April 2026',
    tags: ['ESP32', 'IoT', 'LoRa', 'Machine Learning', 'Embedded C', 'Agriculture'],
    color: 'from-green-500 to-emerald-700',
    images: [
      { id: 'cover', label: 'Project Cover Image', uploaded: TANIMCover },
    ],
    architectureImage: { id: 'architecture', label: 'Architecture Diagram', uploaded: TANIMArch },
    gallery: [
      { id: 'web', label: 'Web Dashboard', uploaded: TANIMWeb },
      { id: 'mobile', label: 'Mobile GUI', uploaded: TANIMMobile },
      { id: 'hardware', label: 'Hardware Setup', uploaded: TANIMHardware },
    ],
  },
  {
    id: 2,
    title: 'Job Order Management System',
    subtitle: 'Production-Grade Full-Stack Web Application',
    description:
      'Production-grade full-stack web application for repair and service workflow management, built with React, TypeScript, Node.js, Express, and PostgreSQL.',
    overview:
      'A comprehensive job order management system designed for repair shops and service centers. Features role-based access control, real-time workflow tracking, and detailed reporting for streamlined operations.',
    role: 'Full-Stack Developer',
    whatIDid: [
      'Designed and implemented role-based access control (RBAC) system',
      'Built responsive frontend with React and TypeScript',
      'Developed RESTful API with Node.js and Express',
      'Designed PostgreSQL database schema and query optimization',
      'Implemented state management and real-time UI updates',
      'Wrote unit and integration tests for critical endpoints',
      'Managed Git branching strategy and code reviews',
    ],
    frameworks: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Jest'],
    hardware: [],
    features: [
      'Role-based access (Admin, Technician, Receptionist)',
      'Real-time job order status tracking',
      'Customer management and history',
      'Technician assignment and workload view',
      'Invoice generation and reporting',
      'Search, filter, and sort across all entities',
    ],
    challenges: [
      'Managing complex state transitions across multiple user roles',
      'Ensuring data consistency across concurrent operations',
      'Building a flexible schema for diverse service types',
    ],
    solutions: [
      'Implemented centralized state management with React Context',
      'Used database-level transactions for data integrity',
      'Designed a polymorphic service item schema',
    ],
    duration: 'February 2026 – March 2026',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Full Stack'],
    color: 'from-blue-500 to-blue-700',
    images: [
      { id: 'cover', label: 'Project Cover Image', uploaded: JomsLogin },
    ],
    gallery: [
      { id: 'dashboard', label: 'Dashboard', uploaded: JomsAdmin },
      { id: 'frontdesk', label: 'Front Desk View', uploaded: JomsFrontdesk },
      { id: 'technician', label: 'Technician View', uploaded: JomsTechnician },
    ],
  },
  {
    id: 3,
    title: 'IoT-Based Forest Monitoring System',
    subtitle: 'Intelligent Forest Protection & Alert System',
    description:
      'ESP32-based intelligent forest protection system that detects illegal logging and poaching activities using sound sensors and ESP32-CAM for real-time visual alerting.',
    overview:
      'An automated forest protection system leveraging IoT technology to detect and alert authorities of illegal activities in protected areas. Uses acoustic sensing and visual confirmation to reduce false positives.',
    role: 'Firmware Engineer & Systems Architect',
    whatIDid: [
      'Developed ESP32 firmware with finite state machine architecture',
      'Implemented sound sensor signal processing and threshold detection',
      'Built Wi-Fi communication layer for HTTP alert transmission',
      'Integrated ESP32-CAM for automated image capture on trigger',
      'Designed power-efficient polling and interrupt-driven sensing',
      'Implemented HTTP POST alerts to backend server',
    ],
    frameworks: ['Embedded C', 'Arduino Framework', 'HTTP/REST', 'Wi-Fi', 'FreeRTOS'],
    hardware: [
      'ESP32 Development Board',
      'ESP32-CAM Module',
      'Sound Sensor (KY-038)',
      '5V Regulator',
    ],
    features: [
      'Acoustic anomaly detection for chainsaw and gunshot sounds',
      'Automated photo capture on trigger event',
      'Real-time HTTP alert to monitoring dashboard',
      'Low-power deep sleep between sensing cycles',
      'Outdoor weatherproof deployment',
    ],
    challenges: [
      'Reducing false positives from ambient forest sounds',
      'Managing Wi-Fi power consumption for battery operation',
      'Synchronizing ESP32 and ESP32-CAM over serial',
    ],
    solutions: [
      'Implemented multi-threshold sound classification algorithm',
      'Used modem sleep mode between transmission cycles',
      'Designed custom UART protocol between modules',
    ],
    duration: 'March 2025 – June 2025',
    tags: ['ESP32', 'IoT', 'Embedded C', 'ESP32-CAM', 'Forest', 'Security'],
    color: 'from-emerald-600 to-teal-800',
    images: [
      { id: 'cover', label: 'Project Cover Image', uploaded: IOTMain },
    ],
    architectureImage: { id: 'architecture', label: 'Hardware Diagram', uploaded: HardwareDiagram },
    gallery: [
      { id: 'hardware', label: 'Hardware Setup', uploaded: Prototype },
      { id: 'dashboard', label: 'Monitoring Dashboard', uploaded: Trial },
      { id: 'alert', label: 'Schematic', uploaded: IOTSchematic },
    ],
  },
  {
    id: 4,
    title: 'MART (Market of ART)',
    subtitle: 'Mobile E-Commerce Platform for Local Artists',
    description:
      'Mobile e-commerce application connecting local artists and customers, built with Kotlin and Android SDK.',
    overview:
      'MART is a marketplace application designed to empower local artists by giving them a digital platform to showcase and sell their work. Features include artist profiles, product listings, secure checkout, and order management.',
    role: 'Team Lead & Android Developer',
    whatIDid: [
      'Led a team of 4 developers across the full project lifecycle',
      'Architected the Android application using MVVM pattern',
      'Developed core UI screens including Home, Product, and Profile',
      'Implemented product listing, cart, and checkout flows',
      'Designed the application UI/UX with Figma mockups',
      'Conducted code reviews and sprint planning',
    ],
    frameworks: ['Kotlin', 'Android SDK', 'MVVM Architecture', 'Firebase', 'Retrofit', 'Glide'],
    hardware: [],
    features: [
      'Artist profile and portfolio showcase',
      'Product catalog with search and filter',
      'Shopping cart and checkout flow',
      'Order tracking and history',
      'Messaging between buyers and sellers',
      'Firebase real-time updates',
    ],
    challenges: [
      'Coordinating development across multiple team members',
      'Managing image loading performance on lower-end devices',
      'Building a scalable product catalog structure',
    ],
    solutions: [
      'Used GitHub Projects and daily standups for coordination',
      'Implemented Glide with custom disk caching strategy',
      'Designed Firestore schema with denormalized product data',
    ],
    duration: 'March 2024 – December 2024',
    tags: ['Kotlin', 'Android', 'Firebase', 'E-Commerce', 'Mobile'],
    color: 'from-orange-500 to-red-600',
    images: [
      { id: 'cover', label: 'Project Cover Image', uploaded: MARTLogo },
    ],
    gallery: [
      { id: 'home', label: 'Front Page', uploaded: MARTFrontPage },
      { id: 'profile', label: 'LoginPage', uploaded: MARTLoginPage },
      { id: 'product', label: 'Dashboard', uploaded: MARTDashboard },
    ],
  },
];
