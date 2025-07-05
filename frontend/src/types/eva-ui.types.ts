// 全体の型定義システム
import type { ReactNode } from 'react';

export type EvaColor = 'red' | 'yellow' | 'white' | 'black'
export type SystemStatus = 'normal' | 'warning' | 'error'

export interface BaseEvaProps {
    className?: string;
    children?: ReactNode;
}

export type TimeDisplayProps = BaseEvaProps;
