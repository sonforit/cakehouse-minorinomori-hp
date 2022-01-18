import { VFC } from 'react';
import { css } from '@emotion/core';
import { TopImageSlider, Section, AccessMap } from '@/components/organisms';
import { FONT_FAMILY, COLOR, OPACITY } from '@/constants/styles';
import { FullWidth } from '@/components/utils';
import Link from 'next/link';
import { PAGE } from '@/constants/pages';
import { BaseButton } from '@/components/atoms';
import { Product } from '@/domains/Product';
import { News } from '@/domains/News';
import { ProductCard, NewsCard } from '@/components/molecules';

type Props = {
  className?: string;
  products: Product[];
  news: News[];
};

export const HomeTemplate: VFC<Props> = ({ className, products, news }) => {
  return (
    <div className={className}>
      <TopImageSlider />
      <FullWidth as="div" css={messageStyle}>
        お菓子の焼き上がる素敵な香りがあふれる店内で、
        <br />
        ゆっくりとお好みのお菓子をお選びください。
        <br />
        みのりの森のお菓子たちが、
        <br />
        皆様の素敵なひとときに
        <br />
        華を添えることができたらシアワセです♪
      </FullWidth>
      <Section titleJp="商品" titleEn="Products" colored>
        <ul css={productListStyle}>
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
        <footer css={sectionFooter}>
          <BaseButton href={PAGE.PRODUCTS.PATH}>全ての商品はこちら</BaseButton>
        </footer>
      </Section>
      <Section titleJp="特別なケーキ" titleEn="Special Cake">
        <div css={specialContentsStyle}>
          <Link href={PAGE.CHARACTER_CAKE.PATH}>
            <a>
              <img src="/images/character-cake.png" width={570} height={300} />
            </a>
          </Link>
          <Link href={PAGE.THREE_D_CAKE.PATH}>
            <a>
              <img src="/images/three-d-cake.png" width={570} height={300} />
            </a>
          </Link>
        </div>
      </Section>
      <Section titleJp="ニュース" titleEn="News" colored>
        <ul css={newsListStyle}>
          {news.map((_news) => (
            <li key={_news.id}>
              <NewsCard news={_news} />
            </li>
          ))}
        </ul>
      </Section>
      <Section css={accessSectionStyle} titleJp="アクセス" titleEn="Access" isFullSize>
        <AccessMap />
      </Section>
    </div>
  );
};

const messageStyle = css`
  padding: 100px 0;
  line-height: 2.5;
  font-family: ${FONT_FAMILY.JP.PRIMARY};
  font-size: 24px;
  text-align: center;
  color: ${COLOR.FONT.DEFAULT};
  letter-spacing: 0.2em;
`;

const specialContentsStyle = css`
  display: flex;
  justify-content: center;
  gap: 32px;

  > a {
    &:hover {
      opacity: ${OPACITY.HOVER};
    }
  }
`;

const accessSectionStyle = css`
  padding-bottom: 0;
`;

const sectionFooter = css`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

const productListStyle = css`
  display: flex;
  justify-content: space-between;
  gap: 48px;
  flex-wrap: wrap;

  > li {
    width: 30%;
  }
`;

const newsListStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
