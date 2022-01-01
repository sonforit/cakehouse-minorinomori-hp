const BREAK_POINT = {
  SP: 768,
  TB: 1024,
} as const;

export const MQ = {
  SP: `@media (max-width: ${BREAK_POINT.SP}px)`,
  NOT_SP: `@media (min-width: ${BREAK_POINT.SP + 1}px)`,
  PC: `@media (min-width: ${BREAK_POINT.TB + 1}px)`,
} as const;

export const COLOR = {
  THEME: '#E8C355',
  BORDER: {
    DEFAULT: '#EFEDE9',
  },
  FONT: {
    DEFAULT: '#333',
  },
};

const BASE_FONT_FAMILY =
  '"Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif;' as const;

export const FONT_FAMILY = {
  JP: {
    PRIMARY: `'Noto Serif JP', ${BASE_FONT_FAMILY}`,
    SECONDARY: `'Noto Sans JP', ${BASE_FONT_FAMILY}`,
  },
  EN: {
    HEADING: `'Dancing Script', ${BASE_FONT_FAMILY}`,
  },
} as const;
