import { VFC } from 'react';
import { css } from '@emotion/core';
import { TopImageSlider, Section, AccessMap } from '@/components/organisms';
import { FONT_FAMILY, COLOR, OPACITY } from '@/constants/styles';
import { FullWidth } from '@/components/utils';
import Link from 'next/link';
import Image from 'next/image';
import { PAGE } from '@/constants/pages';

type Props = {
  className?: string;
};

export const HomeTemplate: VFC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <TopImageSlider />
      <FullWidth as="p" css={messageStyle}>
        お菓子の焼き上がる素敵な香りがあふれる店内で、
        <br />
        ゆっくりとお好みのお菓子をお選びください。
        <br />
        みのりの森のお菓子たちが、
        <br />
        皆様の素敵なひとときに
        <br />
        華を添えることができたらシアワセです♪
      </FullWidth>
      <Section titleJp="おすすめ" titleEn="Recommends" colored>
        コンテンツは後から
      </Section>
      <Section titleJp="特別なケーキ" titleEn="Special Cake">
        <div css={specialContentsStyle}>
          <Link href={PAGE.CHARACTER_CAKE.PATH}>
            <a>
              <Image src="/images/character-cake.png" width={570} height={300} />
            </a>
          </Link>
          <Link href={PAGE.THREE_D_CAKE.PATH}>
            <a>
              <Image src="/images/three-d-cake.png" width={570} height={300} />
            </a>
          </Link>
        </div>
      </Section>
      <Section titleJp="ニュース" titleEn="News" colored>
        コンテンツは後から
      </Section>
      <Section css={accessSectionStyle} titleJp="アクセス" titleEn="Access" isFullSize>
        <AccessMap />
      </Section>
    </div>
  );
};

const messageStyle = css`
  padding: 100px 0;
  line-height: 2.5;
  font-family: ${FONT_FAMILY.JP.PRIMARY};
  font-size: 24px;
  text-align: center;
  color: ${COLOR.FONT.DEFAULT};
  letter-spacing: 0.2em;
`;

const specialContentsStyle = css`
  display: flex;
  justify-content: center;
  gap: 32px;

  > a {
    &:hover {
      opacity: ${OPACITY.HOVER};
    }
  }
`;

const accessSectionStyle = css`
  padding-bottom: 0;
`;
