import { motion } from 'motion/react';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden m-0 p-0"
    >
      {/* 배경 이미지 레이어 */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-center md:bg-center"
        style={{
          backgroundImage: `url(https://i.imgur.com/jfG2pQ1.jpg)`,
        }}
      />
      
      {/* 그라디언트 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-[1]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center text-white max-w-[900px] px-8 relative z-[2] mt-[120px] md:mt-[160px]"
        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
      >
        <h1 className="text-[35px] mb-24 text-white mt-[80px] md:mt-[100px]">
          디엑스블록스(주)<br />
          <span className="text-[35px] font-[Almarai]">DXBlocks Inc.</span>
        </h1>
        <div className="mt-[100px] md:mt-[140px]">
          <p className="text-[20px] mb-2 text-white/95">
            디지털 전환(DX)에 필요한 솔루션(Blocks)을 제공하는 기업
          </p>
          <p className="text-[20px] mb-6 text-white/85 font-[Almarai]">
            <span className="md:hidden">Digital Transformation<br />Solution Provider</span>
            <span className="hidden md:inline">Digital Transformation Solution Provider</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
