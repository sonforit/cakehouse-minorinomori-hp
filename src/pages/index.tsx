import type { NextPage } from 'next';
import { GlobalHead } from '@/components/utils';
import { PAGE } from '@/constants/pages';
import { HomeTemplate } from '@/components/templates';

const Home: NextPage = () => {
  return (
    <div id="page-home">
      <GlobalHead title={PAGE.HOME.LABEL} description={PAGE.HOME.DESCRIPTION} />
      <HomeTemplate />
    </div>
  );
};

export default Home;
