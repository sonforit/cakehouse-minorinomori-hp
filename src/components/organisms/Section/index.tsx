import { VFC, ReactNode } from 'react';
import { css } from '@emotion/core';
import { FullWidth } from '@/components/utils';
import { COLOR, FONT_FAMILY } from '@/constants/styles';

type Props = {
  className?: string;
  colored?: boolean;
  titleJp: string;
  titleEn: string;
  children: ReactNode;
  isFullSize?: boolean;
};

export const Section: VFC<Props> = ({
  className,
  colored = false,
  titleJp,
  titleEn,
  children,
  isFullSize = false,
}) => {
  return (
    <FullWidth
      as="section"
      css={style(colored)}
      expansionStyle={innerStyle(isFullSize)}
      className={className}
    >
      <h2 css={titleStyle}>
        <span className="title-jp">{titleJp}</span>
        <span className="title-en">{titleEn}</span>
      </h2>
      {children}
    </FullWidth>
  );
};

const style = (colored: boolean) => css`
  background-color: ${colored ? COLOR.BG.SECTION : 'white'};
  padding-top: 78px;
  padding-bottom: 100px;
`;

const innerStyle = (isFullSize: boolean) =>
  isFullSize
    ? css`
        width: 100%;
        max-width: 100%;
        padding-left: 0;
        padding-right: 0;
      `
    : undefined;

const titleStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 60px;

  &:after {
    display: block;
    content: '';
    width: 100px;
    height: 1px;
    border-bottom: dotted 1px ${COLOR.THEME.SECONDARY};
  }

  > .title-jp {
    color: ${COLOR.THEME.PRIMARY};
    font-size: 44px;
    font-family: ${FONT_FAMILY.JP.PRIMARY};
  }

  > .title-en {
    color: ${COLOR.THEME.SECONDARY};
    font-size: 24px;
    font-family: ${FONT_FAMILY.EN.HEADING};
  }
`;
