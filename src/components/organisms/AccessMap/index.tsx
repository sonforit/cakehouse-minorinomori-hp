import { VFC } from 'react';
import { css } from '@emotion/core';
import { CompanyCard } from '@/components/molecules';

type Props = {
  className?: string;
};

const mapSettings = {
  point: 'ケーキハウスみのりの森',
  mapType: 'm',
  zoomLevel: '16',
};

export const AccessMap: VFC<Props> = ({ className }) => {
  return (
    <div css={style} className={className}>
      <iframe
        src={`https://maps.google.co.jp/maps?output=embed&q=${mapSettings.point}&t=${mapSettings.mapType}&z=${mapSettings.zoomLevel}&ll=${mapSettings.mapPosition}`}
        width="100%"
        height="auto"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <CompanyCard className="company-card" />
    </div>
  );
};

const style = css`
  position: relative;
  padding-bottom: 40%;
  height: 0;
  overflow: hidden;

  > iframe {
    border: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  > .company-card {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
