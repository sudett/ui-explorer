import { Col, Row } from "antd";
import { FilterBox } from "./RelayedBlocksFilterBox.styled";

function RelayedBlocksFilterBox() {
  return (
    <Row gutter={8}>
      <Col span={6}>
        <FilterBox
          showSearch
          options={[
            {
              value: "all",
              label: "All",
            },
            {
              value: "bitcoin",
              label: "Bitcoin",
            },
            {
              value: "polygon",
              label: "Polygon",
            },
            {
              value: "ethereum",
              label: "Ethereum",
            },
            {
              value: "binance",
              label: "Binance",
            },
          ]}
        />
      </Col>

      <Col span={6}>
        <FilterBox
          showSearch
          options={[
            {
              value: "all",
              label: "All",
            },
            {
              value: "bitcoin",
              label: "Bitcoin",
            },
            {
              value: "polygon",
              label: "Polygon",
            },
            {
              value: "ethereum",
              label: "Ethereum",
            },
            {
              value: "binance",
              label: "Binance",
            },
          ]}
        />
      </Col>

      <Col span={6}>
        <FilterBox
          showSearch
          options={[
            {
              value: "all",
              label: "All",
            },
            {
              value: "bitcoin",
              label: "Bitcoin",
            },
            {
              value: "polygon",
              label: "Polygon",
            },
            {
              value: "ethereum",
              label: "Ethereum",
            },
            {
              value: "binance",
              label: "Binance",
            },
          ]}
        />
      </Col>

      <Col span={6}>
        <FilterBox
          showSearch
          options={[
            {
              value: "all",
              label: "All",
            },
            {
              value: "bitcoin",
              label: "Bitcoin",
            },
            {
              value: "polygon",
              label: "Polygon",
            },
            {
              value: "ethereum",
              label: "Ethereum",
            },
            {
              value: "binance",
              label: "Binance",
            },
          ]}
        />
      </Col>
    </Row>
  );
}

export default RelayedBlocksFilterBox;
