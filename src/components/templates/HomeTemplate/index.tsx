import { VFC } from 'react';
import { css } from '@emotion/core';
import { TopImageSlider, Section } from '@/components/organisms';
import { FONT_FAMILY, COLOR } from '@/constants/styles';
import { FullWidth } from '@/components/utils';

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
        コンテンツは後から
      </Section>
      <Section titleJp="ニュース" titleEn="News" colored>
        コンテンツは後から
      </Section>
      <Section titleJp="アクセス" titleEn="Access">
        コンテンツは後から
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
