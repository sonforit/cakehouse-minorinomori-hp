import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { Section } from '@/components/organisms';
import { setCommonSettings } from '@/utils/storybookHelpers';

export default {
  ...setCommonSettings<Props>({
    title: 'organisms/Section',
    component: Section,
    appendStyle: css``,
    removeControls: ['className'],
  }),
} as Meta;

type Props = ComponentProps<typeof Section>;
const Template: Story<Props> = (args) => <Section {...args}>ここがコンテンツエリア</Section>;
export const Default = Template.bind({});
Default.args = {
  colored: true,
  titleJp: '商品一覧',
  titleEn: 'Products',
} as Props;
