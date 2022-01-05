import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { CompanyCard } from '@/components/molecules';
import { setCommonSettings } from '@/utils/storybookHelpers';

export default {
  ...setCommonSettings<Props>({
    title: 'molecules/cards/CompanyCard',
    component: CompanyCard,
    appendStyle: css``,
    removeControls: ['className'],
  }),
} as Meta;

type Props = ComponentProps<typeof CompanyCard>;
const Template: Story<Props> = (args) => <CompanyCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  // Write Props
} as Props;