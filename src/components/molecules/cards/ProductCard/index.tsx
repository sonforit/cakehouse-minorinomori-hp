import { VFC } from 'react';
import { css } from '@emotion/core';
import type { Product } from '@/domains/Product';
import Link from 'next/link';
import { PAGE } from '@/constants/pages';
import { COLOR, FONT_FAMILY, OPACITY } from '@/constants/styles';

type Props = {
  className?: string;
  product: Product;
};

export const ProductCard: VFC<Props> = ({ className, product }) => {
  return (
    <Link href={`${PAGE.PRODUCTS.PATH}/${product.slug}`}>
      <a css={style} className={className}>
        {product.isNew && <span css={newTagStyle}>New</span>}
        <div className="image-area">
          <div className="image-wrapper">
            <img
              src={`${product.imageUrl}?w=360`}
              width={360}
              height={270}
              alt={`${product.name}の画像`}
            />
          </div>
        </div>
        <div className="content">
          <span className="category">{product.category.name}</span>
          <span className="name">{product.name}</span>
          <span className="price">{product.minPriceLabel}</span>
        </div>
      </a>
    </Link>
  );
};

const style = css`
  display: block;
  border-radius: 5px;
  box-shadow: 0 4px 12px ${COLOR.SHADOW.CARD};
  overflow: hidden;
  position: relative;
  color: ${COLOR.FONT.DEFAULT};
  cursor: pointer;

  &:hover {
    opacity: ${OPACITY.HOVER};

    img {
      transform: scale(1.1);
    }
  }

  > .image-area {
    width: 100%;
    height: 0;
    padding-top: 75%;
    position: relative;
    background-color: ${COLOR.THEME.SECONDARY};

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

    > .image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      img {
        object-fit: cover;
        transition: all 5s ease;
        width: 100%;
        height: 100%;
      }
    }
  }

  > .content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    > .category {
      width: fit-content;
      background-color: ${COLOR.THEME.SECONDARY};
      color: white;
      font-size: 12px;
      padding: 4px 8px;
      text-decoration: none;
    }

    > .name {
      font-family: ${FONT_FAMILY.JP.PRIMARY};
      font-size: 22px;
      font-weight: bold;
    }

    > .price {
      color: ${COLOR.THEME.SECONDARY};
      font-family: ${FONT_FAMILY.JP.SECONDARY};
      font-size: 16px;
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
