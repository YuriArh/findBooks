import React from "react";
import { useState } from "react";
import styled from "styled-components";
import searchImg from "../../icons/searchimg.svg";

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  margin: 0 auto;

  height: 39px;
  @media (max-width: 510px) {
    width: 300px;
  }
  @media (max-width: 380px) {
    width: 240px;
  }
`;
const Input = styled.input<{ error: string }>`
  width: 410px;
  height: 39px;
  padding: 10px;
  background: #ffffff;
  border: ${(props) => (props.error ? "2px solid red" : "1px solid #d5d0d0")};
  border-radius: 100px;
  &::placeholder {
    color: ${(props) => (props.error ? "red" : "")};
  }
`;
const SearchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-left: 10px;
  width: 39px;
  height: 39px;

  background: #252525;
  border: none;
  border-radius: 100px;

  &:hover {
    cursor: pointer;
  }
`;

function Search(props: {
  onSearch: (value?: string) => void;
  firstValue?: string;
  error: string;
}) {
  const [value, setValue] = useState<string | undefined>(props.firstValue);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      props.onSearch(value);
    }
  };
  return (
    <SearchWrapper>
      <Input
        placeholder={props.error ? props.error : "Search"}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        value={value}
        error={props.error}
      />
      <SearchButton onClick={() => props.onSearch(value)}>
        <img src={searchImg} alt={"searchbtn"}></img>
      </SearchButton>
    </SearchWrapper>
  );
}

export default React.memo(Search);
