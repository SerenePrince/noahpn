import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import CursorLight from "./components/CursorLight.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navigation from "./components/Navigation.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Stars from "./components/Stars.jsx";

function App() {
  return (
    <div className="relative min-h-screen">
      <Stars />
      <CursorLight />
      <Navigation />

      <header className="relative z-10">
        <Hero />
      </header>

      <main className="relative z-10">
        <section>
          <About />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Experience />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
      </main>

      <footer className="relative z-10">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
