import * as React from 'react';

/** Renders one glyph from the brand's two icon fonts. Intentional addition: the source ships the fonts but no wrapper. */
export interface IconProps {
  /** Material Icons ligature ("arrow_forward", "chevron_right") or Font Awesome name without prefix ("caret-down", "instagram"). */
  name: string;
  /** "material" for navigation glyphs, "solid" for FA solid UI glyphs, "brands" for social marks. */
  set?: 'material' | 'solid' | 'brands';
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
