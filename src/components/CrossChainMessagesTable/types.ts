export type QueryItemDataType = {
  id: string;
  sentTransactionId: string;
  receivedTransactionId: string;
  height: string;
  paidFee: string;
  timestamp: string;
};

export type QueryItemsDataType = {
  queryItems: QueryItemDataType[];
};

export type CrossChainMessagesTableData = {
  createdTime: Date;
  feesPaid: string;
  applications: string;
  sentFrom: string;
  sentMessage: string;
  receivedTime: Date;
  receivedOn: string;
  receivedMessage: string;
};
