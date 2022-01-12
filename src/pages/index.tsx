import type { NextPage } from 'next';
import { GlobalHead } from '@/components/utils';
import { PAGE } from '@/constants/pages';
import { HomeTemplate } from '@/components/templates';
import { EntryCollection, createClient } from 'contentful';
import type { IProductFields } from '@/types/contentful';
import { CATEGORY_DECORATION_ID } from '@/constants/contentful';

type Props = {
  products: EntryCollection<IProductFields>;
};

const Home: NextPage<Props> = ({ products }) => {
  console.log({ products });

  return (
    <div id="page-home">
      <GlobalHead title={PAGE.HOME.LABEL} description={PAGE.HOME.DESCRIPTION} />
      <HomeTemplate />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || '',
  });

  const products = await client.getEntries<IProductFields>({
    content_type: 'product',
    'fields.category.sys.id': CATEGORY_DECORATION_ID,
    limit: 9,
  });

  return {
    props: {
      products,
    },
  };
};
