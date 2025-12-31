export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full px-10 py-6 flex items-center justify-between">
      {/* Left: Name */}
      <div className="font-mono text-lg text-accent">
        hrishita sharma
      </div>

      {/* Right: Resume button */}
      <a
        href="/resume.pdf"
        className="font-mono text-sm px-4 py-2 border border-white/40 rounded-md hover:bg-white hover:text-black transition"
      >
        resume
      </a>
    </header>
  );
}
