import React from 'react';

export const EvaContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div 
            style={{
                width: '100vw',
                height: '100vh',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
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
