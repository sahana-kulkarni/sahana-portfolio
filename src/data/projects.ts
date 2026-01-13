export type Project = {
  title: string;
  subtitle: string;
  timeframe: string;
  tech: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;

  // New fields (optional but recommended)
  featured?: boolean; // makes the card span 2 columns on large screens
  signals?: string[]; // short proof tags: "Workflow UI", "React Query", etc
  owned?: string; // "What I owned" statement
};

export const projects: Project[] = [
  {
    title: "Enterprise Expense & Disbursal Management Dashboard",
    subtitle:
      "Workflow-driven review UI (PENDING → APPROVED/REJECTED) with predictable server-state and production-grade component architecture.",
    timeframe: "Jan 2026",
    featured: true,
    signals: [
      "Workflow UI",
      "Server-state (React Query)",
      "Accessible UI",
      "Reusable components",
    ],
    owned:
      "End-to-end frontend architecture, workflow design (status-based actions), server-state strategy, and API integration.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "React Query",
      "Node.js",
      "Express",
    ],
    highlights: [
      "Built a review workflow with conditional actions that mirrors real approval processes (PENDING → APPROVED/REJECTED).",
      "Improved reliability with consistent loading/error/empty states across pages and tables.",
      "Kept UI and backend consistent by invalidating and refetching queries after status mutations (React Query).",
      "Reduced UI duplication by extracting reusable table, filter, and status components.",
    ],
    githubUrl: "PASTE_YOUR_REPO_LINK_HERE",
    liveUrl: "OPTIONAL_LIVE_DEMO_LINK",
  },
  {
    title: "Frontend Performance Dashboard (Baseline vs Optimized)",
    subtitle:
      "A performance case study dashboard showcasing measurable UI improvements on large datasets (20k–50k rows) using real-world optimization techniques.",
    timeframe: "Jan 2026",
    featured: false,
    signals: [
      "Performance case study",
      "Virtualized rendering",
      "Debounced search",
      "Memoization",
    ],
    owned:
      "Designed the baseline vs optimized comparison, implemented data generation, profiling-driven UI optimizations, and virtualization for smooth scrolling.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "Vite",
      "@tanstack/react-virtual",
    ],
    highlights: [
      "Built a baseline vs optimized toggle to clearly compare UX differences and explain optimization decisions.",
      "Handled large datasets (20k–50k records) while maintaining responsive typing and smooth scrolling.",
      "Improved perceived performance using debounced search and memoized filtering/sorting to reduce recomputation.",
      "Implemented list virtualization with @tanstack/react-virtual to render only visible rows and minimize DOM work.",
    ],
    githubUrl:
      "https://github.com/sahana-kulkarni/frontend-performance-dashboard",
    // liveUrl: "PASTE_IF_DEPLOYED"
  },
];
