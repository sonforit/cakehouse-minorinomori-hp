import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { TopImageSlider } from '@/components/organisms';
import { setCommonSettings } from '@/utils/storybookHelpers';

export default {
  ...setCommonSettings<Props>({
    title: 'organisms/TopImageSlider',
    component: TopImageSlider,
    appendStyle: css``,
    removeControls: ['className'],
  }),
} as Meta;

type Props = ComponentProps<typeof TopImageSlider>;
const Template: Story<Props> = (args) => <TopImageSlider {...args} />;
export const Default = Template.bind({});
Default.args = {
  // Write Props
} as Props;