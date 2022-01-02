import { VFC } from 'react';
import { css } from '@emotion/core';
import Image from 'next/image';
import Link from 'next/link';
import { FullWidth } from '@/components/utils';
import { COLOR, FONT_FAMILY } from '@/constants/styles';
import { PAGE } from '@/constants/pages';

type Props = {
  className?: string;
};

export const Header: VFC<Props> = ({ className }) => {
  return (
    <FullWidth as="header" css={style} expansionStyle={innerStyle} className={className}>
      <Link href={PAGE.HOME.PATH}>
        <a>
          <Image src="/logos/logo-default.png" width={400} height={66} />
        </a>
      </Link>
      <nav css={navStyle}>
        <ul>
          <li>
            <Link href={PAGE.PRODUCTS.PATH}>
              <a>{PAGE.PRODUCTS.LABEL}</a>
            </Link>
          </li>
          <li>
            <Link href={PAGE.DELIVERY.PATH}>
              <a>{PAGE.DELIVERY.LABEL}</a>
            </Link>
          </li>
          <li>
            <Link href={PAGE.CHEF.PATH}>
              <a>{PAGE.CHEF.LABEL}</a>
            </Link>
          </li>
          <li>
            <Link href={PAGE.ABOUT.PATH}>
              <a>{PAGE.ABOUT.LABEL}</a>
            </Link>
          </li>
        </ul>
      </nav>
    </FullWidth>
  );
};

const style = css`
  height: 100px;
  border-bottom: solid 1px ${COLOR.BORDER.DEFAULT};
`;

const innerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const navStyle = css`
  display: flex;

  > ul {
    display: flex;
    gap: 24px;

    > li {
      display: flex;
      align-items: flex-end;
      height: 28px;

      > a {
        color: ${COLOR.FONT.DEFAULT};
        text-decoration: none;
        font-family: ${FONT_FAMILY.JP.PRIMARY};
        font-size: 20px;
        position: relative;

        &:hover {
          &:after {
            position: absolute;
            bottom: -8px;
            content: '';
            display: block;
            width: 100%;
            height: 4px;
            background-color: ${COLOR.THEME};
            border-radius: 2px;
          }
        }
      }
    }
  }
`;
