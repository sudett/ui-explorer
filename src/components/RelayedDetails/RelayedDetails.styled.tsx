import styled from "styled-components";
import { Divider, Space, Typography } from "antd";
import GradientBg from "../../assets/img/GradientBg";

export const GradientBoxContainer = styled(Space)`
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.08),
    rgba(57, 255, 101, 0.2)
  );
  border: 1px solid var(--gray-border-color);
  border-radius: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  padding: 2rem;
  height: 100%;
`;

export const DividerContainer = styled(Divider)`
  border-block-start: 1px solid #202020;
`;

export const SimpleBoxContainer = styled(Space)`
  background-color: var(--gray-bg-color);
  padding: 2rem 1.5rem;
  border: 1px solid var(--gray-border-color);
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
`;

export const RelayedDetailsTitle = styled(Typography)`
  &.ant-typography {
    color: var(--text-gray);
    font-weight: bold;
    font-size: 1rem;
  }
`;

export const RelayedDetailsNumber = styled(Typography)`
  &.ant-typography {
    color: var(--text-white);
    font-weight: bold;
    font-size: 3rem;
    margin-top: 1rem;
  }
`;
