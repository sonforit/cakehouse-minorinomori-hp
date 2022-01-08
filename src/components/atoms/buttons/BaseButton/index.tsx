import { VFC, ReactNode } from 'react';
import { css } from '@emotion/core';
import Link from 'next/link';
import { COLOR, FONT_FAMILY, OPACITY } from '@/constants/styles';

type ButtonProps = {
  onClick(): void;
  href: undefined;
};

type LinkProps = {
  onClick: undefined;
  href: string;
};

type Props = (ButtonProps | LinkProps) & {
  className?: string;
  children: ReactNode;
};

export const BaseButton: VFC<Props> = ({ className, children, onClick, href }) => {
  const isLink = !!href;
  const isButton = !!onClick;

  if (isLink) {
    return (
      <Link href={href}>
        <a css={style} className={className}>
          {children}
        </a>
      </Link>
    );
  }

  if (isButton) {
    return (
      <button css={style} className={className} onClick={onClick}>
        {children}
      </button>
    );
  }

  return null;
};

const style = css`
  padding: 0 60px;
  background-color: white;
  border: solid 1px ${COLOR.THEME.PRIMARY};
  border-radius: 34px;
  color: ${COLOR.THEME.PRIMARY};
  font-family: ${FONT_FAMILY.JP.SECONDARY};
  font-size: 18px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 60px;
  cursor: pointer;

  &:hover {
    opacity: ${OPACITY.HOVER};
  }
`;
