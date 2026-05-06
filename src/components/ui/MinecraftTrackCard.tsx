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
  slug: string;
}

const MinecraftTrackCard: React.FC<MinecraftTrackCardProps> = ({
  trackName,
  accentColor,
  glowColor,
  platformImg,
  titleImg,
  idleImg,
  battleImg,
  slug,
}) => {
  return (
    <div className={`${styles.cardContainer} ${styles[`track-${slug}`]}`} style={{ '--accent-color': accentColor, '--glow-color': glowColor } as React.CSSProperties}>
      {/* Corner bracket spans */}
      <span className={`${styles.cornerBracket} ${styles.cornerTl}`} />
      <span className={`${styles.cornerBracket} ${styles.cornerTr}`} />
      <span className={`${styles.cornerBracket} ${styles.cornerBl}`} />
      <span className={`${styles.cornerBracket} ${styles.cornerBr}`} />

      {/* Corner spark diamonds */}
      <span className={`${styles.spark} ${styles.sparkTl}`} />
      <span className={`${styles.spark} ${styles.sparkTr}`} />
      <span className={`${styles.spark} ${styles.sparkBl}`} />
      <span className={`${styles.spark} ${styles.sparkBr}`} />

      {/* Mech image area */}
      <div className={styles.trackImageWrap}>
        {/* Background Radial Glow */}
        <div className={styles.imageBgGlow} />
        
        {/* Character/Platform Layers */}
        <div className={styles.platformLayer}>
          <img src={platformImg} alt="Platform" className={styles.platformImg} />
        </div>
        
        <div className={styles.charWrapper}>
          <img src={idleImg} alt={`${trackName} Idle`} className={styles.idleChar} />
          <img src={battleImg} alt={`${trackName} Battle`} className={styles.battleChar} />
        </div>
      </div>

      {/* Label separator */}
      <div className={styles.trackSeparator} />

      {/* Track name image instead of text */}
      <div className={styles.trackLabelWrap}>
        <img src={titleImg} alt={trackName} className={styles.titleImg} />
      </div>
    </div>
  );
};

export default MinecraftTrackCard;
