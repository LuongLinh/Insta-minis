import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCarouselProps {
  products: Product[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  return (
    <div className="w-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar pl-4 pr-4 gap-3 pb-6 pointer-events-auto items-end">
      {products.map((product) => (
        <div 
          key={product.id}
          className="snap-center shrink-0 w-[270px] h-[82px] bg-white/95 backdrop-blur-sm rounded-xl p-2 shadow-lg flex flex-row gap-3 relative items-center"
        >
          {/* Image Container (Left) */}
          <div className="relative w-[66px] h-[66px] shrink-0 rounded-lg overflow-hidden bg-gray-100">
             <img 
               src={product.imageUrl} 
               alt={product.name} 
               className="w-full h-full object-cover"
             />
             {product.originalPrice && (
                <div className="absolute top-0 left-0 bg-red-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-br-md">
                    SALE
                </div>
             )}
          </div>

          {/* Content (Right) */}
          <div className="flex flex-col flex-1 justify-between h-full py-0.5">
            <div>
                <h3 className="text-gray-900 text-[12px] font-semibold leading-tight line-clamp-1 mb-1">
                    {product.name}
                </h3>
                
                <div className="flex items-center gap-1">
                    <Star size={10} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-[10px] text-gray-600 font-medium">{product.rating}</span>
                    <span className="text-[10px] text-gray-300">•</span>
                    <span className="text-[10px] text-gray-400">1.2k sold</span>
                </div>
            </div>

            <div className="flex items-end justify-between mt-auto">
                <div className="flex items-baseline gap-1.5">
                    <span className="text-red-600 font-bold text-[13px]">{product.currency}{product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                        <span className="text-gray-400 text-[10px] line-through decoration-gray-400">{product.currency}{product.originalPrice.toFixed(2)}</span>
                    )}
                </div>
                
                <button className="bg-pink-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full active:scale-95 transition-transform shadow-sm">
                    Buy Now
                </button>
            </div>
          </div>
        </div>
      ))}
      {/* Spacer for end of list */}
      <div className="w-2 shrink-0" />
    </div>
  );
};