---
to: src/components/<%= component_type %>/<%= path_name %>/index.tsx
---
import { VFC } from 'react';
import { css } from '@emotion/core';

type Props = {
  className?: string;
};

export const <%= component_name %>: VFC<Props> = ({ className }) => {
  return (
    <div css={style} className={className}>
      {/* Write Content */}
    </div>
  );
};

const style = css``;