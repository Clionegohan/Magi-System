import React from 'react';
import type { BaseEvaProps, EvaColor } from '../../types/eva-ui.types';
import { EVA_COLORS, EVA_TYPOGRAPHY } from '../../constants/eva-theme';

export interface EvaLabelBoxProps extends BaseEvaProps {
  label: string;
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium';
  color?: EvaColor;
}

export const EvaLabelBox: React.FC<EvaLabelBoxProps> = ({
  label,
  variant = 'primary',
  size = 'small',
  color,
  className = ''
}) => {
  // variantベースのカラー決定
  const getVariantColor = (): EvaColor => {
    if (color) return color;
    return variant === 'primary' ? 'yellow' : 'red';
  };

  const boxColor = getVariantColor();
  const colorValue = EVA_COLORS[boxColor];
  
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          fontSize: '12px',
          padding: '4px 8px',
          letterSpacing: '0.05em'
        };
      case 'medium':
        return {
          fontSize: '14px',
          padding: '6px 12px',
          letterSpacing: '0.08em'
        };
      default:
        return {
          fontSize: '12px',
          padding: '4px 8px',
          letterSpacing: '0.05em'
        };
    }
  };

  const sizeStyles = getSizeStyles();

  return (
    <div
      className={`eva-label-box eva-label-box--${variant} ${className}`}
      style={{
        fontFamily: EVA_TYPOGRAPHY.fonts.mono,
        color: colorValue,
        background: 'rgba(0, 0, 0, 0.9)',
        border: `1px solid ${colorValue}`,
        borderRadius: '0px',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textShadow: `0 0 5px ${colorValue}`,
        boxShadow: `0 0 8px ${colorValue}40`,
        display: 'inline-block',
        ...sizeStyles
      }}
    >
      {label}
    </div>
  );
};

export default EvaLabelBox;