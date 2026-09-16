import * as React from 'react';

/** Merit / benefit cell: brand line-illustration above a short claim. */
export interface BenefitItemProps {
  /** Path to one of the brand SVG illustrations in assets/illustrations/. */
  icon?: string;
  title?: string;
  body?: string;
  style?: React.CSSProperties;
}
export declare function BenefitItem(props: BenefitItemProps): JSX.Element;
