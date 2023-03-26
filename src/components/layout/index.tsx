import React from "react";
import { LayoutProps } from "./interface";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  box-shadow: 0 0 15px 5px #0000003b;
  padding-bottom: 20px;
`;

function Layout(props: LayoutProps) {
  return (
    <LayoutWrapper>
      {props.head}
      {props.children}
    </LayoutWrapper>
  );
}

export default React.memo(Layout);
