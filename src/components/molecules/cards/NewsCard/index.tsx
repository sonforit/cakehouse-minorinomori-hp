import { VFC } from 'react';
import { css } from '@emotion/core';
import { News } from '@/domains/News';
import { COLOR } from '@/constants/styles';
import Link from 'next/link';
import { PAGE } from '@/constants/pages';

type Props = {
  className?: string;
  news: News;
};

export const NewsCard: VFC<Props> = ({ className, news }) => {
  return (
    <Link href={`${PAGE.NEWS.PATH}/${news.id}`}>
      <a css={style} className={className}>
        <span className="posted-at">{news.postedAtLabel}</span>
        {news.isNew && <span className="new-icon">NEW</span>}
        <span className="title">{news.title}</span>
      </a>
    </Link>
  );
};

const style = css`
  display: flex;
  align-items: center;
  font-size: 18px;
  height: 24px;
  cursor: pointer;

  &:hover {
    > .title {
      text-decoration: underline;
    }
  }

  > .posted-at {
    margin-right: 24px;
  }

  > .new-icon {
    text-decoration: none !important;
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
