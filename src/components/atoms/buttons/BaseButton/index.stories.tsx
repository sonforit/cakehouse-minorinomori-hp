import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { BaseButton } from '@/components/atoms';
import { setCommonSettings } from '@/utils/storybookHelpers';

export default {
  ...setCommonSettings<Props>({
    title: 'atoms/buttons/BaseButton',
    component: BaseButton,
    appendStyle: css``,
    removeControls: ['className'],
  }),
} as Meta;

type Props = ComponentProps<typeof BaseButton>;
const Template: Story<Props> = (args) => <BaseButton {...args} />;

export const Link = Template.bind({});
Link.args = {
  children: 'これはリンク',
  href: '/',
  onClick: undefined,
} as Props;

export const Button = Template.bind({});
Button.args = {
  children: 'これはボタン',
  onClick: () => console.log('clicked'),
} as Props;
