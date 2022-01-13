import { VFC, useMemo } from 'react';
import { css } from '@emotion/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useWindowSize } from '@/utils/customHooks';

type Props = {
  className?: string;
};

export const TopImageSlider: VFC<Props> = ({ className }) => {
  const { width } = useWindowSize();
  const centerPadding = useMemo(() => {
    if (width <= 1200) return '0px';
    return `${(width - 1200) / 2}px`;
  }, [width]);

  return (
    <div css={style(centerPadding)} className={className}>
      <Slider
        centerPadding={centerPadding}
        speed={1000}
        autoplaySpeed={5000}
        slidesToShow={1}
        arrows={false}
        autoplay
        centerMode
        infinite
        dots
      >
        <img src="/images/shop-image.jpg" width={1200} height={500} />
        <img src="/images/cream-puff-image.jpg" width={1200} height={500} />
        <img src="/images/fruit-tart-image.jpg" width={1200} height={500} />
        <img src="/images/pudding-roll-image.jpg" width={1200} height={500} />
      </Slider>
    </div>
  );
};

const style = (centerPadding: string) => css`
  position: relative;

  &:before,
  &:after {
    display: block;
    content: '';
    width: ${centerPadding};
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(255, 255, 255, 0.7);
    background-image: radial-gradient(white 20%, transparent 20%),
      radial-gradient(white 20%, transparent 20%);
    background-size: 10px 10px;
    background-position: 0 0, 5px 5px;
    z-index: 1;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }

  .slick-slider {
    max-height: 500px;
    overflow-y: hidden;

    .slick-dots {
      bottom: 8px;

      button:before {
        color: white;
        font-size: 12px;
      }
    }
  }
`;
