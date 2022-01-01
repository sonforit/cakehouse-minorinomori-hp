import { VFC, Attributes, ReactNode } from 'react';
import { css, jsx, SerializedStyles } from '@emotion/react';
import { MQ } from '@/constants/styles';

type Props = {
  className?: string;
  children: ReactNode;
  as?: Parameters<typeof jsx>[0];
  expansionStyle?: SerializedStyles;
};

export const FullWidth: VFC<Props> = ({ className, children, as = 'div', expansionStyle }) =>
  jsx(
    as,
    { css: style, className } as Attributes,
    <div css={css(innerStyle, expansionStyle)}>{children}</div>,
  );

const style = css`
  width: 100%;
`;

const innerStyle = css`
  max-width: 1280px;
  padding-left: 40px;
  padding-right: 40px;
  margin-left: auto;
  margin-right: auto;

  ${MQ.SP} {
    width: 100%;
    max-width: 100%;
    padding-left: 8px;
    padding-right: 8px;
  }
`;
