import React from 'react';
import type { BaseEvaProps, EvaColor } from '../../types/eva-ui.types';
import { EVA_COLORS } from '../../constants/eva-theme';

export interface EvaAngleFrameProps extends BaseEvaProps {
  cutDirection: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'all';
  cutSize: number; // カットサイズ(px)
  borderWidth?: number;
  color: EvaColor;
  width?: string;
  height?: string;
}

export const EvaAngleFrame: React.FC<EvaAngleFrameProps> = ({
  cutDirection,
  cutSize = 15,
  borderWidth = 2,
  color = 'yellow',
  width = '200px',
  height = '60px',
  className = '',
  children
}) => {
  const colorValue = EVA_COLORS[color];

  const getClipPath = () => {
    const cut = cutSize;
    
    switch (cutDirection) {
      case 'top-left':
        return `polygon(${cut}px 0, 100% 0, 100% 100%, 0 100%, 0 ${cut}px)`;
      case 'top-right':
        return `polygon(0 0, calc(100% - ${cut}px) 0, 100% ${cut}px, 100% 100%, 0 100%)`;
      case 'bottom-left':
        return `polygon(0 0, 100% 0, 100% 100%, ${cut}px 100%, 0 calc(100% - ${cut}px))`;
      case 'bottom-right':
        return `polygon(0 0, 100% 0, 100% calc(100% - ${cut}px), calc(100% - ${cut}px) 100%, 0 100%)`;
      case 'all':
        return `polygon(${cut}px 0, calc(100% - ${cut}px) 0, 100% ${cut}px, 100% calc(100% - ${cut}px), calc(100% - ${cut}px) 100%, ${cut}px 100%, 0 calc(100% - ${cut}px), 0 ${cut}px)`;
      default:
        return 'none';
    }
  };

  return (
    <div
      className={`eva-angle-frame eva-angle-frame--${cutDirection} ${className}`}
      style={{
        width: width,
        height: height,
        border: `${borderWidth}px solid ${colorValue}`,
        borderRadius: 0,
        clipPath: getClipPath(),
        background: 'rgba(0, 0, 0, 0.4)',
        boxShadow: `0 0 10px ${colorValue}40`,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {children}
    </div>
  );
};

export default EvaAngleFrame;
