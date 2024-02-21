import request, { gql } from "graphql-request";

const endpoint =
  "https://api.thegraph.com/subgraphs/name/teleportdao/teleportdao-bitcoin-polygon";

const RELAYED_DETAILS_QUERY = gql`
  {
    relayDetails {
      totalSubmittedBlockItem
      totalQueryItem
      totalRelayerItem
      totalTNTReward
      totalTDTReward
    }
  }
`;

const RELAYED_BLOCKS_QUERY = gql`
  {
    blockHeaders {
      relayer {
        id
      }
      selfHash
      parentHash
      timestamp
      isFinalized
    }
  }
`;

const CROSS_CHAIN_MESSAGES_QUERY = gql`
  {
    queryItems(limit: 10) {
      sentTRansactionId
      receivedTransactionId
      paidFee
      timestamp
    }
  }
`;

export const getRelayedDetails = () => {
  return request(endpoint, RELAYED_DETAILS_QUERY);
};

export const getRelayedBlocks = () => {
  return request(endpoint, RELAYED_BLOCKS_QUERY);
};

export const getCrossChainMessages = () => {
  return request(endpoint, CROSS_CHAIN_MESSAGES_QUERY);
};
