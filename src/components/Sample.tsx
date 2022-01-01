import { VFC } from 'react';
import { css } from '@emotion/react';

type Props = {
  className?: string;
  label: string;
};

export const Sample: VFC<Props> = ({ className, label }) => (
  <p className={className} css={style}>
    {label}
  </p>
);

const style = css`
  color: red;
`;
