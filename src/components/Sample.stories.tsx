import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { Sample } from './Sample';
import { setCommonSettings } from '@/utils/storybookHelpers';
import { action } from '@storybook/addon-actions';

export default {
  ...setCommonSettings<Props>({
    title: 'Sample',
    component: Sample,
    appendStyle: css`
      margin: 50px;
    `,
    removeControls: ['className'],
  }),
} as Meta;

type Props = ComponentProps<typeof Sample>;
const Template: Story<Props> = (args) => (
  <>
    <Sample {...args} />
    <button onClick={action('click')}>button</button>
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: 'hoge',
} as Props;
