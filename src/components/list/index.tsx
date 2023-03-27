import React, { ReactElement } from "react";
import styled from "styled-components";

const ListWrapper = styled.div`
  margin: 20px 0;
  min-height: 65vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  // grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 30px;
  padding: 0 20px;
`;

interface ListProps {
  children?: ReactElement | ReactElement[] | null;
}

function List(props: ListProps) {
  return <ListWrapper>{props.children}</ListWrapper>;
}

export default React.memo(List);
