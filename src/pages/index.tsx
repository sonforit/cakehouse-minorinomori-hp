import type { NextPage } from 'next';
import { GlobalHead } from '@/components/utils';
import { PAGE } from '@/constants/pages';
import { HomeTemplate } from '@/components/templates';
import { EntryCollection, createClient } from 'contentful';
import type { IProductFields, INewsFields } from '@/types/contentful';
import { CATEGORY_DECORATION_ID } from '@/constants/contentful';
import { convertProduct } from '@/domains/Product/converter';
import { convertNews } from '@/domains/News/converter';

type Props = {
  fetchProductsRespose: EntryCollection<IProductFields>;
  fetchNewsRespose: EntryCollection<INewsFields>;
};

const Home: NextPage<Props> = ({ fetchProductsRespose, fetchNewsRespose }) => {
  const products = fetchProductsRespose.items.map(convertProduct);
  const news = fetchNewsRespose.items.map(convertNews);

  return (
    <div id="page-home">
      <GlobalHead title={PAGE.HOME.LABEL} description={PAGE.HOME.DESCRIPTION} />
      <HomeTemplate products={products} news={news} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || '',
  });

  const fetchProductsRespose = await client.getEntries<IProductFields>({
    content_type: 'product',
    'fields.category.sys.id': CATEGORY_DECORATION_ID,
    limit: 9,
  });

  const fetchNewsRespose = await client.getEntries<INewsFields>({
    content_type: 'news',
    order: '-fields.postedAt',
  });

  return {
    props: {
      fetchProductsRespose,
      fetchNewsRespose,
    },
  };
};
