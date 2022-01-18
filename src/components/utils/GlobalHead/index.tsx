import { VFC } from 'react';
import Head from 'next/head';
import { SHOP_NAME } from '@/constants/settings';

type Props = {
  title?: string;
  description?: string;
  imageUrl?: string;
  pageType?: 'website' | 'blog' | 'article' | 'product' | 'profile';
};

export const GlobalHead: VFC<Props> = ({ title, description, imageUrl, pageType }) => (
  <Head>
    {title && <title>{`${title} | ${SHOP_NAME}`}</title>}
    {description && <meta name="description" content={description} />}
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    {imageUrl && <meta property="og:image" content={imageUrl} />}
    {pageType && <meta property="og:type" content={pageType} />}
  </Head>
);
