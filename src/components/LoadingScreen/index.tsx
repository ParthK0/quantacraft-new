"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const GRID = 43;
const CELL = 8;
const GAP = 1;
const SIZE = GRID * (CELL + GAP);

const TIPS = [
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

const COLORS = {
  EMPTY: "#1a1a1a",
  QUEUED: "#2d2d2d",
  LOADING: "#4a9eff",
  TERRAIN: "#3a7a3a",
  FULL: "#2d5a2d",
  SPECIAL: "#fbbf24",
  WATER: "#1a3a6a",
  HIGHLIGHT: "#ffffff",
};

export default function LoadingScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("Preparing spawn area...");
  const [tip, setTip] = useState(TIPS[0]);
  const [exiting, setExiting] = useState(false);
  const [visible, setVisible] = useState(true);

  // Spiral order calculation
  const getSpiralOrder = (size: number) => {
    const cells: [number, number][] = [];
    const center = Math.floor(size / 2);
    let x = 0, y = 0;
    let dx = 0, dy = -1;

    for (let i = 0; i < size * size; i++) {
      if (-size / 2 < x && x <= size / 2 && -size / 2 < y && y <= size / 2) {
        cells.push([center + x, center + y]);
      }
      if (x === y || (x < 0 && x === -y) || (x > 0 && x === 1 - y)) {
        [dx, dy] = [-dy, dx];
      }
      x += dx;
      y += dy;
    }
    return cells;
  };

  const getChunkColor = (col: number, row: number) => {
    // Spawn area
    const center = Math.floor(GRID / 2);
    if (Math.abs(col - center) <= 2 && Math.abs(row - center) <= 2) {
      return COLORS.SPECIAL;
    }
    // Water simulation (random clusters)
    const noise = Math.sin(col * 0.2) + Math.cos(row * 0.2);
    if (noise > 1.2) return COLORS.WATER;

    // Normal terrain with slight variation
    const variation = Math.floor(Math.random() * 20) - 10;
    const baseColor = COLORS.FULL;
    // Simple hex darken/lighten logic for variety
    return baseColor;
  };

  const drawChunk = (ctx: CanvasRenderingContext2D, col: number, row: number, color: string) => {
    ctx.fillStyle = color;
    ctx.fillRect(col * (CELL + GAP), row * (CELL + GAP), CELL, CELL);
  };

  useEffect(() => {
    if (sessionStorage.getItem("qc_loaded_java")) {
      setVisible(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initial fill
    ctx.fillStyle = COLORS.EMPTY;
    ctx.fillRect(0, 0, SIZE, SIZE);

    const order = getSpiralOrder(GRID);
    let idx = 0;
    const chunksPerFrame = 32; // Reverted from 50

    const tick = () => {
      for (let i = 0; i < chunksPerFrame; i++) {
        if (idx >= order.length) break;
        const [col, row] = order[idx];

        // Active load flash
        drawChunk(ctx, col, row, COLORS.LOADING);

        // Settle into terrain color
        const color = getChunkColor(col, row);
        setTimeout(() => {
          drawChunk(ctx, col, row, color);
        }, 30); // Faster settling

        idx++;
      }

      const pct = Math.round((idx / (GRID * GRID)) * 100);
      setProgress(pct);

      if (pct < 30) setPhase("Preparing spawn area...");
      else if (pct < 60) setPhase("Loading terrain...");
      else if (pct < 90) setPhase("Generating structures...");
      else setPhase("Finishing up...");

      if (idx < order.length) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => {
            sessionStorage.setItem("qc_loaded_java", "true");
            setVisible(false);
            document.body.style.overflow = "";
          }, 600); // Reverted from 800ms
        }, 400); // Shorter pause at 100%
      }
    };

    const startTimeout = setTimeout(() => {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(tick);
    }, 500);

    const tipInterval = setInterval(() => {
      setTip(TIPS[Math.floor(Math.random() * TIPS.length)]);
    }, 3000);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(tipInterval);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loading-screen ${exiting ? "loading-exit" : ""}`}>
      <motion.img
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        src="/assets/footer/footer logo.png"
        className="loading-logo"
        alt="QuantCraft"
      />

      <div className="canvas-container">
        <canvas
          ref={canvasRef}
          width={SIZE}
          height={SIZE}
          className="chunk-canvas"
        />
      </div>

      <div className="loading-bar-wrap">
        <p className="loading-phase text-center mb-2">{phase}</p>
        <div className="loading-bar-outer">
          <div
            className="loading-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center mt-2 font-pixel text-[10px] text-white/50">
          {progress}%
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={tip}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="loading-tip"
        >
          <span className="text-[#fbbf24]">§e</span> {tip}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
