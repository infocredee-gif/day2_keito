import * as React from 'react';

export interface SpecRow { label: string; value: React.ReactNode }

/** Label/value rows for 会社概要 and product specification blocks. */
export interface SpecTableProps {
  rows?: SpecRow[];
  labelWidth?: number | string;
  style?: React.CSSProperties;
}
export declare function SpecTable(props: SpecTableProps): JSX.Element;
