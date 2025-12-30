import { StaticImageData } from 'next/image';
import Workstat from '@/images/workstat_new.png';
import LivinAds from '@/images/livinads_new.png';
import SunriseMorning from '@/images/sunrise_new.png';
import ManasviFoundation from '@/images/manasvi_new.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: StaticImageData | string;
  link: string | null;
  github: string | null;
  featured: boolean;
  tags: string[];
}

export type ProjectsData = Project[];

export const PROJECTS_DATA: ProjectsData =
  [
    {
      id: 1,
      title: "Workstat – Productivity Monitoring Admin Panel",
      description: "A specialized admin dashboard designed for real-time employee productivity tracking and behavioral analytics.",
      longDescription: "Architected and developed a comprehensive Admin Panel for Workstat, a leading productivity monitoring platform. Focused on high-performance data visualization using Recharts, real-time live-streaming of activity metrics via Socket.io, and complex PostgreSQL queries for deep-dive behavioral analytics. Built features for shift management, automated reporting, and anomaly detection in employee engagement patterns.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Recharts", "Socket.io"],
      image: Workstat,
      link: "https://workstat.ai/",
      github: null,
      featured: true,
      tags: ["Admin Panel", "Productivity", "Real-time", "Dashboard"]
    },
    {
      id: 2,
      title: "LivinAds – Digital Marketing Agency Website",
      description: "Official website for LivinAds with a clean, modern, and fully responsive UI, optimized for SEO and engagement.",
      longDescription: "Designed and developed the official website for LivinAds with a clean, modern, and fully responsive UI. Implemented SEO-friendly structure, optimized meta tags, and improved page loading performance for better search visibility. Ensured cross-browser compatibility, mobile responsiveness, and accessibility best practices.",
      technologies: ["Next.js", "React", "Tailwind CSS", "SEO"],
      image: LivinAds,
      link: "https://livinads.com",
      github: null,
      featured: true,
      tags: ["Web Design", "SEO", "Responsive", "Marketing"]
    },
    {
      id: 3,
      title: "SunriseMorning – Classified Ads Platform",
      description: "Full-stack classified ads marketplace with user authentication, ad management, subscription system, and admin panel.",
      longDescription: "Developed a full-stack classified ads marketplace using Next.js, TypeScript, PostgreSQL, Drizzle ORM, and Bootstrap. Supporting user login, registration, OTP verification, and secure password management. Built advanced ad posting & management modules including normal listings, Sunday Magazine ads, category/subcategory filters, keyword + location search, ad expiry automation, and seller contact flow. Implemented a complete subscription system with plan purchase, payment gateway integration, posting limits, free/paid ad logic. Created a robust Admin Panel with full CRUD operations.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Bootstrap"],
      image: SunriseMorning,
      link: "https://sunrisemorning.in",
      github: null,
      featured: true,
      tags: ["Marketplace", "Full Stack", "PostgreSQL", "Admin Panel"]
    },
    {
      id: 4,
      title: "Manasvi Foundation – NGO Website Platform",
      description: "Dedicated platform to showcase the NGO's mission, initiatives, and social impact with informative content.",
      longDescription: "Designed and developed a dedicated platform to showcase the NGO's mission, initiatives, and social impact. Built an informative and visually appealing About Us section, project highlights, and success stories to improve engagement. Delivered a clean, accessible, and user-focused website aligned with the foundation's values and goals.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      image: ManasviFoundation,
      link: "https://manasvi.vercel.app",
      github: null,
      featured: true,
      tags: ["NGO", "Non-profit", "Web Design", "React"]
    }
  ]