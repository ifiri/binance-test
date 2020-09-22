export const FILTERS = {
  BNB: 'bnb',
  BTC: 'btc',
  ALTS: 'alts',
  ETH: 'eth',
  XRP: 'xrp',
  TRX: 'trx',
};

export const FILTERS_MAP = {
  [FILTERS.BTC]: FILTERS.BTC,
  [FILTERS.BNB]: FILTERS.BNB,
  [FILTERS.ETH]: FILTERS.BNB,
  [FILTERS.XRP]: FILTERS.XRP,
  [FILTERS.TRX]: FILTERS.TRX,
  [FILTERS.ALTS]: [
    FILTERS.ETH,
    FILTERS.XRP,
    FILTERS.TRX,
  ],
};

