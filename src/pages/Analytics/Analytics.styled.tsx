import styled from "styled-components";
import { Row, Space, Typography } from "antd";

export const Title = styled(Typography.Title)`
  &.ant-typography {
    color: var(--text-white);
  }
`;

export const PrimaryTitle = styled(Title)`
  padding: 2.5rem 0 1rem;
`;

export const ChartContainer = styled(Space)`
  width: 100%;
  border: 1px solid var(--gray-border-color);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

export const TableFilterContainer = styled(Row)`
  align-items: center;
  margin-bottom: 3rem;
`;

export const ChartTitle = styled(Typography)`
  &.ant-typography {
    color: var(--text-gray);
    font-weight: bold;
    font-size: 1rem;
  }
`;

export const ChartNumber = styled(Typography)`
  &.ant-typography {
    color: var(--text-white);
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 1;
  }
`;
