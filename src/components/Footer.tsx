export default function Footer() {
  return (
    <footer className="mt-10 border-t border-zinc-200">
      <div className="mx-auto max-w-5xl px-5 py-8 text-sm text-zinc-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Sahana Kulkarni</span>
          <span className="text-zinc-500">
            Built with React + TypeScript + Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}
