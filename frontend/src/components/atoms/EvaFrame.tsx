import React from 'react';
import type { BaseEvaProps, EvaColor } from '../../types/eva-ui.types';
import { EVA_COLORS } from '../../constants/eva-theme';

export interface EvaFrameProps extends BaseEvaProps {
  padding?: string;
  borderColor?: EvaColor;
}

export const EvaFrame: React.FC<EvaFrameProps> = ({ 
  children, 
  className = '', 
  padding = '20px 30px',
  borderColor = 'red'
}) => {
  const color = EVA_COLORS[borderColor];
  
  return (
    <div 
      className={`eva-frame ${className}`}
      style={{
        border: `2px solid ${color}`,
        borderRadius: '0px',
        padding: padding,
        background: 'rgba(0, 0, 0, 0.3)',
        boxShadow: `0 0 15px ${color}40, inset 0 0 5px ${color}20`,
        backdropFilter: 'blur(2px)'
      }}
    >
      {children}
    </div>
  );
};

export default EvaFrame;
