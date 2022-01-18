import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { NewsCard } from '@/components/molecules';
import { setCommonSettings } from '@/utils/storybookHelpers';
import { News } from '@/domains/News';

export default {
  ...setCommonSettings<Props>({
    title: 'molecules/cards/NewsCard',
    component: NewsCard,
    appendStyle: css``,
    removeControls: ['className'],
  }),
} as Meta;

type Props = ComponentProps<typeof NewsCard>;
const Template: Story<Props> = (args) => <NewsCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  news: new News({
    id: 'abc',
    postedAt: new Date(),
    title: 'お知らせのタイトルが入ります',
    content: 'ここにコンテンツが入ります',
  }),
} as Props;
