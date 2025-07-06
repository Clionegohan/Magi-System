import React from 'react';
import { EVA_COLORS } from '../../constants/eva-theme';

export const EvaContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div 
            style={{
                width: '100vw',
                height: '100vh',
                background: EVA_COLORS.black,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
            }}
        >
            {children}
        </div>
    );
};
