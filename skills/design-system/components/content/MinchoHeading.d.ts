import * as React from 'react';

/**
 * Mincho headline. Level 1 is the 50px heavy display hero; level 2 is the 36px subhead
 * carrying the brand's 3px orange left rule.
 * @startingPoint section="Content" subtitle="Hero + ruled mincho headings" viewport="700x260"
 */
export interface MinchoHeadingProps {
  level?: 1 | 2 | 3;
  children?: React.ReactNode;
  /** 3px orange left rule + 20/30/30 padding. Defaults on for level 2. */
  rule?: boolean;
  /** Adds the 0 2px 5px text shadow used when type sits on photography. */
  overImage?: boolean;
  color?: string;
  size?: string | number;
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
export declare function MinchoHeading(props: MinchoHeadingProps): JSX.Element;
