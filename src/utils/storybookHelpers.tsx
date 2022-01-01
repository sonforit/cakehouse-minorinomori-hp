import { Meta } from '@storybook/react';
import { SerializedStyles } from '@emotion/react';

export function setCommonSettings<TProps>(params: {
  title: Meta['title'];
  component: Meta['component'];
  appendStyle?: SerializedStyles;
  removeControls?: (keyof TProps)[];
}): Meta {
  const { title, component, appendStyle, removeControls } = params;

  const argTypes: Meta['argTypes'] = {};
  removeControls?.forEach((item) => {
    argTypes[item as string] = {
      table: {
        disable: true,
      },
    };
  });

  return {
    title,
    component,
    parameters: {
      docs: {
        source: {
          type: 'dynamic',
          excludeDecorators: true,
        },
      },
    },
    decorators: [(story) => <div css={appendStyle}>{story()}</div>],
    argTypes,
  };
}
