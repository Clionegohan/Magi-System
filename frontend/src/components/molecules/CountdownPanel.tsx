import React from 'react';
import type { BaseEvaProps } from '../../types/eva-ui.types';
import { EvaDigitalDisplay } from '../atoms/EvaDigitalDisplay';
import { EvaLabelBox } from '../atoms/EvaLabelBox';
import { EvaAngleFrame } from '../atoms/EvaAngleFrame';

export interface CountdownPanelProps extends BaseEvaProps {
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownPanel: React.FC<CountdownPanelProps> = ({
  hours = 0,
  minutes = 0, 
  seconds = 0,
  className = ''
}) => {
  const formatTime = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  const timeDisplay = `${formatTime(hours)}h${formatTime(minutes)}m${formatTime(seconds)}s`;

  return (
    <div className={`countdown-panel ${className}`}>
      <EvaAngleFrame
        cutDirection="all"
        cutSize={25}
        color="yellow"
        width="400px"
        height="100px"
      >
        <div style={{ textAlign: 'center', width: '100%' }}>
          <EvaLabelBox
            label="Countdown"
            variant="primary"
            size="small"
            color="yellow"
          />
          <div style={{ marginTop: '8px' }}>
            <EvaDigitalDisplay
              value={timeDisplay}
              size="large"
              color="yellow"
              segments={true}
            />
          </div>
        </div>
      </EvaAngleFrame>
    </div>
  );
};

export default CountdownPanel;