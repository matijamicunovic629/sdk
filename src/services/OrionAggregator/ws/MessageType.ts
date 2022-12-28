const MessageType = {
  ERROR: 'e',
  PING_PONG: 'pp',
  SWAP_INFO: 'si',
  INITIALIZATION: 'i',
  AGGREGATED_ORDER_BOOK_UPDATE: 'aobu',
  ASSET_PAIRS_CONFIG_UPDATE: 'apcu',
  ASSET_PAIR_CONFIG_UPDATE: 'apiu',
  ADDRESS_UPDATE: 'au',
  CFD_ADDRESS_UPDATE: 'auf',
  BROKER_TRADABLE_ATOMIC_SWAP_ASSETS_BALANCE_UPDATE: 'btasabu',
  UNSUBSCRIPTION_DONE: 'ud',
} as const;

export default MessageType;
