import React from "react";
import { LayoutHeaderProps } from "./interface";
import styled from "styled-components";

const LayoutHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.14);
  overflow: hidden;
  min-height: 80px;
  border-top: 1px solid #ccc;
`;

function Layout(props: LayoutHeaderProps) {
  return <LayoutHeaderWrapper>{props.children}</LayoutHeaderWrapper>;
}

export default React.memo(Layout);
