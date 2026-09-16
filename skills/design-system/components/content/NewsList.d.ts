import * as React from 'react';

export interface NewsItem { date: string; title: string; href?: string }

/** The homepage / お知らせ news list: date column, title, 1px hairline per row. */
export interface NewsListProps {
  items?: NewsItem[];
  style?: React.CSSProperties;
}
export declare function NewsList(props: NewsListProps): JSX.Element;
