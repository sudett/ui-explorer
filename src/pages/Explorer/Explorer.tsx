import { useState } from "react";
import { Col } from "antd";
import Header from "../../components/Header/Header";
import RelayedDetails from "../../components/RelayedDetails/RelayedDetails";
import RelayedBlocksFilterBox from "../../components/RelayedBlocksFilterBox/RelayedBlocksFilterBox";
import {
  PrimaryTitle,
  InputContainer,
  ButtonsContainer,
  StyledButton,
  TableFilterContainer,
  SecondaryTitle,
} from "./Explorer.styled";
import RelayedBlocksTable from "../../components/RelayedBlocksTable/RelayedBlocksTable";
import CrossChainMessagesTable from "../../components/CrossChainMessagesTable/CrossChainMessagesTable";

function Explorer() {
  const [activeTable, setActiveTable] = useState("relayedBlocks");

  return (
    <>
      <Header />
      <PrimaryTitle level={2}>Explorer</PrimaryTitle>
      <RelayedDetails />
      <InputContainer placeholder="Search by transaction hash or address" />
      <ButtonsContainer>
        <StyledButton
          active={activeTable === "relayedBlocks" ? true : false}
          onClick={() => setActiveTable("relayedBlocks")}
        >
          Relayed Blocks
        </StyledButton>
        <StyledButton
          active={activeTable === "crossChainMessages" ? true : false}
          onClick={() => setActiveTable("crossChainMessages")}
        >
          Cross Chain Messages
        </StyledButton>
      </ButtonsContainer>
      <TableFilterContainer>
        <Col span={8}>
          <SecondaryTitle level={2}>Relayed Blocks</SecondaryTitle>
        </Col>
        <Col span={16}>
          <RelayedBlocksFilterBox />
        </Col>
      </TableFilterContainer>
      {activeTable === "relayedBlocks" && <RelayedBlocksTable />}
      {/* {activeTable === "crossChainMessages" && <CrossChainMessagesTable />} */}
    </>
  );
}

export default Explorer;
