// テーマ定数(カラーを除く)

// 固定解像度
export const EVA_LAYOUT = {
    display: {
        width: 1920,
        height: 1080,
        aspectRatio: 16 / 9
    }
} as const;

export const EVA_TYPOGRAPHY = {
    fonts: {
        mono: '"Courier New", Monaco, "Consolas", monospace',
        system: 'Arial, "Helvetica Neue", sans-serif'
    },

    fontSize: {
        display: '48px',
        normal: '16px'
    }
} as const;
