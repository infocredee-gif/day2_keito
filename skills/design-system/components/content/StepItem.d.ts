import * as React from 'react';

/** One numbered step of a process flow (OEM・ODM 製造フロー has six). */
export interface StepItemProps {
  n: number | string;
  title?: string;
  body?: string;
  style?: React.CSSProperties;
}
export declare function StepItem(props: StepItemProps): JSX.Element;
