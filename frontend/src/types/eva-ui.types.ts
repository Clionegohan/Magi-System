// 全体の型定義システム
export type EvaColor = 'red' | 'yellow' | 'white' | 'black'
export type SystemStatus = 'normal' | 'warning' | 'error'

export interface BaseEvaProps {
    className?: string;
    children?: React.ReactNode;
}
