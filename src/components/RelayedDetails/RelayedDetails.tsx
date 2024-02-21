import { Col, Row } from "antd";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryResult } from "@tanstack/react-query";
import {
  DividerContainer,
  GradientBoxContainer,
  SimpleBoxContainer,
  RelayedDetailsTitle,
  RelayedDetailsNumber,
  SimpleRowContainer,
} from "./RelayedDetails.styled";
import { getRelayedDetails } from "../../lib/api";
import type { RelayedDetailsDataType } from "./types";

const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

function RelayedDetails() {
  const {
    data: relayedDetailsData,
    isLoading: relayedDetailsIsLoading,
  }: UseQueryResult<RelayedDetailsDataType, Error> = useQuery({
    queryKey: ["relayedDetails"],
    queryFn: getRelayedDetails,
  });
  console.log(relayedDetailsData);

  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <GradientBoxContainer direction="vertical">
            <RelayedDetailsTitle>CROSS-CHAIN MESSAGES</RelayedDetailsTitle>
            <RelayedDetailsNumber>
              {relayedDetailsIsLoading
                ? 0
                : relayedDetailsData?.relayDetails[0].totalSubmittedBlockItem}
            </RelayedDetailsNumber>
          </GradientBoxContainer>
        </Col>
        <Col span={8}>
          <GradientBoxContainer direction="vertical">
            <RelayedDetailsTitle>TOTAL RELAYERS</RelayedDetailsTitle>
            <RelayedDetailsNumber>
              {relayedDetailsIsLoading
                ? 0
                : relayedDetailsData?.relayDetails[0].totalQueryItem}
            </RelayedDetailsNumber>
          </GradientBoxContainer>
        </Col>
        <Col span={8}>
          <GradientBoxContainer direction="vertical">
            <RelayedDetailsTitle>TOTAL PAID REWARDS</RelayedDetailsTitle>
            <RelayedDetailsNumber>
              {relayedDetailsIsLoading
                ? 0
                : relayedDetailsData?.relayDetails[0].totalTNTReward}
            </RelayedDetailsNumber>
          </GradientBoxContainer>
        </Col>
      </Row>

      <DividerContainer />

      <Row gutter={16}>
        <Col span={8}>
          <SimpleBoxContainer direction="vertical">
            <RelayedDetailsTitle>SUPPORTED NETWORKS</RelayedDetailsTitle>
            <RelayedDetailsNumber>
              {relayedDetailsIsLoading ? 0 : 3}
            </RelayedDetailsNumber>
          </SimpleBoxContainer>
        </Col>
        <Col span={8}>
          <SimpleBoxContainer direction="vertical">
            <RelayedDetailsTitle>TOTAL SUBMITTED BLOCKS</RelayedDetailsTitle>
            <RelayedDetailsNumber>
              {relayedDetailsIsLoading
                ? 0
                : relayedDetailsData?.relayDetails[0].totalRelayerItem}
            </RelayedDetailsNumber>
          </SimpleBoxContainer>
        </Col>
        <Col span={8}>
          <SimpleBoxContainer direction="vertical">
            <RelayedDetailsTitle>TOTAL RELAYED BLOCKS</RelayedDetailsTitle>
            <RelayedDetailsNumber>
              {relayedDetailsIsLoading
                ? 0
                : relayedDetailsData?.relayDetails[0].totalRelayerItem}
            </RelayedDetailsNumber>
          </SimpleBoxContainer>
        </Col>
      </Row>
    </>
  );
}

export default RelayedDetails;
