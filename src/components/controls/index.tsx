import React from "react";
import styled from "styled-components";
import { Dispatch } from "react";
import Select from "../select";

const ControlsWrapper = styled.div`
  color: white;
  display: flex;

  margin: 0 auto;
  margin-top: 15px;
  flex-wrap: wrap;

  & div:first-child {
    margin-right: 15px;
  }

  @media (max-width: 380px) {
    width: 240px;
  }
`;

const CategoriesList = [
  "all",
  "art",
  "biography",
  "computers",
  "history",
  "medical",
  "poetry",
];

function Controls(props: {
  setSort: Dispatch<React.SetStateAction<string>>;
  setCategorie: Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <ControlsWrapper>
      <Select
        label="Categories"
        values={CategoriesList}
        onChange={props.setCategorie}
      />
      <Select
        label="Sorts by"
        values={["newest", "relevance"]}
        onChange={props.setSort}
      />
    </ControlsWrapper>
  );
}

export default React.memo(Controls);
