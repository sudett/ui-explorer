import styled from "styled-components";
import { Row, Select } from "antd";

export const FilterBoxesContainer = styled(Row)``;

export const FilterBox = styled(Select)`
  width: 100%;

  .ant-select-selector {
    background-color: var(--gray-bg-color) !important;
    border: 1px solid var(--gray-border-color) !important;
  }

  .ant-select-arrow {
    color: var(--text-white) !important;
  }
`;
