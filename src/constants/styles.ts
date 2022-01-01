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
  BORDER: {
    DEFAULT: '#EFEDE9',
  },
};
