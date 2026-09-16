import * as React from 'react';

/**
 * Homepage feature block: English label, photograph, short Japanese copy, steel CTA.
 * Flat — no border, no radius, no shadow.
 * @startingPoint section="Content" subtitle="Label + photo + copy + steel CTA" viewport="700x400"
 */
export interface FeatureCardProps {
  /** English section label rendered above the image, e.g. "Technology". */
  label?: string;
  image?: string;
  imageAlt?: string;
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  style?: React.CSSProperties;
}
export declare function FeatureCard(props: FeatureCardProps): JSX.Element;
