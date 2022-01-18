import { VFC } from 'react';
import { css } from '@emotion/core';
import { FullWidth } from '@/components/utils';
import { COLOR, FONT_FAMILY } from '@/constants/styles';
import { SHOP_NAME } from '@/constants/settings';

type Props = {
  className?: string;
};

export const Footer: VFC<Props> = ({ className }) => {
  return (
    <FullWidth as="footer" css={style} expansionStyle={innerStyle} className={className}>
      <span>&copy;</span>
      <span>2022</span>
      <span>{SHOP_NAME}</span>
    </FullWidth>
  );
};

const style = css`
  background-color: ${COLOR.BG.FOOTER};
`;

const innerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${FONT_FAMILY.JP.SECONDARY};
  font-size: 16px;
  color: white;
  padding: 56px 0;
`;
