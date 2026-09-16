import * as React from 'react';

/** English mincho section label that opens every major block. */
export interface SectionLabelProps {
  children?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  /** Defaults to 40px; footer column headings use 15px sans instead. */
  size?: string | number;
  color?: string;
  style?: React.CSSProperties;
}
export declare function SectionLabel(props: SectionLabelProps): JSX.Element;
