import React from 'react';
import styles from './badge.module.css';

export default function Badge({ bg, children }) {
  return (
    <span className={`${styles.badge} ${styles[bg]}`}>
      {children}
    </span>
  );
}