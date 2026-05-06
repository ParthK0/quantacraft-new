"use client";

import React from 'react';
import styles from './MinecraftTrackCard.module.css';

interface MinecraftTrackCardProps {
  trackName: string;
  accentColor: string;
  glowColor: string;
  platformImg: string;
  titleImg: string;
  idleImg: string;
  battleImg: string;
}

const MinecraftTrackCard: React.FC<MinecraftTrackCardProps> = ({
  trackName,
  accentColor,
  glowColor,
  platformImg,
  titleImg,
  idleImg,
  battleImg,
}) => {
  return (
    <div 
      className={styles.cardContainer}
      style={{ 
        '--accent-color': accentColor, 
        '--glow-color': glowColor 
      } as React.CSSProperties}
    >
      {/* Scanline & Shimmer */}
      <div className={styles.scanline} />
      <div className={styles.shimmer} />

      {/* Platform Layer */}
      <img 
        src={platformImg} 
        alt="Platform" 
        className={styles.platform} 
      />

      {/* Character Layer (on top of platform) */}
      <div className={styles.charWrapper}>
        <img 
          src={idleImg} 
          alt={`${trackName} Idle`} 
          className={styles.idleChar} 
        />
        <img 
          src={battleImg} 
          alt={`${trackName} Battle`} 
          className={styles.battleChar} 
        />
      </div>

      {/* Info Layer (Title Image below platform) */}
      <div className={styles.infoWrapper}>
        <img 
          src={titleImg} 
          alt={trackName} 
          className={styles.titleImg} 
        />
      </div>
    </div>
  );
};

export default MinecraftTrackCard;
