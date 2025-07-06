import React, { useState, useEffect } from 'react';
import type { BaseEvaProps } from '../../types/eva-ui.types';
import { EvaDigitalDisplay } from '../atoms/EvaDigitalDisplay';
import { EvaLabelBox } from '../atoms/EvaLabelBox';
import { EvaAngleFrame } from '../atoms/EvaAngleFrame';

export interface TimeZonePanelProps extends BaseEvaProps {
  timeZone: string;
  label: string;
  size?: 'small' | 'medium';
}

export const TimeZonePanel: React.FC<TimeZonePanelProps> = ({
  timeZone,
  label,
  size = 'medium',
  className = ''
}) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('en-US', {
        timeZone: timeZone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setTime(formattedTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, [timeZone]);

  const getDimensions = () => {
    if (size === 'small') {
      return { width: '180px', height: '70px' };
    }
    return { width: '220px', height: '80px' };
  };

  const { width, height } = getDimensions();

  return (
    <div className={`timezone-panel ${className}`}>
      <EvaAngleFrame
        cutDirection="top-left"
        cutSize={15}
        color="yellow"
        width={width}
        height={height}
      >
        <div style={{ textAlign: 'center', width: '100%' }}>
          <EvaLabelBox
            label={label}
            variant="secondary"
            size="small"
            color="red"
          />
          <div style={{ marginTop: '5px' }}>
            <EvaDigitalDisplay
              value={time}
              size={size === 'small' ? 'small' : 'medium'}
              color="yellow"
              segments={true}
            />
          </div>
        </div>
      </EvaAngleFrame>
    </div>
  );
};

export default TimeZonePanel;