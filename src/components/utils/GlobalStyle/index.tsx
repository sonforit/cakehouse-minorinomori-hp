import { VFC } from 'react';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const GlobalStyle: VFC = () => (
  <Global
    styles={css(
      emotionReset,
      css`
        * {
          box-sizing: border-box;
        }

        #app {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        main {
          flex: 1;
          overflow-x: hidden;
        }
      `,
    )}
  />
);
