import React, { ReactElement } from "react";
import styled from "styled-components";
import Card from "../card";
import { Book } from "../../types";

const ListWrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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
