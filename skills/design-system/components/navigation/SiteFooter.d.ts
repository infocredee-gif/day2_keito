import * as React from 'react';

export interface FooterColumn { title: string; links: string[] }

/**
 * Corporate footer: BUSINESS / TECHNOLOGY / COMPANY link columns, a CONTACT block with
 * the phone number at 24px, Font Awesome brand marks, and the copyright line.
 * @startingPoint section="Navigation" subtitle="Four-column corporate footer" viewport="1280x620"
 */
export interface SiteFooterProps {
  logoSrc?: string;
  columns?: FooterColumn[];
  tel?: string;
  hours?: string;
  company?: string;
  address?: string;
  copyright?: string;
  style?: React.CSSProperties;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
