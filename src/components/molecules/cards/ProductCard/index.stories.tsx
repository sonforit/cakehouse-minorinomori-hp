import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { ProductCard } from '@/components/molecules';
import { setCommonSettings } from '@/utils/storybookHelpers';
import { Product } from '@/domains/Product';

export default {
  ...setCommonSettings<Props>({
    title: 'molecules/cards/ProductCard',
    component: ProductCard,
    appendStyle: css`
      width: 360px;
      margin: 32px;
    `,
    removeControls: ['className'],
  }),
} as Meta;

type Props = ComponentProps<typeof ProductCard>;
const Template: Story<Props> = (args) => <ProductCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  product: new Product({
    slug: 'ichigo-short',
    name: '苺のショート',
    prices: [
      {
        price: 3000,
      },
    ],
    imageUrl: 'http://www.minorino-mori.net/wp/wp-content/uploads/2014/07/bana01.jpg',
    description:
      '商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。',
    createdAt: new Date(),
  }),
} as Props;
