import React from 'react';
import useTime from '../../hooks/useTime';
import type { TimeDisplayProps } from '../../types/eva-ui.types';
import { EVA_STYLES } from '../../constants/eva-theme';

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ 
    className = ''
}) => {
    const { formattedTime } = useTime();

    return (
        <div 
            className={`eva-time-display ${className}`}
            style={EVA_STYLES.timeDisplay}
        >
            {formattedTime}
        </div>
    );
};

export default TimeDisplay;
