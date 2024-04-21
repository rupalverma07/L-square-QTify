import React from 'react';
import heroImg from '../../assets/hero_headphones.png';
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.heroText}>
            <p>100 Thousand Songs, ad-free</p>
            <p>Over thousands podcast episodes</p>
        </div>
        <div>
            <img src={heroImg} alt='hero' className={styles.heroImage}/>
        </div>
      </div>
    </div>
  )
}

export default Hero;
