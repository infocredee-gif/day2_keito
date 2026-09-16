import * as React from 'react';

/** Text link with a trailing arrow_forward / chevron_right glyph; hovers to brand orange. */
export interface ArrowLinkProps {
  children?: React.ReactNode;
  href?: string;
  /** Material Icons ligature. "arrow_forward" in body copy, "chevron_right" in menus. */
  glyph?: string;
  color?: string;
  size?: string | number;
  style?: React.CSSProperties;
}
export declare function ArrowLink(props: ArrowLinkProps): JSX.Element;
