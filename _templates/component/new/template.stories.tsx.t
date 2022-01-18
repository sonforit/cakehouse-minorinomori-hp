---
to: "<%= ['layouts', 'templates'].includes(component_type) ? null : `src/components/${component_type}/${path_name}/index.stories.tsx` %>"
---
import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { <%= component_name %> } from '@/components/<%= component_type %>';
import { setCommonSettings } from '@/utils/storybookHelpers';

export default {
  ...setCommonSettings<Props>({
    title: '<%= component_type %>/<%= path_name %>',
    component: <%= component_name %>,
    appendStyle: css``,
    removeControls: ['className'],
  }),
} as Meta;

type Props = ComponentProps<typeof <%= component_name %>>;
const Template: Story<Props> = (args) => <<%= component_name %> {...args} />;
export const Default = Template.bind({});
Default.args = {
  // Write Props
} as Props;