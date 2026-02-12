import { useState, useRef, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';

interface SolutionItem {
  title: string;
  description: string;
}

interface Solution {
  title: string;
  items: SolutionItem[][];
  image: string;
}

const solutions: Record<string, Solution> = {
  desktop: {
    title: 'Desktop Infrastructure 솔루션',
    image: 'https://i.imgur.com/rTdUIJd.jpg',
    items: [
      [
        {
          title: 'VDI (Virtual Desktop Infrastructure)',
          description: '가상 머신 기반의 중앙 집중형 데스크톱 환경',
        },
        {
          title: 'PDI (Physical Desktop Infrastructure)',
          description: '물리적 머신을 활용한 고성능·저지연 데스크톱 환경',
        },
      ],
    ],
  },
  cloud: {
    title: '클라우드 솔루션',
    image: 'https://i.imgur.com/IgGu2yY.jpg',
    items: [
      [
        {
          title: 'CMP (Cloud Management Platform)',
          description: '멀티·하이브리드 클라우드 통합 관리 플랫폼',
        },
        {
          title: 'IaaS (Infrastructure as a Service)',
          description: '가상 서버, 스토리지 등 클라우드 인프라 제공',
        },
        {
          title: 'PaaS (Platform as a Service)',
          description: '애플리케이션 개발·운영을 위한 플랫폼 환경 제공',
        },
      ],
      [
        {
          title: 'SaaS (Software as a Service)',
          description: '다양한 소프트웨어를 구독형으로 제공',
        },
        {
          title: '클라우드 운영·자동화 솔루션 (DevOps)',
          description: '개발과 운영을 통합 관리하는 자동화 솔루션',
        },
      ],
    ],
  },
  security: {
    title: '보안 솔루션',
    image: 'https://i.imgur.com/0HlnGg7.jpg',
    items: [
      [
        {
          title: 'Zero Trust 솔루션',
          description: '사용자·기기·네트워크를 지속 검증하는 차세대 보안 모델',
        },
        {
          title: '양자 내성 암호 솔루션 (Post-Quantum Cryptography)',
          description: '양자 컴퓨팅 시대를 대비한 암호화 기술',
        },
        {
          title: 'PAM 솔루션 (Privileged Access Management)',
          description: '최고 권한 계정의 안전 관리·제한',
        },
      ],
    ],
  },
  ai: {
    title: '인공지능(AI) 솔루션',
    image: 'https://i.imgur.com/GSiwkDP.jpg',
    items: [
      [
        {
          title: '온-프레미스 LLM (Large Language Model)',
          description: '보안 환경에서 운영할 수 있는 대규모 언어 모델',
        },
        {
          title: 'SQL 튜닝 자동화',
          description: '인공지능 기반의 데이터베이스 성능 최적화',
        },
      ],
    ],
  },
  utility: {
    title: '유틸리티 솔루션',
    image: 'https://i.imgur.com/M8zMhHS.jpg',
    items: [
      [
        {
          title: '문서 뷰어 (Document Viewer)',
          description: '다양한 포맷 문서의 빠르고 안전한 열람 지원',
        },
        {
          title: 'SQL 품질·성능 최적화',
          description: '규칙 기반의 데이터베이스 품질 및 성능 개선',
        },
      ],
    ],
  },
};

export function DXSolutions() {
  const [activeSolution, setActiveSolution] = useState('desktop');
  const [currentPage, setCurrentPage] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: 'desktop', label: 'Desktop Infrastructure 솔루션' },
    { id: 'cloud', label: '클라우드 솔루션' },
    { id: 'security', label: '보안 솔루션' },
    { id: 'ai', label: '인공지능(AI) 솔루션' },
    { id: 'utility', label: '유틸리티 솔루션' },
  ];

  // 스크롤 감지로 페이지 인디케이터 업데이트
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

  // 탭 변경 시 첫 페이지로 리셋
  useEffect(() => {
    setCurrentPage(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [activeSolution]);

  return (
    <section id="dx-solutions" className="min-h-screen flex flex-col justify-center items-center py-16 px-8 bg-black text-white">
      <h2 className="text-center text-white mb-3 text-[35px] font-[Almarai]">DX Solution</h2>
      <p className="text-center text-[25px] mb-10 text-white/70 font-[Almarai]">
        Digital Transformation Solutions
      </p>

      <div className="max-w-[900px] w-full mx-auto px-4">
        <div className="bg-gray-900/50 border border-cyan-500/30 rounded-3xl overflow-hidden">
          {/* 드롭다운 */}
          <div className="pt-6 px-4 md:px-6">
            <Select value={activeSolution} onValueChange={setActiveSolution}>
              <SelectTrigger className="w-full md:w-fit md:min-w-[280px] bg-transparent border-2 border-cyan-400/60 text-gray-300 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 text-sm md:text-base">
                <SelectValue placeholder="제품 선택" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-cyan-500/30 text-white">
                {tabs.map((tab) => (
                  <SelectItem key={tab.id} value={tab.id} className="text-white focus:bg-cyan-500/20 focus:text-cyan-300">
                    {tab.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* 선택된 항목 설명 */}
          <div className="px-4 md:px-6 py-6">
            <h3 className="text-[1.5rem] md:text-[1.8rem] text-white mb-5 text-center font-[Almarai]">
              {solutions[activeSolution].title.includes('Infrastructure') ? (
                <>
                  <span className="md:hidden">Desktop Infrastructure<br />솔루션</span>
                  <span className="hidden md:inline">Desktop Infrastructure 솔루션</span>
                </>
              ) : (
                solutions[activeSolution].title
              )}
            </h3>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 justify-center mx-auto">
              {/* 큰 아이콘 이미지 (모바일: 상단, 웹: 왼쪽) */}
              <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
                <ImageWithFallback
                  src={solutions[activeSolution].image}
                  alt={solutions[activeSolution].title}
                  className="w-full max-w-[200px] md:w-52 h-[200px] md:h-52 object-cover rounded-[15px]"
                />
              </div>

              {/* 텍스트 리스트 (모바일: 하단, 웹: 오른쪽) - 슬라이드 배너 */}
              <div className="w-full md:flex-1">
                <div 
                  ref={scrollContainerRef}
                  className="overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                >
                  <div className="flex">
                    {solutions[activeSolution].items.map((pageItems, pageIndex) => (
                      <div key={pageIndex} className="min-w-full snap-center flex flex-col gap-3">
                        {pageItems.map((item, index) => (
                          <motion.div 
                            key={index} 
                            className="bg-transparent border border-cyan-500/30 rounded-lg p-3 md:p-4 w-full cursor-pointer"
                            whileHover={{ 
                              scale: 1.02,
                              borderColor: 'rgba(34, 211, 238, 0.6)',
                              backgroundColor: 'rgba(6, 182, 212, 0.1)',
                            }}
                            transition={{ 
                              scale: { duration: 0.2 },
                              borderColor: { duration: 0.3 },
                              backgroundColor: { duration: 0.3 }
                            }}
                          >
                            <h4 className="text-[1rem] md:text-[1.1rem] text-white mb-1 font-[Almarai]">
                              {item.title.includes('(') ? (
                                <>
                                  {item.title.split(' (')[0]}
                                  <br />
                                  ({item.title.split(' (')[1]}
                                </>
                              ) : (
                                item.title
                              )}
                            </h4>
                            <p className="text-white/90 text-[0.85rem] md:text-[0.9rem] break-keep">
                              {item.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 페이지 인디케이터 */}
                {solutions[activeSolution].items.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {solutions[activeSolution].items.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentPage === index 
                            ? 'bg-cyan-400' 
                            : 'bg-transparent border border-cyan-400/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
