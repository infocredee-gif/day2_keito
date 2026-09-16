import * as React from 'react';

export interface MegaMenuLink { label: string; href?: string }

/**
 * White 10px-radius panel used for every header mega-menu and the mobile drawer.
 * Corporate menus hover orange; the consumer-shop menus hover teal #00ac97 or pink #f4b2ba.
 */
export interface MegaMenuPanelProps {
  title?: string;
  links?: MegaMenuLink[];
  /** Hover + rule colour. orange-400 (corporate), teal-500, or pink-300. */
  accent?: string;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare function MegaMenuPanel(props: MegaMenuPanelProps): JSX.Element;
