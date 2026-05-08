# QuantCraft

An immersive, Minecraft-themed hackathon registration and landing page platform. Built to bring the nostalgia and excitement of the world's most popular block-building game directly to the hackathon experience.

## 🚀 Features

- **Immersive Themed UI**: Pixel-art fonts, custom textures, and CSS-driven micro-animations make the website feel like a playable game.
- **Interactive Loading Screen**: Features a nostalgic dirt-block background, a Minecraft-style progress bar, and rotating "tooltips" just like the actual game.
- **Dynamic Hero Section**: Includes floating elements, sponsor logo carousels, and an interactive "Start Hackathon" entry button.
- **Track Cards**: 3D-styled flip cards representing different hackathon tracks, themed around Minecraft blocks (Dirt, Obsidian, Diamond, etc.).
- **Interactive Timeline**: A vertical timeline mapping out the 48-hour event, connected by a dirt-path texture.
- **Prize Chests**: Prize tiers are represented by custom Minecraft chests (Ender, Golden, Emerald, Diamond) with hover animations.
- **Responsive Design**: Carefully optimized to look and feel great on both desktop and mobile devices.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://react.dev/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Custom CSS Modules
- **Icons**: Lucide React

## 🏃 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📁 Project Structure

- `src/app`: Contains the main Next.js App Router pages and layout.
- `src/components`: Reusable UI components.
  - `sections`: Major page sections (Hero, About, Tracks, Timeline, Prizes, FAQ).
  - `ui`: Smaller, reusable elements (Buttons, Cards, Modals).
  - `LoadingScreen`: The initial Minecraft loading experience.
- `public/assets`: Images, fonts, and other static assets (textures, chests, background elements).
