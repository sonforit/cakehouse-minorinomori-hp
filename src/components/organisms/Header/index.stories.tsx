import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { Header } from '.';
import { setCommonSettings } from '@/utils/storybookHelpers';

export default {
  ...setCommonSettings<Props>({
    title: 'organisms/Header',
    component: Header,
    appendStyle: css``,
    removeControls: ['className'],
  }),
} as Meta;

type Props = ComponentProps<typeof Header>;
const Template: Story<Props> = (args) => <Header {...args} />;
export const Default = Template.bind({});
Default.args = {
  // Write Props
} as Props;
