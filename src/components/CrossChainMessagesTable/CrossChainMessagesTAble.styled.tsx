import styled from "styled-components";
import { Space, Table } from "antd";

export const CrossChainMessagesTableContainer = styled(Space)`
  width: 100%;

  .ant-space-item {
    width: 100%;
  }
`;

export const CrossChainMessagesTable = styled(Table)`
  width: 100%;

  &.ant-table-wrapper .ant-table {
    background-color: transparent;
    color: var(--text-white);
  }

  &.ant-table-wrapper .ant-table-thead > tr > th {
    background-color: var(--gray-bg-color);
    color: var(--text-white);
    border-bottom: 1px solid transparent;
  }

  &.ant-table-wrapper .ant-table-thead > tr > th {
  }

  &.ant-table-wrapper .ant-table-tbody > tr > td {
    border-bottom: 1px solid var(--gray-bg-color) !important;
  }

  &.ant-table-wrapper .ant-table-tbody > tr:hover {
    background-color: var(--gray-bg-color) !important;
  }

  &.ant-table-wrapper .ant-table-tbody > tr:hover > * {
    background-color: transparent !important;
  }

  &.ant-table-wrapper table {
    border: 1px solid var(--gray-bg-color);
  }

  &.ant-table-wrapper
    .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(
      .ant-table-row-expand-icon-cell
    ):not([colspan])::before {
    background-color: transparent;
  }

  .ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector {
    background-color: var(--gray-bg-color);
    color: var(--text-white);
    border: 1px solid var(--gray-border-color);
  }

  .ant-select-outlined:not(.ant-select-customize-input)
    .ant-select-selector:hover {
    border: 1px solid var(--text-gray);
  }

  .ant-select .ant-select-arrow {
    color: var(--text-white);
  }

  .ant-select-single.ant-select-open .ant-select-selection-item {
    color: var(--text-white);
  }

  .ant-select.ant-select-outlined:hover {
    border: 1px solid var(--gray-color);
  }

  .ant-pagination .ant-pagination-item-active {
    background-color: var(--gray-bg-color);
    border: 1px solid var(--gray-border-color);
  }

  .ant-pagination .ant-pagination-item a {
    color: var(--text-white);
  }

  .ant-pagination
    .ant-pagination-jump-next
    .ant-pagination-item-container
    .ant-pagination-item-ellipsis {
    color: var(--text-white);
  }

  .ant-pagination .ant-pagination-next button,
  .ant-pagination .ant-pagination-prev button {
    color: var(--text-white);
  }
`;
