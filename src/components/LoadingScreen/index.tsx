"use client";
import { useEffect, useRef, useState } from "react";
import "./LoadingScreen.css";

const tips = [
  "Creepers were originally pigs.",
  "Hackathons respawn you stronger.",
  "48 hours = infinite XP gained.",
  "The best builds start with one block.",
  "Sleep skips the night, not the grind.",
  "Every coder started in Creative Mode.",
  "Diamonds are found at Y-level -58.",
  "QuantCraft 1.0 — your first raid.",
  "Notch coded Minecraft in 6 days.",
  "The End is just a new beginning.",
];

const GRID = 23;
const CELL = 8;
const GAP = 1;
const SIZE = GRID * (CELL + GAP);

function getSpiralOrder(size: number) {
  const cells: [number, number][] = [];
  const center = Math.floor(size / 2);
  let x = 0, y = 0;
  let dx = 0, dy = -1;
  
  for (let i = 0; i < size * size; i++) {
    if (
      -size / 2 < x && x <= size / 2 &&
      -size / 2 < y && y <= size / 2
    ) {
      cells.push([center + x, center + y]);
    }
    if (x === y || (x < 0 && x === -y) || 
        (x > 0 && x === 1 - y)) {
      const temp = dx;
      dx = -dy;
      dy = temp;
    }
    x += dx;
    y += dy;
  }
  return cells;
}

const getChunkColor = (col: number, row: number) => {
  const center = Math.floor(GRID / 2);
  const distToCenter = Math.max(Math.abs(col - center), Math.abs(row - center));
  
  // Special chunks (spawn area 5x5)
  if (distToCenter <= 2) return "#fbbf24";
  
  // Random water chunks
  const pseudoRandom = Math.sin(col * 12.9898 + row * 78.233) * 43758.5453;
  const rand = pseudoRandom - Math.floor(pseudoRandom);
  
  if (rand > 0.85) return "#1a3a6a";
  
  // Standard terrain color
  // Base: #2d5a2d
  // Random variation
  const variation = Math.floor((rand * 20) - 10);
  const r = Math.max(0, 45 + variation);
  const g = Math.max(0, 90 + variation);
  const b = Math.max(0, 45 + variation);
  
  return `rgb(${r}, ${g}, ${b})`;
};

export default function LoadingScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("Preparing spawn area...");
  const [tip, setTip] = useState(tips[0]);
  const [exiting, setExiting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("qc_loaded")) {
      setVisible(false);
      return;
    }
    
    document.body.style.overflow = "hidden";

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initial state: DARK/EMPTY
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(0, 0, SIZE, SIZE);

    const order = getSpiralOrder(GRID);
    let idx = 0;
    const chunksPerFrame = 12; // Adjusted for 23x23 grid

    const tick = () => {
      if (!ctx) return;

      for (let i = 0; i < chunksPerFrame; i++) {
        if (idx >= order.length) break;
        const [col, row] = order[idx];
        
        // LOADING (bright blue)
        ctx.fillStyle = "#4a9eff";
        ctx.fillRect(col * (CELL + GAP), row * (CELL + GAP), CELL, CELL);
        
        // Settle to final color slightly later for flash effect
        const finalColor = getChunkColor(col, row);
        const currentIndex = idx;
        setTimeout(() => {
          if (!ctx) return;
          ctx.fillStyle = finalColor;
          ctx.fillRect(order[currentIndex][0] * (CELL + GAP), order[currentIndex][1] * (CELL + GAP), CELL, CELL);
        }, 20);

        idx++;
      }
      
      const pct = Math.min(100, Math.round((idx / order.length) * 100));
      setProgress(pct);
      
      if (pct < 25) setPhase("Preparing spawn area...");
      else if (pct < 60) setPhase("Loading terrain...");
      else if (pct < 85) setPhase("Generating structures...");
      else setPhase("Finishing up...");

      if (idx < order.length) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(startExit, 400);
      }
    };

    const startTimeout = setTimeout(() => {
      requestAnimationFrame(tick);
    }, 100);

    const tipInterval = setInterval(() => {
      setTip(prev => {
        const currentIdx = tips.indexOf(prev);
        return tips[(currentIdx + 1) % tips.length];
      });
    }, 3000);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(tipInterval);
      document.body.style.overflow = "";
    };
  }, []);

  function startExit() {
    setExiting(true);
    setTimeout(() => {
      sessionStorage.setItem("qc_loaded", "true");
      setVisible(false);
      document.body.style.overflow = "";
    }, 600);
  }

  if (!visible) return null;

  return (
    <div className={`loading-screen ${exiting ? "loading-exit" : ""}`}>
      <img 
        src="/assets/footer/footer logo.png" 
        className="loading-logo" 
        alt="QuantCraft" 
      />
      
      <canvas 
        ref={canvasRef}
        width={SIZE} 
        height={SIZE}
        className="chunk-canvas" 
      />

      <div className="loading-bar-wrap">
        <p className="loading-phase">{phase}</p>
        <div className="loading-bar-outer">
          <div 
            className="loading-bar-fill" 
            style={{ width: `${progress}%` }} 
          />
          <span className="loading-pct">{progress}%</span>
        </div>
      </div>

      <p className="loading-tip">§e {tip}</p>
    </div>
  );
}
