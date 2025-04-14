'use client';
import React from 'react';
import styles from './Odeio.module.css';

const paragraphs = [
  // 1) Paragraph #1
  `Some places aren’t merely points on a map. They are memories, meeting points, and points of interaction.`,
  // 2) Paragraph #2
  `TEDxNTUA returns to the Athens Conservatoire —  a space where tradition meets innovation, where the chaos of sounds transforms into harmony, and where each moment becomes a note in a unique composition.`,
  // 3) Paragraph #3
  `On May 10th, 2025, at the same venue but in a new world, we invite everyone to become part of a new synelixis.`
];

const highlightTargets = [
  'Athens Conservatoire',
  'interaction.',
  'May 10th,',
  '2025,',
  'new synelixis.'
];

export default function Odeio() {
  // A small function to wrap each target string in a <span> with your highlight class.
  const highlightText = (text) => {
    let replaced = text;
    highlightTargets.forEach((target) => {
      if (replaced.includes(target)) {
        const replacement = `<span class="${styles.highlightWord}">${target}</span>`;
        replaced = replaced.replaceAll(target, replacement);
      }
    });
    return replaced;
  };

  return (
    <section className={styles.container}>
      {/* Text Content */}
      <div className={styles.textWrapper}>
        <h2>TEDxNTUA 2025 | Athens Conservatoire</h2>
        {/* Map over paragraphs, highlight the target words, then render */}
        {paragraphs.map((para, index) => {
          const replacedHTML = highlightText(para);
          return (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: replacedHTML }}
            />
          );
        })}
        <div className={styles.locationInfo}>
          <h4>Athens Conservatoire</h4>
          <p>Rigillis &amp; Vassileos Georgiou II 17–19</p>
          <p>Metro Line 3 (“Evangelismos” Station)</p>
        </div>
      </div>

      {/* Row holding Image + Map side by side */}
      <div className={styles.row}>
        <div className={styles.imageWrapper}>
          <img src="/Odeio.png" alt="Athens Conservatoire" />
        </div>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.1631020873133!2d23.743153300000003!3d37.9733228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd41a90a05e7%3A0x243e905afaf27568!2sAthens%20Conservatoire!5e0!3m2!1sen!2sgr!4v1744622092802!5m2!1sen!2sgr"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
