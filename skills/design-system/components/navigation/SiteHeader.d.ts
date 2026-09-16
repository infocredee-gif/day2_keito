import * as React from 'react';

export interface SiteHeaderItem { label: string; href?: string; menu?: boolean }

/**
 * The corporate site header: left CREDEE mark, right-aligned 15px nav with FA caret-down
 * on items that open a mega-menu, an external shop link and a hamburger.
 * @startingPoint section="Navigation" subtitle="Transparent corporate header" viewport="1280x140"
 */
export interface SiteHeaderProps {
  logoSrc?: string;
  items?: SiteHeaderItem[];
  activeLabel?: string;
  onSelect?: (item: SiteHeaderItem) => void;
  onMenu?: () => void;
  /** 12px gutter + 56px logo, the site's narrow-viewport treatment. */
  compact?: boolean;
  style?: React.CSSProperties;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
