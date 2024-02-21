export type BlockHeaderDataType = {
  id: string;
  transactionId: string;
  height: string;
  selfHash: string;
  parentHash: string;
  relayer: {
    id: string;
  };
  gasPrice: string;
  isFinalized: boolean;
  timestamp: string;
  evmBlockNumber: string;
  TDTReward: null;
  TNTReward: null;
};

export type BlockHeadersDataType = {
  blockHeaders: BlockHeaderDataType[];
};

export type BlockHeadersTableData = {
  relayer: string;
  sourceChain: string;
  sourceAddress: string;
  targetChain: string;
  targetAddress: string;
  submissionTime: string;
  status: boolean;
};
