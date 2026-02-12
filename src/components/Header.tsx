import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from 'figma:asset/8a1bff1c7b7892b77ff122aeceb44b73f8b19c54.png';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <ImageWithFallback src={logoImage} alt="디엑스블록스" className="h-12 w-auto" />
        </div>

        <button
          className="md:hidden text-white text-3xl bg-transparent border-none cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        <ul
          className={`${
            isMobileMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row gap-10 md:gap-10 list-none absolute md:relative top-full left-0 right-0 md:top-auto bg-black/95 md:bg-transparent p-8 md:p-0 shadow-lg md:shadow-none`}
        >
          <li>
            <button
              onClick={() => handleNavClick('about')}
              className="text-white bg-transparent border-none cursor-pointer transition-colors hover:text-blue-300"
            >
              회사소개
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('products')}
              className="text-white bg-transparent border-none cursor-pointer transition-colors hover:text-blue-300"
            >
              제품
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('dx-solutions')}
              className="text-white bg-transparent border-none cursor-pointer transition-colors hover:text-blue-300 font-[Almarai]"
            >
              DX Solution
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-white bg-transparent border-none cursor-pointer transition-colors hover:text-blue-300"
            >
              문의하기
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
