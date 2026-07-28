import { motion } from 'motion/react';
import type { CSSProperties, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Retardo en segundos antes de animar. */
  delay?: number;
  /** Desplazamiento vertical inicial en px. */
  y?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Envuelve contenido para que aparezca con un fade + slide cuando entra
 * en el viewport. Usa el mismo easing que el diseño original.
 */
export default function Reveal({ children, delay = 0, y = 16, className, style }: RevealProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
