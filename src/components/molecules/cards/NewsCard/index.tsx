import { VFC } from 'react';
import { css } from '@emotion/core';
import { News } from '@/domains/News';
import { COLOR } from '@/constants/styles';

type Props = {
  className?: string;
  news: News;
};

export const NewsCard: VFC<Props> = ({ className, news }) => {
  return (
    <div css={style} className={className}>
      <span className="posted-at">{news.postedAtLabel}</span>
      {news.isNew && <span className="new-icon">NEW</span>}
      <span className="title">{news.title}</span>
    </div>
  );
};

const style = css`
  display: flex;
  align-items: center;
  font-size: 18px;

  > .posted-at {
    margin-right: 24px;
  }

  > .new-icon {
    margin-right: 12px;
    border: solid 1px ${COLOR.NEW};
    color: ${COLOR.NEW};
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 24px;
    border-radius: 5px;
    font-weight: bold;
    flex-shrink: 0;
  }

  > .title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
  }
`;
