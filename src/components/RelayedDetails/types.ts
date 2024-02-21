export type RelayedDetailType = {
  id: string;
  totalRelayerItem: string;
  totalSubmittedBlockItem: string;
  totalQueryItem: string;
  totalPaidFee: string;
  totalTNTReward: string;
  totalTDTReward: string;
  lastSubmittedHeader: string;
  lastFinalizedHeader: string;
  relayerPercentageFee: string;
};

export type RelayedDetailsDataType = {
  relayDetails: RelayedDetailType[];
};
