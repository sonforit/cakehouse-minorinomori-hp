import { VFC } from 'react';
import { css } from '@emotion/core';
import { COLOR, FONT_FAMILY, LINE_HEIGHT } from '@/constants/styles';

type Props = {
  className?: string;
};

export const CompanyCard: VFC<Props> = ({ className }) => {
  return (
    <div css={style} className={className}>
      <header>
        <img src="/logos/logo-default.png" width={240} height={40} />
      </header>

      <dl>
        <div>
          <dt>住所</dt>
          <dd>
            〒830-0079
            <br />
            福岡県久留米市大善寺大橋1丁目9-26
          </dd>
        </div>
        <div>
          <dt>TEL</dt>
          <dd>0942-27-2525</dd>
        </div>
        <div>
          <dt>営業時間</dt>
          <dd>10:00～19:00</dd>
        </div>
        <div>
          <dt>定休日</dt>
          <dd>
            毎週木曜日
            <br />※ 祝日とイベント時は営業しています。
          </dd>
        </div>
      </dl>
    </div>
  );
};

const style = css`
  width: 400px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 16px;
  border: solid 1px ${COLOR.BORDER.DEFAULT};

  > header {
    text-align: center;
  }

  > dl {
    margin-top: 16px;

    > div {
      border-top: solid 1px ${COLOR.BORDER.DEFAULT};
      padding: 16px 0;
      font-size: 14px;
      font-family: ${FONT_FAMILY.JP.SECONDARY};
      display: flex;

      &:last-of-type {
        border-bottom: solid 1px ${COLOR.BORDER.DEFAULT};
      }

      > dt,
      > dd {
        display: flex;
        align-items: center;
      }

      > dt {
        width: 80px;
        font-weight: bold;
        flex-shrink: 0;
      }

      > dd {
        line-height: ${LINE_HEIGHT.DEFAULT};
      }
    }
  }
`;
