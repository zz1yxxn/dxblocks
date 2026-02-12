import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { DXSolutions } from "./components/DXSolutions";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header onNavigate={handleNavigate} />
      <Hero />
      <About />
      <Products />
      <DXSolutions />
      <Contact />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}