export interface EvaTypography {
    fonts: {
        mono: 'Monaco, "Courier New", monospace' // デジタル時計風
        system: 'Arial, sans-serif'              // システムフォント
        japanese: '"MS Gothic", monospace'      // 日本語フォント
    }

    sizes: {
        clock: '4rem'
        label: '0.8rem'
        status: '1rem'
        button: '0.9rem'
    }

    weights: {
        normal: 400
        bold: 700
        digital: 300
    }
}
