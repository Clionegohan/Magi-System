import React from 'react';
import useTime from '../../hooks/useTime';
import type { TimeDisplayProps } from '../../types/eva-ui.types';
import { EvaDigitalDisplay } from '../atoms/EvaDigitalDisplay';
import { EvaLabelBox } from '../atoms/EvaLabelBox';
import { EvaAngleFrame } from '../atoms/EvaAngleFrame';

const FLAME_CONFIG = {
    cutDirection: 'all' as const,
    cutSize: 20,
    color: 'yellow' as const,
    width: '300px',
    height: '120px',
} as const;

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ 
    className = ''
}) => {
    const { formattedTime } = useTime();

    return (
        <div className={`eva-time-display-container ${className}`} style={{ position: 'relative' }}>
            <EvaAngleFrame 
                cutDirection = {FLAME_CONFIG.cutDirection}
                cutSize = {FLAME_CONFIG.cutSize}
                color = {FLAME_CONFIG.color}
                width = {FLAME_CONFIG.width}
                height = {FLAME_CONFIG.height}
            >
                <div style={{ textAlign: 'center' }}>
                    <EvaLabelBox 
                        label="LIVE TIME" 
                        variant="primary" 
                        size="small"
                        color="yellow"
                    />
                    <div style={{ margin: '10px 0' }}>
                        <EvaDigitalDisplay 
                            value={formattedTime}
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

export default TimeDisplay;
