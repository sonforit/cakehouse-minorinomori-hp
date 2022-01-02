import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { Footer } from '@/components/organisms';
import { setCommonSettings } from '@/utils/storybookHelpers';

export default {
  ...setCommonSettings<Props>({
    title: 'organisms/Footer',
    component: Footer,
    appendStyle: css``,
    removeControls: ['className'],
  }),
} as Meta;

type Props = ComponentProps<typeof Footer>;
const Template: Story<Props> = (args) => <Footer {...args} />;
export const Default = Template.bind({});
Default.args = {
  // Write Props
} as Props;
