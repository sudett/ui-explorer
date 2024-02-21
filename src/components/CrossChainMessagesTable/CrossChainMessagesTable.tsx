import { CrossChainMessagesTableContainer } from "./CrossChainMessagesTAble.styled";
import { TableProps } from "antd";
import { CrossChainMessagesTableData, QueryItemsDataType } from "./types";
import { useMemo, useState } from "react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getCrossChainMessages } from "../../lib/api";

function CrossChainMessagesTable() {
  // const [dataSource, setDataSource] = useState<
  //   CrossChainMessagesTableData[] | []
  // >([]);
  // const {
  //   data: crossChainMessagesData,
  //   isLoading: crossChainMessagesIsLoading,
  // }: UseQueryResult<QueryItemsDataType, Error> = useQuery({
  //   queryKey: ["crossChainMessages"],
  //   queryFn: getCrossChainMessages,
  // });
  // console.log(crossChainMessagesData);
  console.log("corss-chain");

  const columns: TableProps<CrossChainMessagesTableData>["columns"] =
    useMemo(() => {
      return [
        {
          title: "Created Time",
          dataIndex: "createdTime",
          key: "createdTime",
        },
        {
          title: "Fees Paid",
          dataIndex: "feesPaid",
          key: "feesPaid",
        },
        {
          title: "Applications",
          dataIndex: "applications",
          key: "applications",
        },
        {
          title: "Sent From",
          dataIndex: "sentFrom",
          key: "sentFrom",
        },
        {
          title: "Sent Message",
          dataIndex: "sentMessage",
          key: "sentMessage",
        },
        {
          title: "Received Time",
          dataIndex: "receivedTime",
          key: "receivedTime",
        },
        {
          title: "Received On",
          dataIndex: "receivedOn",
          key: "receivedOn",
        },
        {
          title: "Received Message",
          dataIndex: "receivedMessage",
          key: "receivedMessage",
        },
      ];
    }, []);

  return (
    <CrossChainMessagesTableContainer>
      <CrossChainMessagesTable
        columns={columns}
        dataSource={[]}
        scroll={{ x: 1300 }}
      />
    </CrossChainMessagesTableContainer>
  );
}

export default CrossChainMessagesTable;
