import { VFC } from 'react';
import { css } from '@emotion/core';
import type { Product } from '@/domains/Product';
import Image from 'next/image';
import Link from 'next/link';
import { PAGE } from '@/constants/pages';
import { COLOR, FONT_FAMILY } from '@/constants/styles';

type Props = {
  className?: string;
  product: Product;
};

export const ProductCard: VFC<Props> = ({ className, product }) => {
  return (
    <Link href={`${PAGE.PRODUCTS.PATH}/${product.id}`}>
      <a css={style} className={className}>
        {product.getIsNew() && <span css={newTagStyle}>New</span>}
        <div className="image-area">
          <Image src={product.imageUrls[0]} width={320} height={180} />
        </div>
        <div className="content">
          <span className="name">{product.name}</span>
          <span className="price">{product.getPriceLabel()}</span>
        </div>
      </a>
    </Link>
  );
};

const style = css`
  display: block;
  border-radius: 5px;
  box-shadow: 0 0 8px grey;
  overflow: hidden;
  position: relative;
  color: ${COLOR.FONT.DEFAULT};

  > .image-area {
    width: 100%;
    height: 180px;
    position: relative;

    &:after {
      display: block;
      content: '';
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      border: solid 1px ${COLOR.BORDER.IMAGE_DECO};
    }

    img {
      object-fit: cover;
    }
  }

  > .content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    > .name {
      font-family: ${FONT_FAMILY.JP.PRIMARY};
      font-size: 28px;
    }

    > .price {
      color: ${COLOR.THEME.SECONDARY};
      font-family: ${FONT_FAMILY.JP.SECONDARY};
      font-size: 18px;
      font-weight: bold;
    }
  }
`;

const newTagStyle = css`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  background: ${COLOR.THEME.PRIMARY};
  border-radius: 50%;
  z-index: 1;
  font-family: ${FONT_FAMILY.EN.HEADING};
  opacity: 0.9;
  top: 8px;
  right: 8px;
  box-shadow: 0 0 8px white;

  &:before {
    content: '';
    position: absolute;
    bottom: -12px;
    left: -12px;
    margin-top: -15px;
    border: 15px solid transparent;
    border-left: 15px solid ${COLOR.THEME.PRIMARY};
    z-index: 0;
    transform: rotate(135deg);
  }
`;
