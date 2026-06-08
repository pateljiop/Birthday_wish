import { ReactNode } from 'react';

interface SafeMotionDivProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function SafeMotionDiv({ children, className, style, onClick }: SafeMotionDivProps) {
  return (
    <div className={className} style={style} onClick={onClick}>
      {children}
    </div>
  );
}
