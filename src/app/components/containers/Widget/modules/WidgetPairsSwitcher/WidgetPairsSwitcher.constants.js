import { FILTERS } from 'app/constants';

export const AVAILABLE_MODES = [
  {
    text: 'BNB',
    value: FILTERS.BNB,
  },
  {
    text: 'BTC',
    value: FILTERS.BTC,
  },
  {
    text: 'ALTS',
    value: FILTERS.ALTS,
    descendants: [
      {
        value: FILTERS.ALTS,
        text: 'All'
      },
      {
        value: FILTERS.ETH,
        text: 'ETH'
      },
      {
        value: FILTERS.XRP,
        text: 'XRP'
      },
      {
        value: FILTERS.TRX,
        text: 'TRX'
      }
    ],
  },
];
