"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const GRID = 16;
const CELL_SIZE = 100 / GRID;

const getSpiralOrder = (n: number) => {
  const result = [];
  let rowStart = 0, rowEnd = n - 1;
  let colStart = 0, colEnd = n - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) result.push([rowStart, i]);
    rowStart++;
    for (let i = rowStart; i <= rowEnd; i++) result.push([i, colEnd]);
    colEnd--;
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) result.push([rowEnd, i]);
      rowEnd--;
    }
    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) result.push([i, colStart]);
      colStart++;
    }
  }
  return result;
};

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [filled, setFilled] = useState<boolean[][]>(
    Array(GRID).fill(0).map(() => Array(GRID).fill(false))
  );
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const order = getSpiralOrder(GRID);
    let idx = 0;
    const chunksPerFrame = 75; // Increased by 1.5x

    const tick = () => {
      for (let i = 0; i < chunksPerFrame; i++) {
        if (idx < order.length) {
          const [r, c] = order[idx];
          setFilled(prev => {
            const next = [...prev.map(row => [...row])];
            next[r][c] = true;
            return next;
          });
          idx++;
          setProgress(Math.round((idx / order.length) * 100));
        }
      }

      if (idx < order.length) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "unset";
        }, 800);
      }
    };

    const timer = setTimeout(tick, 200);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#0d1a0d] flex items-center justify-center overflow-hidden"
        >
          {/* Background Grid */}
          <div className="absolute inset-0 grid grid-cols-16 grid-rows-16 w-full h-full opacity-20">
            {Array(GRID * GRID).fill(0).map((_, i) => (
              <div key={i} className="border-[0.5px] border-emerald-500/20" />
            ))}
          </div>

          <div className="relative w-[300px] h-[300px] md:w-[500px] h-[500px]">
            {/* The Spiral Chunks */}
            <div 
              className="absolute inset-0 grid"
              style={{ 
                gridTemplateColumns: `repeat(${GRID}, 1fr)`,
                gridTemplateRows: `repeat(${GRID}, 1fr)`
              }}
            >
              {filled.map((row, r) => 
                row.map((isFilled, c) => (
                  <motion.div
                    key={`${r}-${c}`}
                    initial={false}
                    animate={{ 
                      scale: isFilled ? 1 : 0,
                      opacity: isFilled ? 1 : 0
                    }}
                    className="bg-[#22c55e] border-[0.5px] border-[#0d1a0d]"
                    style={{
                      boxShadow: isFilled ? "inset 0 0 10px rgba(0,0,0,0.5)" : "none"
                    }}
                  />
                ))
              )}
            </div>

            {/* Progress Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-black/80 px-6 py-4 border-4 border-white shadow-[8px_8px_0_#000] flex flex-col items-center"
              >
                <div className="font-minecraft text-white text-lg mb-2">GENERATING WORLD</div>
                <div className="font-minecraft text-[#22c55e] text-2xl">{progress}%</div>
              </motion.div>
              
              <div className="mt-8 font-pixel text-emerald-400 text-xl animate-pulse tracking-[4px]">
                PREPARING ADVENTURE...
              </div>
            </div>
          </div>
          
          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
