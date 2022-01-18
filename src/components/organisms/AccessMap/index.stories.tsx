import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { AccessMap } from '@/components/organisms';
import { setCommonSettings } from '@/utils/storybookHelpers';

export default {
  ...setCommonSettings<Props>({
    title: 'organisms/AccessMap',
    component: AccessMap,
    appendStyle: css``,
    removeControls: ['className'],
  }),
} as Meta;

type Props = ComponentProps<typeof AccessMap>;
const Template: Story<Props> = (args) => <AccessMap {...args} />;
export const Default = Template.bind({});
Default.args = {
  // Write Props
} as Props;