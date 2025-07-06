import React from 'react';
import type { BaseEvaProps, EvaColor } from '../../types/eva-ui.types';
import { EVA_COLORS } from '../../constants/eva-theme';

export interface EvaCornerCutProps extends BaseEvaProps {
  corner: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size: number;
  decorative?: boolean; // 装飾線の有無
  color?: EvaColor;
  lineWidth?: number;
}

export const EvaCornerCut: React.FC<EvaCornerCutProps> = ({
  corner,
  size = 20,
  decorative = true,
  color = 'yellow',
  lineWidth = 2,
  className = ''
}) => {
  const colorValue = EVA_COLORS[color];

  const getCornerStyles = () => {
    const baseStyles = {
      position: 'absolute' as const,
      width: `${size}px`,
      height: `${size}px`,
      border: `${lineWidth}px solid ${colorValue}`,
      pointerEvents: 'none' as const
    };

    switch (corner) {
      case 'top-left':
        return {
          ...baseStyles,
          top: 0,
          left: 0,
          borderRight: 'none',
          borderBottom: 'none',
          clipPath: 'polygon(0 0, 100% 0, 0 100%)'
        };
      case 'top-right':
        return {
          ...baseStyles,
          top: 0,
          right: 0,
          borderLeft: 'none',
          borderBottom: 'none',
          clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
        };
      case 'bottom-left':
        return {
          ...baseStyles,
          bottom: 0,
          left: 0,
          borderRight: 'none',
          borderTop: 'none',
          clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
        };
      case 'bottom-right':
        return {
          ...baseStyles,
          bottom: 0,
          right: 0,
          borderLeft: 'none',
          borderTop: 'none',
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
        };
      default:
        return baseStyles;
    }
  };

  const getDecorativeLineStyles = () => {
    if (!decorative) return null;

    const decorativeSize = size * 0.6;
    const offset = size * 0.2;

    const baseDecorativeStyles = {
      position: 'absolute' as const,
      backgroundColor: colorValue,
      opacity: 0.7
    };

    switch (corner) {
      case 'top-left':
        return [
          {
            ...baseDecorativeStyles,
            width: `${decorativeSize}px`,
            height: '1px',
            top: `${offset}px`,
            left: `${offset}px`
          },
          {
            ...baseDecorativeStyles,
            width: '1px',
            height: `${decorativeSize}px`,
            top: `${offset}px`,
            left: `${offset}px`
          }
        ];
      case 'top-right':
        return [
          {
            ...baseDecorativeStyles,
            width: `${decorativeSize}px`,
            height: '1px',
            top: `${offset}px`,
            right: `${offset}px`
          },
          {
            ...baseDecorativeStyles,
            width: '1px',
            height: `${decorativeSize}px`,
            top: `${offset}px`,
            right: `${offset}px`
          }
        ];
      case 'bottom-left':
        return [
          {
            ...baseDecorativeStyles,
            width: `${decorativeSize}px`,
            height: '1px',
            bottom: `${offset}px`,
            left: `${offset}px`
          },
          {
            ...baseDecorativeStyles,
            width: '1px',
            height: `${decorativeSize}px`,
            bottom: `${offset}px`,
            left: `${offset}px`
          }
        ];
      case 'bottom-right':
        return [
          {
            ...baseDecorativeStyles,
            width: `${decorativeSize}px`,
            height: '1px',
            bottom: `${offset}px`,
            right: `${offset}px`
          },
          {
            ...baseDecorativeStyles,
            width: '1px',
            height: `${decorativeSize}px`,
            bottom: `${offset}px`,
            right: `${offset}px`
          }
        ];
      default:
        return [];
    }
  };

  const decorativeLines = getDecorativeLineStyles();

  return (
    <>
      <div
        className={`eva-corner-cut eva-corner-cut--${corner} ${className}`}
        style={getCornerStyles()}
      />
      {decorative && decorativeLines?.map((lineStyle, index) => (
        <div
          key={`decorative-${corner}-${index}`}
          style={lineStyle}
        />
      ))}
    </>
  );
};

export default EvaCornerCut;
