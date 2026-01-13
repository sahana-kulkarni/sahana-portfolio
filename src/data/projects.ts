export type Project = {
  title: string;
  subtitle: string;
  timeframe: string;
  tech: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;

  featured?: boolean; // makes the card span 2 columns on large screens
  signals?: string[]; // short proof tags
  owned?: string; // "What I owned"

  // NEW: outcomes (more recruiter-friendly than features)
  keyOutcomes?: string[];
};

export const projects: Project[] = [
  // ⭐ STAR project first (featured)
  {
    title: "High-Performance Data Table (20k+ Rows)",
    subtitle:
      "A performance case study comparing baseline vs optimized rendering on large datasets using virtualization and profiling-driven UI techniques.",
    timeframe: "Jan 2026",
    featured: true,
    signals: [
      "Virtualization",
      "Benchmarked UX",
      "Debounced search",
      "Memoization",
    ],
    owned:
      "Built the baseline vs optimized comparison, implemented profiling-driven optimizations, and used virtualization for smooth scrolling.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "Vite",
      "@tanstack/react-virtual",
    ],
    keyOutcomes: [
      "Rendered only visible rows using virtualization to minimize DOM work and eliminate scrolling jank.",
      "Kept typing responsive under load using debounced search and memoized filtering/sorting.",
      "Benchmarked baseline vs optimized UX via a comparison toggle to clearly communicate performance wins.",
    ],
    highlights: [
      "Built a baseline vs optimized toggle to compare UX differences and explain optimization decisions.",
      "Handled large datasets (20k–50k records) while maintaining smooth scrolling and responsive interactions.",
      "Reduced unnecessary recomputation by memoizing derived table state (filters/sorting).",
      "Implemented list virtualization with @tanstack/react-virtual to limit DOM rendering to visible rows.",
    ],
    githubUrl:
      "https://github.com/sahana-kulkarni/frontend-performance-dashboard",
    // liveUrl: "PASTE_IF_DEPLOYED"
  },

  // Strong secondary project (not featured)
  {
    title: "Enterprise Expense & Disbursal Management Dashboard",
    subtitle:
      "Workflow-driven review UI (PENDING → APPROVED/REJECTED) with predictable server-state and production-grade component architecture.",
    timeframe: "Jan 2026",
    featured: false,
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
    keyOutcomes: [
      "Reduced unnecessary UI re-renders by using React Query invalidation patterns after status mutations.",
      "Designed approval workflows that mirror real financial review systems (PENDING → APPROVED/REJECTED).",
      "Improved perceived performance with consistent loading, error, and empty states across modules.",
    ],
    highlights: [
      "Built a review workflow with conditional actions that mirrors real approval processes (PENDING → APPROVED/REJECTED).",
      "Improved reliability with consistent loading/error/empty states across pages and tables.",
      "Kept UI and backend consistent by invalidating and refetching queries after status mutations (React Query).",
      "Reduced UI duplication by extracting reusable table, filter, and status components.",
    ],
    githubUrl: "PASTE_YOUR_REPO_LINK_HERE",
    // liveUrl: "OPTIONAL_LIVE_DEMO_LINK",
  },
];
