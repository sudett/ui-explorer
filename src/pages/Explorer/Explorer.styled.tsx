import styled from "styled-components";
import { Button, Input, Row, Space, Typography } from "antd";

export const Title = styled(Typography.Title)`
  &.ant-typography {
    color: var(--text-white);
  }
`;

export const PrimaryTitle = styled(Title)`
  padding: 2.5rem 0 1rem;
`;

export const SecondaryTitle = styled(Title)`
  padding: 2rem 0 1rem;
`;

export const InputContainer = styled(Input.Search)`
  margin: 3rem 0;

  .ant-input-outlined {
    background-color: var(--gray-bg-color);
    border: 1px solid var(--gray-border-color);
    color: var(--text-white);
  }

  .ant-input-outlined::placeholder {
    color: var(--gray-border-color);
  }

  &.ant-input-search .ant-input:hover {
    border-color: var(--text-gray);
  }

  &.ant-input-group-wrapper-outlined .ant-input-group-addon {
    background-color: var(--gray-bg-color);
  }

  &.ant-input-outlined:focus-within {
    background-color: red;
  }

  .ant-btn-default {
    background-color: var(--gray-bg-color);
    border: 1px solid var(--gray-border-color);
    border-left-color: transparent;
  }

  .ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    background-color: var(--gray-bg-color);
    border-color: var(--text-gray);
  }

  &.ant-input-search
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button:not(.ant-btn-primary) {
    color: var(--text-white);
  }
`;

export const ButtonsContainer = styled(Space)`
  border: 1px solid var(--gray-border-color);
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const StyledButton = styled(Button)`
  background-color: ${(props) =>
    props.active ? "var(--gray-bg-color)" : "transparent"};
  color: var(--text-white);
  border: ${(props) =>
    props.active
      ? "1px solid var(--gray-border-color)"
      : "1px solid transparent"};

  &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    background-color: var(--gray-bg-color);
    color: var(--text-white);
    border: 1px solid var(--gray-border-color);
  }
`;

export const TableFilterContainer = styled(Row)`
  align-items: center;
`;
