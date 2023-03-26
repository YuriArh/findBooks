import React from "react";
import styled from "styled-components";
import { Dispatch } from "react";

const ControlsWrapper = styled.div`
  color: white;
  display: flex;
  margin 15px auto;
 
`;

const Categories = styled.div`
  margin-right: 15px;
`;
const Select = styled.select`
  padding: 0px;
  margin-left: 5px;
  width: 145px;
  height: 39px;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #d5d0d0;
  border-radius: 100px;
`;

const Sorts = styled.div``;

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
      <Categories>
        Categories:
        <Select
          onChange={(e) => {
            props.setCategorie(e.target.value);
          }}
        >
          {CategoriesList.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </Categories>
      <Sorts>
        Sorts by:
        <Select
          onChange={(e) => {
            props.setSort(e.target.value);
          }}
        >
          <option key={1} value={"newest"}>
            newest
          </option>
          <option key={2} value={"relevance"}>
            relevance
          </option>
        </Select>
      </Sorts>
    </ControlsWrapper>
  );
}

export default React.memo(Controls);
