import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import productImage from 'figma:asset/51b8ddfc2adf59a2164a973f1553ccfba94b4a41.png';

interface ProductData {
  subtitle: string;
  description: string;
}

const productData: Record<string, ProductData> = {
  '전원 스위치': {
    subtitle: 'Power Switch',
    description: '전력 공급을 안정적으로 제어하는 / 기본 스위치입니다.',
  },
  누전차단기: {
    subtitle: 'Residual Current Circuit Breaker',
    description: '전류 누설을 감지하여 안전사고를 방지합니다.',
  },
  '배선용 차단기': {
    subtitle: 'Molded Case Circuit Breaker',
    description: '배선을 보호하는 차단 장치입니다.',
  },
  아크차단기: {
    subtitle: 'Arc Fault Circuit Interrupter',
    description: '전기 아크 발생 시 화재를 예방합니다.',
  },
};

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = ['전원 스위치', '배선용 차단기', '누전차단기', '아크차단기'];

  const handleProductClick = (product: string) => {
    setSelectedProduct(selectedProduct === product ? null : product);
  };

  return (
    <section id="products" className="min-h-screen flex flex-col justify-center items-center py-16 px-8 bg-black text-white">
      <h2 className="text-center text-white mb-3 text-[35px]">제품</h2>
      <p className="text-center text-[25px] mb-10 text-white/70 font-[Almarai]">Our Products</p>

      <div className="max-w-[1000px] w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {products.map((product) => (
            <button
              key={product}
              onClick={() => handleProductClick(product)}
              className={`px-5 py-2 border rounded-lg transition-all flex items-center justify-center ${
                selectedProduct === product
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                  : 'bg-transparent border-cyan-500/30 text-gray-400 hover:border-cyan-400/50 hover:text-cyan-300/70'
              }`}
            >
              {product}
            </button>
          ))}
        </div>

        <div className="relative max-w-[700px] mx-auto">
          <ImageWithFallback
            src={productImage}
            alt="제품"
            className="w-full h-auto rounded-[15px] shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
          />

          <AnimatePresence>
            {selectedProduct && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center rounded-[15px] p-4 md:p-8 cursor-pointer"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="text-center text-white max-w-[600px] flex flex-col gap-6 md:gap-6 items-center md:mt-24"
                >
                  <div className="flex flex-col gap-6">
                    <h3 className="text-[1.2rem] md:text-[2rem] leading-tight">
                      {selectedProduct}
                    </h3>
                    <h4 className="text-[0.85rem] md:text-[1.2rem] text-white/80 leading-tight font-[Almarai]">
                      {productData[selectedProduct].subtitle}
                    </h4>
                    <p className="text-[0.85rem] md:text-[1.1rem] leading-relaxed text-white/90">
                      {productData[selectedProduct].description.split(' / ').map((line, index, array) => (
                        <span key={index}>
                          {line}
                          {index < array.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-5 py-2 border rounded-lg transition-all bg-cyan-500/20 border-cyan-400 text-cyan-300 hover:bg-cyan-500/30 hover:scale-105 mt-4"
                  >
                    닫기
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
