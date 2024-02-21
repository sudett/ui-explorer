import { useMemo, useEffect, useState } from "react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Tag } from "antd";
import type { TableProps } from "antd";
import type { BlockHeadersDataType, BlockHeadersTableData } from "./types";
import { getRelayedBlocks } from "../../lib/api";
import {
  RelayedTable,
  RelayedTableContainer,
} from "./RelayedBlocksTable.styled";

function RelayedBlocksTable() {
  const [dataSource, setDataSource] = useState<BlockHeadersTableData[] | []>(
    []
  );
  const {
    data: relayedBlocksData,
    isLoading: relayedBlocksIsLoading,
  }: UseQueryResult<BlockHeadersDataType, Error> = useQuery({
    queryKey: ["relayedBlocks"],
    queryFn: getRelayedBlocks,
  });
  console.log(relayedBlocksData);

  useEffect(() => {
    if (!relayedBlocksIsLoading)
      setDataSource(
        relayedBlocksData?.blockHeaders.map((blockHeader) => ({
          id: blockHeader.relayer.id,
          relayer: blockHeader.relayer.id,
          sourceChain: "",
          sourceAddress: blockHeader.selfHash,
          targetChain: "",
          targetAddress: blockHeader.parentHash,
          submissionTime: blockHeader.timestamp,
          status: blockHeader.isFinalized,
        }))
      );
  }, [relayedBlocksIsLoading, relayedBlocksData?.blockHeaders]);

  const columns: TableProps<BlockHeadersTableData>["columns"] = useMemo(() => {
    return [
      {
        title: "Relayer",
        dataIndex: "relayer",
        key: "relayer",
      },
      {
        title: "Source Chain",
        dataIndex: "sourceChain",
        key: "sourceChain",
      },
      {
        title: "Source Address",
        dataIndex: "sourceAddress",
        key: "sourceAddress",
      },
      {
        title: "Target Chain",
        dataIndex: "targetChain",
        key: "targetChain",
      },
      {
        title: "Target Address",
        dataIndex: "targetAddress",
        key: "targetAddress",
      },
      {
        title: "Submission Time",
        dataIndex: "submissionTime",
        key: "submissionTime",
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (_, record) => {
          return <Tag>{record.status}</Tag>;
        },
      },
    ];
  }, []);

  return (
    <RelayedTableContainer>
      <RelayedTable
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 1300 }}
      />
    </RelayedTableContainer>
  );
}

export default RelayedBlocksTable;
