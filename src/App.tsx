import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";

export default function App() {
  return (
    <div className="min-h-screen text-zinc-900 dark:text-zinc-50">
      <Background />

      <Navbar />

      <main className="mx-auto max-w-5xl px-5">
        {/* Content panel */}
        <div
          className="my-10 rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-lg
             dark:border-white/10 dark:bg-zinc-900"
        >
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
