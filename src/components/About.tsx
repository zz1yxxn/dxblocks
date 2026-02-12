import { useState, useRef, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const pageWidth = container.offsetWidth;
      const page = Math.round(scrollLeft / pageWidth);
      setCurrentPage(page);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center py-20 bg-black text-gray-100">
      {/* 배너 컨테이너 */}
      <div className="max-w-[900px] w-full mx-auto px-4">
        <div className="bg-gray-900/50 border border-cyan-500/30 rounded-3xl overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          >
            <div className="flex">
              {/* 회사소개 배너 */}
              <div className="min-w-full snap-center flex flex-col justify-center items-center px-8 py-6 relative bg-cover bg-center" style={{ backgroundImage: 'url(https://i.imgur.com/uzGkNh2.png)' }}>
                {/* 반투명 오버레이 */}
                <div className="absolute inset-0 bg-black/70"></div>
                
                {/* 컨텐츠 */}
                <div className="relative z-10 w-full flex flex-col items-center">
                  <h2 className="text-center text-white mb-2 text-[35px]">회사소개</h2>
                  <p className="text-center text-[25px] mb-6 text-white/70 font-[Almarai]">About Us</p>

                  <div className="max-w-[800px] mx-auto text-center">
                    <p className="text-[0.95rem] md:text-[1.1rem] leading-[1.7] text-gray-100">
                      {/* 모바일 버전 */}
                      <span className="md:hidden">
                        디엑스블록스㈜는<br />
                        전력반도체, 유무선 통신, 인공지능 등의<br />
                        기술을 활용한 전력 스위치 플랫폼을<br />
                        연구·개발·제조하고,<br />
                        차세대 IT 인프라·클라우드·보안·AI 등<br />
                        디지털 전환(DX)에 필요한<br />
                        다양한 솔루션(Blocks)을 제공함으로써<br />
                        산업 전반의 디지털 혁신을<br />
                        지원하는 기업입니다.
                      </span>
                      {/* 웹페이지 버전 */}
                      <span className="hidden md:inline text-left">
                        디엑스블록스㈜는 전력반도체, 유무선 통신, 인공지능 등의 기술을 활용한<br />
                        전력 스위치 플랫폼을 연구·개발·제조하고,<br />
                        차세대 IT 인프라·클라우드·보안·AI 등 디지털 전환(DX)에 필요한<br />
                        다양한 솔루션(Blocks)을 제공함으로써<br />
                        산업 전반의 디지털 혁신을 지원하는 기업입니다.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* 특허 배너 */}
              <div className="min-w-full snap-center flex flex-col justify-center items-center px-8 py-6">
                <h2 className="text-center text-white mb-2 text-[35px]">특허</h2>
                <p className="text-center text-[25px] mb-6 text-white/70 font-[Almarai]">Patents</p>

                <div className="max-w-[350px] mx-auto text-center">
                  <ImageWithFallback
                    src="https://i.imgur.com/6uWzt0I.png"
                    alt="특허 정보"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 페이지 인디케이터 */}
          <div className="flex justify-center gap-2 pb-4">
            <div 
              className={`w-2 h-2 rounded-full transition-all ${
                currentPage === 0 
                  ? 'bg-cyan-400' 
                  : 'bg-transparent border border-cyan-400/50'
              }`}
            />
            <div 
              className={`w-2 h-2 rounded-full transition-all ${
                currentPage === 1 
                  ? 'bg-cyan-400' 
                  : 'bg-transparent border border-cyan-400/50'
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
