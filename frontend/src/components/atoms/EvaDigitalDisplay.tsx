import React from 'react';
import type { BaseEvaProps, EvaColor } from '../../types/eva-ui.types';
import { EVA_COLORS, EVA_TYPOGRAPHY } from '../../constants/eva-theme';

export interface EvaDigitalDisplayProps extends BaseEvaProps {
  value: string | number;
  size: 'small' | 'medium' | 'large';
  color: EvaColor;
  segments?: boolean; // 7セグメント風か否か
  padding?: string;
}

export const EvaDigitalDisplay: React.FC<EvaDigitalDisplayProps> = ({
  value,
  size = 'medium',
  color = 'yellow',
  segments = false,
  padding = '10px 15px',
  className = ''
}) => {
  const colorValue = EVA_COLORS[color];
  
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { fontSize: '24px', letterSpacing: '0.05em' };
      case 'medium':
        return { fontSize: EVA_TYPOGRAPHY.fontSize.display, letterSpacing: '0.1em' };
      case 'large':
        return { fontSize: '72px', letterSpacing: '0.15em' };
      default:
        return { fontSize: EVA_TYPOGRAPHY.fontSize.display, letterSpacing: '0.1em' };
    }
  };

  const sizeStyles = getSizeStyles();

  return (
    <div
      className={`eva-digital-display ${className}`}
      style={{
        fontFamily: EVA_TYPOGRAPHY.fonts.mono,
        color: colorValue,
        background: 'rgba(0, 0, 0, 0.8)',
        border: `2px solid ${colorValue}`,
        borderRadius: '0px',
        padding: padding,
        textAlign: 'center',
        textShadow: `0 0 10px ${colorValue}, 0 0 20px ${colorValue}40, 0 0 30px ${colorValue}20`,
        boxShadow: `0 0 15px ${colorValue}60, inset 0 0 10px ${colorValue}20`,
        backdropFilter: 'blur(1px)',
        fontWeight: segments ? 'bold' : 'normal',
        fontVariantNumeric: segments ? 'tabular-nums' : 'normal',
        ...sizeStyles
      }}
    >
      {value}
    </div>
  );
};

export default EvaDigitalDisplay;