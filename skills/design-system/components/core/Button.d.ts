import * as React from 'react';

/**
 * Square CTA button in the four fills the site uses: orange primary,
 * white secondary (over imagery), steel-blue tertiary (inside cards), hairline outline.
 * @startingPoint section="Core" subtitle="Orange / white / steel CTA buttons" viewport="700x220"
 */
export interface ButtonProps {
  /** Fill. primary = orange #f2780e, tertiary = steel #385c7c. */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  /** lg = 317x75 hero CTA, md = 280x68 card CTA, sm = compact. */
  size?: 'lg' | 'md' | 'sm';
  children?: React.ReactNode;
  /** Material Icons ligature name, e.g. "arrow_forward". Pushed to the right edge. */
  icon?: string;
  href?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
