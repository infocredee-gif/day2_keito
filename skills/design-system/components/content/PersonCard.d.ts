import * as React from 'react';

/** Portrait + role + name block (代表挨拶, 研究者紹介). */
export interface PersonCardProps {
  photo?: string;
  /** Affiliation lines, e.g. "工学博士 / 元 大阪府立高専 教授". Line breaks welcome. */
  role?: React.ReactNode;
  name?: string;
  align?: 'left' | 'center';
  width?: number | string;
  style?: React.CSSProperties;
}
export declare function PersonCard(props: PersonCardProps): JSX.Element;
